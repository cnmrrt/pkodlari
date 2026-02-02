
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { Search, MapPin, ChevronRight, Home, ArrowLeft, Loader2, Building2, Map, Copy, Check, Info, Share2 } from 'lucide-react';
import { PostalData, SearchResult } from './types';

const findValue = (obj: any, possibleKeys: string[]) => {
  if (!obj || typeof obj !== 'object') return null;
  const normalize = (s: string) => s.toLocaleLowerCase('tr').replace(/\s+/g, '').replace(/[ıığüşöç]/g, (m) => ({'ı':'i','ğ':'g','ü':'u','ş':'s','ö':'o','ç':'c'}[m] || m));
  const normalizedPossible = possibleKeys.map(normalize);
  for (const key of Object.keys(obj)) {
    if (normalizedPossible.includes(normalize(key))) return obj[key];
  }
  return null;
};

const Header = () => (
  <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="bg-slate-900 p-1.5 rounded-lg text-white">
          <MapPin className="w-4 h-4" />
        </div>
        <span className="font-bold text-slate-900 tracking-tight">Posta Kodu Rehberi</span>
      </Link>
      <nav className="text-sm font-medium text-slate-500 flex gap-6">
        <Link to="/" className="hover:text-slate-900 transition-colors">Şehirler</Link>
        <a href="https://postakodu.ptt.gov.tr/" target="_blank" className="hover:text-slate-900 transition-colors">PTT Sorgulama</a>
      </nav>
    </div>
  </header>
);

const SearchBar: React.FC<{ data: PostalData | null }> = ({ data }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const results = useMemo(() => {
    if (!data || query.length < 2) return [];
    const lowerQuery = query.toLocaleLowerCase('tr');
    const items: SearchResult[] = [];
    
    Object.entries(data).forEach(([city, districts]) => {
      if (city.toLocaleLowerCase('tr').includes(lowerQuery)) items.push({ city, district: '', neighborhood: '', zipCode: '', type: 'city' });
      Object.entries(districts).forEach(([dist, neighs]) => {
        if (dist.toLocaleLowerCase('tr').includes(lowerQuery)) items.push({ city, district: dist, neighborhood: '', zipCode: '', type: 'district' });
        Object.entries(neighs).forEach(([n, code]) => {
          if (n.toLocaleLowerCase('tr').includes(lowerQuery) || code.includes(query)) {
            items.push({ city, district: dist, neighborhood: n, zipCode: code, type: 'neighborhood' });
          }
        });
      });
    });
    return items.slice(0, 6);
  }, [data, query]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className={`flex items-center gap-3 px-4 py-3 bg-white border rounded-xl transition-all ${isFocused ? 'ring-2 ring-slate-900/5 border-slate-400' : 'border-slate-200'}`}>
        <Search className="w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="İl, ilçe veya mahalle ismi yazın..."
          className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
      </div>
      
      {isFocused && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-[60] overflow-hidden">
          {results.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {results.map((res, i) => (
                <Link
                  key={i}
                  to={res.type === 'city' ? `/city/${res.city}` : res.type === 'district' ? `/city/${res.city}/${res.district}` : `/city/${res.city}/${res.district}/${res.neighborhood}`}
                  className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="text-slate-400">
                    {res.type === 'city' ? <Map className="w-4 h-4" /> : res.type === 'district' ? <Building2 className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-slate-900">{res.neighborhood || res.district || res.city}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-medium">{[res.city, res.district].filter(Boolean).join(' / ')}</div>
                  </div>
                  {res.zipCode && <div className="mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">{res.zipCode}</div>}
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 text-sm">Sonuç bulunamadı</div>
          )}
        </div>
      )}
    </div>
  );
};

const HomePage: React.FC<{ data: PostalData | null }> = ({ data }) => {
  useEffect(() => {
    document.title = "Türkiye Posta Kodları | Rehber";
  }, []);

  if (!data) return (
    <div className="py-32 flex flex-col items-center justify-center">
      <Loader2 className="w-8 h-8 text-slate-400 animate-spin" />
    </div>
  );

  const cityList = Object.keys(data).sort((a, b) => a.localeCompare(b, 'tr'));

  return (
    <div className="animate-in fade-in duration-500">
      <div className="text-center mb-12 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Türkiye Posta Kodları</h1>
        <p className="text-slate-500 mb-10">Hızlıca ilçe ve mahalle posta kodlarını sorgulayın.</p>
        <SearchBar data={data} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cityList.map((city) => (
          <Link
            key={city}
            to={`/city/${city}`}
            className="soft-card p-4 rounded-xl text-center"
          >
            <div className="font-semibold text-slate-900 text-sm truncate uppercase">{city}</div>
            <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              {Object.keys(data[city] || {}).length} İLÇE
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const CityPage: React.FC<{ data: PostalData | null }> = ({ data }) => {
  const { city } = useParams();
  
  useEffect(() => {
    if (city) {
      document.title = `${city} Posta Kodları | Rehber`;
    }
  }, [city]);

  if (!data || !city || !data[city]) return null;
  const districts = Object.keys(data[city]).sort((a, b) => a.localeCompare(b, 'tr'));

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl mx-auto">
      <div className="mb-10 flex items-center gap-4">
        <Link to="/" className="text-slate-400 hover:text-slate-900 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">{city} Posta Kodları</h1>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{districts.length} İLÇE</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {districts.map((dist) => (
          <Link
            key={dist}
            to={`/city/${city}/${dist}`}
            className="soft-card p-6 rounded-xl flex items-center justify-between"
          >
            <div>
              <h3 className="font-bold text-slate-900 uppercase text-lg">{dist}</h3>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{Object.keys(data[city][dist] || {}).length} mahalle</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </Link>
        ))}
      </div>
    </div>
  );
};

const DistrictPage: React.FC<{ data: PostalData | null }> = ({ data }) => {
  const { city, district } = useParams();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (district) {
      document.title = `${district} Posta Kodları | Rehber`;
    }
  }, [district]);

  if (!data || !city || !district || !data[city] || !data[city][district]) return null;
  const neighs = Object.entries(data[city][district])
    .filter(([n]) => n.toLocaleLowerCase('tr').includes(filter.toLocaleLowerCase('tr')))
    .sort(([a], [b]) => a.localeCompare(b, 'tr'));

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl mx-auto">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link to={`/city/${city}`} className="text-slate-400 hover:text-slate-900 transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">{district} Posta Kodları</h1>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{city}</p>
          </div>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Mahallelerde ara..."
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {neighs.map(([n, code]) => (
          <Link 
            key={n}
            to={`/city/${city}/${district}/${n}`}
            className="soft-card p-5 flex items-center justify-between group"
          >
            <div className="min-w-0 pr-4">
              <h4 className="font-semibold text-slate-900 uppercase truncate text-base">{n}</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">MAHALLE</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="mono font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-sm">{code}</span>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
            </div>
          </Link>
        ))}
        {neighs.length === 0 && (
          <div className="col-span-full p-12 text-center text-slate-400 text-sm">Sonuç bulunamadı</div>
        )}
      </div>
    </div>
  );
};

const NeighborhoodPage: React.FC<{ data: PostalData | null }> = ({ data }) => {
  const { city, district, neighborhood } = useParams();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (neighborhood) {
      document.title = `${neighborhood} Posta Kodu | Rehber`;
    }
  }, [neighborhood]);

  if (!data || !city || !district || !neighborhood || !data[city] || !data[city][district] || !data[city][district][neighborhood]) {
    return (
      <div className="py-20 text-center">
        <p className="text-slate-500">Mahalle verisi bulunamadı.</p>
        <Link to="/" className="text-blue-600 font-medium mt-4 inline-block">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  const zipCode = data[city][district][neighborhood];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(zipCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-2xl mx-auto py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Link to="/" className="hover:text-slate-900 transition-colors">TÜRKİYE</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/city/${city}`} className="hover:text-slate-900 transition-colors">{city}</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/city/${city}/${district}`} className="hover:text-slate-900 transition-colors">{district}</Link>
      </nav>

      <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
        <div className="text-center mb-10">
          <div className="inline-flex p-3 bg-slate-50 rounded-2xl mb-6">
            <MapPin className="w-6 h-6 text-slate-900" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{neighborhood}</h1>
          <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">{district}, {city}</p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">POSTA KODU</p>
            <div className="mono text-7xl font-bold text-slate-900 mb-8">{zipCode}</div>
            <button 
              onClick={copyToClipboard}
              className={`flex items-center gap-2 mx-auto px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 ${copied ? 'bg-green-600 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'KOPYALANDI' : 'KODU KOPYALA'}
            </button>
          </div>
          {/* Decorative background number */}
          <div className="absolute -bottom-10 -right-10 mono text-[12rem] font-black text-slate-200/50 select-none">
            {zipCode.substring(0, 2)}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4">
          <div className="flex items-start gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
            <Info className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Adres Yazımı Örneği</h4>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                {neighborhood} Mah. No:1 D:1<br />
                {zipCode} {district}/{city}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button 
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: `${neighborhood} Posta Kodu`,
                text: `${city}, ${district}, ${neighborhood} mahallesinin posta kodu: ${zipCode}`,
                url: window.location.href,
              });
            }
          }}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest"
        >
          <Share2 className="w-4 h-4" /> PAYLAŞ
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [postalData, setPostalData] = useState<PostalData | null>(null);

  useEffect(() => {
    fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/postakodlari.json')
      .then(res => res.json())
      .then(rawData => {
        const transformed: PostalData = {};
        const entries = Array.isArray(rawData) ? rawData : Object.values(rawData);
        
        entries.forEach((item: any) => {
          if (!item || typeof item !== 'object') return;
          const city = findValue(item, ['il', 'city', 'İL', 'şehir']);
          const dist = findValue(item, ['ilce', 'district', 'İLÇE', 'İlçe']);
          const neigh = findValue(item, ['mahalle', 'neighborhood', 'semt', 'MAHALLE']);
          const zip = findValue(item, ['posta_kodu', 'zip', 'pk', 'POSTA KODU', 'PK']);

          if (city) {
            const cityStr = String(city).toLocaleUpperCase('tr').trim();
            const distStr = String(dist || "MERKEZ").toLocaleUpperCase('tr').trim();
            const neighStr = String(neigh || "MERKEZ").toLocaleUpperCase('tr').trim();
            const codeStr = String(zip || "00000").trim();
            if (!transformed[cityStr]) transformed[cityStr] = {};
            if (!transformed[cityStr][distStr]) transformed[cityStr][distStr] = {};
            transformed[cityStr][distStr][neighStr] = codeStr;
          }
        });
        setPostalData(transformed);
      });
  }, []);

  return (
    <HashRouter>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<HomePage data={postalData} />} />
          <Route path="/city/:city" element={<CityPage data={postalData} />} />
          <Route path="/city/:city/:district" element={<DistrictPage data={postalData} />} />
          <Route path="/city/:city/:district/:neighborhood" element={<NeighborhoodPage data={postalData} />} />
          <Route path="*" element={<HomePage data={postalData} />} />
        </Routes>
      </main>
      <footer className="py-12 text-center text-slate-400 text-xs font-medium border-t border-slate-200 mt-20">
        Posta Kodu Rehberi &copy; {new Date().getFullYear()} — Tüm hakları saklıdır.
      </footer>
    </HashRouter>
  );
};

export default App;
