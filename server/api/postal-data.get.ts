export default defineCachedEventHandler(async (event) => {
    //const data = await $fetch('https://words-from-life-5cb26-default-rtdb.firebaseio.com/postakodlari.json');
    //const data = await $fetch('https://pkodlari.com/data/city.json');

     const data = [
    { "il": "Adana", "ilce": "Aladağ", "mahalle": "Akpınar Mahallesi", "postaKodu": "01720", "semt": "Aladağ" }, { "il": "Adana", "ilce": "Aladağ", "mahalle": "Başpınar Mahallesi", "postaKodu": "01720", "semt": "Aladağ" }, { "il": "Adana", "ilce": "Aladağ", "mahalle": "Mansurlu Mahallesi", "postaKodu": "01720", "semt": "Aladağ" }, { "il": "Adana", "ilce": "Aladağ", "mahalle": "Sinanpaşa Mahallesi", "postaKodu": "01720", "semt": "Aladağ" }, {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Akören Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Boztahta Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Büyüksofulu Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Ceritler Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Dailer Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Darılık Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Dölekli Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Ebrim Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Eğner Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Gerdibi Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Gireğiyeniköy Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Gökçeköy Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Kabasakal Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Karahan Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Kıcak Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Kışlak Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Kızıldam Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Kökez Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Köprücük Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Küp Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Madenli Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Mazılık Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Posyağbasan Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Topallı Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Uzunkuyu Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Yetimli Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Aladağ",
        "mahalle": "Yüksekören Mahallesi",
        "postaKodu": "01722",
        "semt": "Madenli"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Adapınar Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Adatepe Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Ağaçlı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Ağaçpınar Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Akdamlar Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Altıgözbekirli Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Altıkara Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Altıocak Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Atatürk Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Aydemiroğlu Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Aydınlar Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Azizli Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Başören Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Belediye Evleri Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Birkent Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Bota Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Burhaniye Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Burhanlı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Büyükburhaniye Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Büyükkırım Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Büyükmangıt Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Çakaldere Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Camuzağılı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Çataklı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Çatalhöyük Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Çevretepe Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Ceyhanbekirli Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Çiçekli Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Çiftlikler Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Civantayak Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Çokçapınar Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Dağıstan Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Değirmendere Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Değirmenli Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Dikilitaş Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Dokuztekne Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Doruk Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Durhasandede Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Dutlupınar Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Ekinyazı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Elmagölü Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Emek Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Erenler Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Esentepe Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Fatih Sultan Mehmet Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Gazi Osman Paşa Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Gümürdülü Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Gündoğan Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Günlüce Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Hamdilli Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Hamidiye Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Hamitbey Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Hamitbeybucağı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "İmran Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "İnceyer Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "İnönü Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Irmaklı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "İsalı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Isırganlı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "İstiklal Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Karakayalı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Kelemeti Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Kılıçkaya Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Kıvrıklı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Kızıldere Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Konakoğlu Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Köprülü Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Körkuyu Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Körüklü Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Kösreli Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Küçükburhaniye Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Küçükkırım Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Küçükmangıt Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Kurtkulağı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Kurtpınar Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Kuzucak Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Mercimek Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Mercin Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Mithat Paşa Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Modern Evler Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Muradiye Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Mustafabeyli Mahallesi",
        "postaKodu": "01924",
        "semt": "Mustafabeyli"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Namık Kemal Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Narlık Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Nazımbey Yeniköy Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Sağırlar Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Sağkaya Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Şahin Özbilen Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Sarıbahçe Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Sarımazı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Sarımazı SB Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Sarı Sakal Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Şehit Hacı İbrahim Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Selimiye Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Sirkeli Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Soğukpınar Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Soysallı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Tatarlı Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Tatlıkuyu Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Toktamış Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Tumlu Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Üçdut Yeşilova Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Ulus Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Veysiye Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Yalak Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Yarsuat Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Yellibel Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Yeşilbahçe Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Yeşildam Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Yılankale Mahallesi",
        "postaKodu": "01922",
        "semt": "Büyükmangıt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Zübeyde Hanım Mahallesi",
        "postaKodu": "01920",
        "semt": "Ceyhan"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Belediye Evleri Mahallesi",
        "postaKodu": "01360",
        "semt": "Huzurevleri"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Beyazevler Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Bozcalar Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Dörtler Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Esentepe Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Fadıl Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Gökkuyu Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Güzelyalı Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Huzurevleri Mahallesi",
        "postaKodu": "01360",
        "semt": "Huzurevleri"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Kabasakal Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Karahan Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Karslılar Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Kaşoba Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Kocatepe Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Küçükçınar Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Kurttepe Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Mahfesığmaz Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Memişli Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Örcün Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Pirili Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Salbaş Esentepe Mahallesi",
        "postaKodu": "01780",
        "semt": "Salbaş"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Şambayadı Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Söğütlü Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Toros Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Yurt Mahallesi",
        "postaKodu": "01170",
        "semt": "Mahfesığmaz"
    },
    {
        "il": "Adana",
        "ilce": "Çukurova",
        "mahalle": "Yüzüncüyıl Mahallesi",
        "postaKodu": "01360",
        "semt": "Huzurevleri"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Akkaya Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Akoluk Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Bağdatlı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Bahçecik Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Belenköy Mahallesi",
        "postaKodu": "01660",
        "semt": "Feke"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Çandırlar Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Çondu Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Çürükler Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Değirmenciuşağı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Gaffaruşağı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Gedikli Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Göbelli Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Gökçeli Mahallesi",
        "postaKodu": "01660",
        "semt": "Feke"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Gürümze Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Güzpınarı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Hıdıruşağı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "İncirci Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "İslam Mahallesi",
        "postaKodu": "01660",
        "semt": "Feke"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Kaleyüzü Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Karacaoğlan Mahallesi",
        "postaKodu": "01660",
        "semt": "Feke"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Karacauşağı Mahallesi",
        "postaKodu": "01660",
        "semt": "Feke"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Kaşaltı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Kayadibi Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Kazancı Mahallesi",
        "postaKodu": "01660",
        "semt": "Feke"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Keklikçi Mahallesi",
        "postaKodu": "01660",
        "semt": "Feke"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Kırıkuşağı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Kısacıklı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Kızılyer Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Koçyazı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Konakkuran Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Kovukçınar Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Mansurlu Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Musalar Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Oluçak Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Ormancık Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Ortaköy Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Oruçlu Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Paşalı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Şahmuratlı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Sülemişli Mahallesi",
        "postaKodu": "01660",
        "semt": "Feke"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Süphandere Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Tenkerli Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Tokmanaklı Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Tortulu Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Uğurlubağ Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Yaylapınar Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Yerebakan Mahallesi",
        "postaKodu": "01662",
        "semt": "Akkaya"
    },
    {
        "il": "Adana",
        "ilce": "Feke",
        "mahalle": "Yeşil Düşmüş Mahallesi",
        "postaKodu": "01660",
        "semt": "Feke"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Adalet Mahallesi",
        "postaKodu": "01700",
        "semt": "İmamoğlu"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Ağzıkaraca Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Alaybeyi Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Aliler Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Ayvalı Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Camili Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Çörten Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "01700",
        "semt": "İmamoğlu"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Danacılı Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "01700",
        "semt": "İmamoğlu"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Hacıhasanlı Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "01700",
        "semt": "İmamoğlu"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Koyunevi Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Malıhıdırlı Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Menteş Mahallesi",
        "postaKodu": "01700",
        "semt": "İmamoğlu"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Otluk Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Pekmezci Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Sayca Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Saygeçit Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Sevinçli Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Sokutaş Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Tuna Mahallesi",
        "postaKodu": "01700",
        "semt": "İmamoğlu"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Üçtepe Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Ufacıkören Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Uluçınar Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Yazıtepe Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "İmamoğlu",
        "mahalle": "Yenievler Mahallesi",
        "postaKodu": "01702",
        "semt": "Saygeçit"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Akçalı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Aktaş Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Altınova Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Aşağıbelemedik Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Aşağıyörükler Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Ayakkıf Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Barakdağı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Başkif Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Bekirli Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Beydemir Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Bolacalı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Bucak Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Çakallı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Çatalan Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Çeceli Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Çevlik Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Çocuklar Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Çorlu Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Çukur Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Demirçit Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Döşekevi Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Durak Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Eğlence Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Emelcik Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Etekli Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Fettahlı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Filikli Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Gildirli Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Gökhasanlı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Gülüşlü Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Güvenç Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Hacıkırı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Hacılı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Hacımusali Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Kaledağı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Kapıkaya Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Karahasanlı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Karakılıç Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Karakuyu Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Karapınar Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Kırıklı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Kocaveliler Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Körüklü Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Kuşcusofulu Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Nergizlik Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Nuhlu Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Ömerli Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Sadıkali Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Sarimehmetli Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Saypınar Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Selampınar Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Tatık Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Topaktaş Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Topkaralı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Torunsolaklı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Tümenli Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karaisalı",
        "mahalle": "Yazıbaşı Mahallesi",
        "postaKodu": "01770",
        "semt": "Karaisalı"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Adalı Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"},{ "il": "Adana", "ilce": "Karataş", "mahalle": "Ataköy Mahallesi", "postaKodu": "01900", "semt": "Karataş" }, { "il": "Adana", "ilce": "Karataş", "mahalle": "Bahçe Mahallesi", "postaKodu": "01900", "semt": "Karataş" },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Bebeli Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Çağşırli Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Çakirören Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Çavuşlu Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Çimeli Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Çukurkamış Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Damlapinar Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Develiören Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Dolapli Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Gölkaya Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Hacihasan Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Hasirağaci Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Helvaci Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "İnneplihüyüğü Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "İsahacili Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Kapi Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Karagöçer Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Karataş Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Karşıyaka Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Kemaliye Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Kesik Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Kiremitli Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Kirhasan Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Kızıltahta Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Meletmez Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Orta Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Oymakli Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Sarimsak Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Sırkenli Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Tabaklar Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Tabur Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Terliksiz Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Toprakli Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Tuzkuyusu Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Tuzla Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Yassiveren Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Yemişli Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Yenimurat Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Karataş",
        "mahalle": "Yüzbaşı Mahallesi",
        "postaKodu": "01900",
        "semt": "Karataş"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Acarmantaş Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Ağliboğaz Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Akarca Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Akçaliuşaği Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Akdam Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Akkaya Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Alapinar Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Andil Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Arslanli Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Arslanpaşa Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Aydin Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Ayşehoca Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Bağlar Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Bağözü Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Bağtepe Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Boztahra Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Bucak Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Bulduklu Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çamdere Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çamlarca Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çanakli Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çandik Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çelenuşaği Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çobanpinari Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çokak Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çukurören Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çulluuşaği Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Çürüklü Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Damyeri Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Dikilitaş Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Dilekkaya Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Doğanalani Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Duraluşaği Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Durmuşlu Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Düzağaç Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Enizçakiri Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Ergenuşaği Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Eskikabasakal Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Eskimantaş Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Faydali Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Ferhatli Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Gazi Mahallesi",
        "postaKodu": "01555",
        "semt": "Hacibeyli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Gedikli Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Gökçeyol Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Gökgöz Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Görbeyaz Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Güneri Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Hacibeyli Mahallesi",
        "postaKodu": "01555",
        "semt": "Hacibeyli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Hacımızali Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Hacıuşağı Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Hamam Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "İdemköy Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Ilica Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Işikkaya Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Işıklı Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kabaktepe Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kahveli Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kalkumaç Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kapıkaya Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Karabucak Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Karacaoğlan Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Karacaoğlan Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Karahamzalı Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Karanebili Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kemerköy Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kıbrıslar Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kızıllar Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kızlarsekisi Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Köseli Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kuytucak Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kuyubeli Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Kuyuluk Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Mahmutlu Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Mahyalar Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Marankeçili Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Minnetli Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Orçan Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Örendere Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Oruçlu Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Özbaşı Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Pekmezcı Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Postkabasakal Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Salmanlı Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Şerifli Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Şevkiye Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Taş Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Tavşantepe Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Tepecikören Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Tufanlı Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Tufanpaşa Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Turgutlu Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Türkeli Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Turunçlu Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Varsaklar Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Velicanlı Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Yanalerik Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Yarimoğlu Mahallesi",
        "postaKodu": "01500",
        "semt": "Kozan"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Yassiçalı Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Yeniköy Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Yukarıkeçili Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Yüksekören Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Kozan",
        "mahalle": "Zerdali Mahallesi",
        "postaKodu": "01502",
        "semt": "Kahveli"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Akçatekir Mahallesi",
        "postaKodu": "01490",
        "semt": "Akçatekir"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Alpu Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Aşçıbekirli Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Belemedik Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Çamlıbel Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "01470",
        "semt": "Pozantı"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Dağdibi Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Eskikonacık Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Fındıklı Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Gökbez Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Hamidiye Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "İstiklal Mahallesi",
        "postaKodu": "01470",
        "semt": "Pozantı"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Kamışlı Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Karakışlakçı Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Kurtuluş Mahallesi",
        "postaKodu": "01470",
        "semt": "Pozantı"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Ömerli Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Yağlıtaş Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Yazıcak Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Yenikonacık Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Yukarıbelemedik Mahallesi",
        "postaKodu": "01472",
        "semt": "Gökbez"
    },
    {
        "il": "Adana",
        "ilce": "Pozantı",
        "mahalle": "Zafer Mahallesi",
        "postaKodu": "01470",
        "semt": "Pozantı"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Aksağaç Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Avcıpınarı Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Ayvacık Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Beypınarı Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Çatak Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Çeralan Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Çorak Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Cumhurlu Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Değirmenciuşağı Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Eyüplü Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Gökmelenler Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Gürleşen Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Halilbeyli Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Himmetli Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "İslam Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Kandilli Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Kapaklıkuyu Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Karakuyu Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Kızılağaç Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Mahmutlu Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Naltaş Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Narlıdere Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Topallar Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Tülü Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Yardibi Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Yeniköy Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Saimbeyli",
        "mahalle": "Yeşilbağlar Mahallesi",
        "postaKodu": "01740",
        "semt": "Saimbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Acıdere Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Acıdere OSB Mahallesi",
        "postaKodu": "01410",
        "semt": "Baklalı"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Aflak Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Akkuyu Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Avcılar Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Aydınyurdu Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Ayvalı Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Balcalı Mahallesi",
        "postaKodu": "01250",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Bayram Hacılı Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Beyceli Mahallesi",
        "postaKodu": "01460",
        "semt": "Buruk"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Boynuyoluğun Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Boztepe Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Buruk Cumhuriyet Mahallesi",
        "postaKodu": "01460",
        "semt": "Buruk"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Büyük Baklalı Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Çamlica Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Çarkıpare Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Çaylı Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Cerenli Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Çiçekli Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Cihadıye Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Çınarlı Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Çirişgediği Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Dağcı Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Dutluca Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Eğeciuşağı Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Ertuğrulgazi Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Esentepe Mahallesi",
        "postaKodu": "01250",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Gökbuket Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Göztepe Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Gültepe Mahallesi",
        "postaKodu": "01250",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Hakkibeyli Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Hasanbeyli Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Hocalli Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "01340",
        "semt": "İncirlik"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "İstiklal Mahallesi",
        "postaKodu": "01460",
        "semt": "Buruk"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Karaömerli Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Karayusuflu Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Kargakekeç Mahallesi",
        "postaKodu": "01790",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Karlık Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Kaşobası Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Kemalpaşa Mahallesi",
        "postaKodu": "16190",
        "semt": "İncirlik"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Kepeztepe Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Kılbaş Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Kılıçlı Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Kızılkaş Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Kösefakılı Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Küçükbaşlı Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Maltepe Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Mehmet Akif Ersoy Mahallesi",
        "postaKodu": "16190",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Menekşe Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Müminli Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Mustafalar Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Orhangazi Mahallesi",
        "postaKodu": "16190",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Osmangazi Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Remzi Oğuz Arık Mahallesi",
        "postaKodu": "16190",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Şahintepe Mahallesi",
        "postaKodu": "16190",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Sarıçam Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Sofudede Mahallesi",
        "postaKodu": "16190",
        "semt": "Buruk"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Suluca Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Turunçlu Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Ünlüce Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Yağızlar Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Yarımca Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Yavuz Sultan Selim Mahallesi",
        "postaKodu": "16190",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "16190",
        "semt": "İncirlik"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Yeniyayla Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Yeşiltepe Mahallesi",
        "postaKodu": "16190",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Yıldırım Beyazıt Mahallesi",
        "postaKodu": "16190",
        "semt": "Remzioğuzarık"
    },
    {
        "il": "Adana",
        "ilce": "Sarıçam",
        "mahalle": "Yürekli Mahallesi",
        "postaKodu": "16190",
        "semt": "Osmangazi"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "2000 Evler Mahallesi",
        "postaKodu": "01200",
        "semt": "Gürselpaşa"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Ahmet Remzi Yüreğir Mahallesi",
        "postaKodu": "01130",
        "semt": "Denizli"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Akkapı Mahallesi",
        "postaKodu": "01040",
        "semt": "Akkapı"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Ali Dede Mahallesi",
        "postaKodu": "01020",
        "semt": "Hükümet"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Aydınlar Mahallesi",
        "postaKodu": "01190",
        "semt": "Fevzipaşa"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Bahçelievler Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Bahçeşehir Mahallesi",
        "postaKodu": "01200",
        "semt": "Gürselpaşa"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Barbaros Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Barış Mahallesi",
        "postaKodu": "01190",
        "semt": "Fevzipaşa"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Beşocak Mahallesi",
        "postaKodu": "01020",
        "semt": "Hükümet"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Bey Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Büyükçıldırım Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Büyükdikili Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Camuzcu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Çaputçu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Cemalpaşa Mahallesi",
        "postaKodu": "01200",
        "semt": "Gazipaşa"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Çınarlı Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Dağlioğlu Mahallesi",
        "postaKodu": "01040",
        "semt": "Akkapı"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Demetevler Mahallesi",
        "postaKodu": "01180",
        "semt": "Yeşilevler"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Denizli Mahallesi",
        "postaKodu": "01130",
        "semt": "Denizli"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Dervişler Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Dörtağaç Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Döşeme Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Dumlupınar Mahallesi",
        "postaKodu": "01070",
        "semt": "Meydan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Emek Mahallesi",
        "postaKodu": "01080",
        "semt": "Emek"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "01160",
        "semt": "Mavi Bulvar Yurt"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Fevzipaşa Mahallesi",
        "postaKodu": "01190",
        "semt": "Fevzipaşa"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Gazipaşa Mahallesi",
        "postaKodu": "01140",
        "semt": "Ziyapaşa"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Gökçeler Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Gölbaşı Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Gülbahçesi Mahallesi",
        "postaKodu": "01050",
        "semt": "Gülbahçesi"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Gülpınar Mahallesi",
        "postaKodu": "01070",
        "semt": "Meydan"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Gürselpaşa Mahallesi",
        "postaKodu": "01200",
        "semt": "Gürselpaşa"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Hadirli Mahallesi",
        "postaKodu": "01365",
        "semt": "Hadirli"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Hanedan Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Havuzlu Bahçe Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Hırmalı Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "İsmetpaşa Mahallesi",
        "postaKodu": "01180",
        "semt": "Yeşilevler"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "İstiklal Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Ceyhan",
        "mahalle": "Karakuyu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "2000 Evler Mahallesi",
        "postaKodu": "01200",
        "semt": "Gürselpaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Ahmet Remzi Yüreğir Mahallesi",
        "postaKodu": "01130",
        "semt": "Denizli"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Akkapı Mahallesi",
        "postaKodu": "01040",
        "semt": "Akkapı"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Alidede Mahallesi",
        "postaKodu": "01020",
        "semt": "Hükümet"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Aydınlar Mahallesi",
        "postaKodu": "01190",
        "semt": "Fevzipaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Bahçelievler Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Bahçeşehir Mahallesi",
        "postaKodu": "01200",
        "semt": "Gürselpaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Barbaros Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Barış Mahallesi",
        "postaKodu": "01190",
        "semt": "Fevzipaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Beşocak Mahallesi",
        "postaKodu": "01020",
        "semt": "Hükümet"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Bey Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Büyükçıldırım Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Büyükdikili Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Camuzcu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Çaputçu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Cemalpaşa Mahallesi",
        "postaKodu": "01120",
        "semt": "Gazipaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Çınarlı Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Dağlıoğlu Mahallesi",
        "postaKodu": "01040",
        "semt": "Akkapı"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Demetevler Mahallesi",
        "postaKodu": "01180",
        "semt": "Yeşilevler"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Denizli Mahallesi",
        "postaKodu": "01130",
        "semt": "Denizli"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Dervişler Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Dört Ağaç Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Döşeme Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Dumlupınar Mahallesi",
        "postaKodu": "01070",
        "semt": "Meydan"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Emek Mahallesi",
        "postaKodu": "01080",
        "semt": "Emek"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "01160",
        "semt": "Mavi Bulvar Yurt"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Fevzipaşa Mahallesi",
        "postaKodu": "01190",
        "semt": "Fevzipaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Gazipaşa Mahallesi",
        "postaKodu": "01140",
        "semt": "Ziyapaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Gökçeler Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Gölbaşı Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Gülbahçesi Mahallesi",
        "postaKodu": "01050",
        "semt": "Gülbahçesi"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Gülpınar Mahallesi",
        "postaKodu": "01070",
        "semt": "Meydan"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Gürselpaşa Mahallesi",
        "postaKodu": "01200",
        "semt": "Gürselpaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Hadirli Mahallesi",
        "postaKodu": "01365",
        "semt": "Hadirli"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Hanedan Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Havuzlubahçe Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Hurmali Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "İsmetpaşa Mahallesi",
        "postaKodu": "01180",
        "semt": "Yeşilevler"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "İstiklal Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Karakuyu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Karasoku Mahallesi",
        "postaKodu": "01010",
        "semt": "Yağcami"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Karayusuflu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Kavaklı Mahallesi",
        "postaKodu": "01430",
        "semt": "Küçükdikili"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Kayalıbağ Mahallesi",
        "postaKodu": "01010",
        "semt": "Yağcami"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Kayışlı Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Kocavezir Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Köylüoğlu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Koyuncu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Koza Mahallesi",
        "postaKodu": "01430",
        "semt": "Küçükdikili"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Küçükçıldırım Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Küçükdikili Mahallesi",
        "postaKodu": "01430",
        "semt": "Küçükdikili"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Kurtuluş Mahallesi",
        "postaKodu": "01130",
        "semt": "Denizli"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Kuruköprü Mahallesi",
        "postaKodu": "01060",
        "semt": "Kuruköprü"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Kuyumcular Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Mekan Mahallesi",
        "postaKodu": "01430",
        "semt": "Küçükdikili"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Mestanzade Mahallesi",
        "postaKodu": "01020",
        "semt": "Hükümet"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Meydan Mahallesi",
        "postaKodu": "01070",
        "semt": "Meydan"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Midik Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Mirzaçelebi Mahallesi",
        "postaKodu": "01070",
        "semt": "Meydan"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Mithatpaşa Mahallesi",
        "postaKodu": "01130",
        "semt": "Denizli"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Mürseloğlu Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Namık Kemal Mahallesi",
        "postaKodu": "01140",
        "semt": "Ziyapaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Narlıca Mahallesi",
        "postaKodu": "01180",
        "semt": "Yeşilevler"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Onur Mahallesi",
        "postaKodu": "01100",
        "semt": "Şakirpaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Ova Mahallesi",
        "postaKodu": "01080",
        "semt": "Emek"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Pınar Mahallesi",
        "postaKodu": "01160",
        "semt": "Mavi Bulvar Yurt"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Reşatbey Mahallesi",
        "postaKodu": "01120",
        "semt": "Gazipaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Sakarya Mahallesi",
        "postaKodu": "01130",
        "semt": "Denizli"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Şakirpaşa Mahallesi",
        "postaKodu": "01080",
        "semt": "Emek"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Salmanbeyli Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Sarıhamzalı Mahallesi",
        "postaKodu": "01110",
        "semt": "Yeşiloba"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Sarıhuğlar Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Sarıyakup Mahallesi",
        "postaKodu": "01020",
        "semt": "Hükümet"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Şehitduran Mahallesi",
        "postaKodu": "01020",
        "semt": "Hükümet"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Serinevler Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Söğütlü Mahallesi",
        "postaKodu": "01110",
        "semt": "Yeşiloba"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Sucuzade Mahallesi",
        "postaKodu": "01030",
        "semt": "Saydam"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Sümer Mahallesi",
        "postaKodu": "01140",
        "semt": "Ziyapaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Telldere Mahallesi",
        "postaKodu": "01160",
        "semt": "Mavi Bulvar Yurt"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Tepebağ Mahallesi",
        "postaKodu": "01010",
        "semt": "Yağcami"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Türkocağı Mahallesi",
        "postaKodu": "01020",
        "semt": "Hükümet"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Uçak Mahallesi",
        "postaKodu": "01080",
        "semt": "Emek"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Ulucami Mahallesi",
        "postaKodu": "01010",
        "semt": "Yağcami"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yalmanlı Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "01200",
        "semt": "Gürselpaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yenibaraj Mahallesi",
        "postaKodu": "01150",
        "semt": "Yeşilyurt"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yenibey Mahallesi",
        "postaKodu": "01020",
        "semt": "Hükümet"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yenidam Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yeşilevler Mahallesi",
        "postaKodu": "01180",
        "semt": "Yeşilevler"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yeşiloba Mahallesi",
        "postaKodu": "01100",
        "semt": "Şakirpaşa"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yeşilyurt Mahallesi",
        "postaKodu": "01150",
        "semt": "Yeşilyurt"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yeşilyuva Mahallesi",
        "postaKodu": "01070",
        "semt": "Meydan"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Yolgeçen Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Zeytinli Mahallesi",
        "postaKodu": "01355",
        "semt": "Karayusuflu"
    },
    {
        "il": "Adana",
        "ilce": "Seyhan",
        "mahalle": "Ziyapaşa Mahallesi",
        "postaKodu": "01140",
        "semt": "Ziyapaşa"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Akçal Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Akpınar Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Ayvat Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Bolatpınarı Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Bozgüney Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Çatalçam Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Çukurkişla Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "01640",
        "semt": "Tufanbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Damlalı Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Demiroğlu Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Doğanbeyli Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Doğanlı Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Elemanlı Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Evcı Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Fatmakuyu Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Güzelim Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Hanyeri Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "İğdebel Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "İstiklal Mahallesi",
        "postaKodu": "01640",
        "semt": "Tufanbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Karsavran Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Kayapınar Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Kayarcık Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Kirazlıyurt Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Koccağız Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Ortaköy Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Pekmezli Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Pınarlar Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Şar Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Taşpınar Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Tozlu Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Yamanlı Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Yeni Cami Mahallesi",
        "postaKodu": "01640",
        "semt": "Tufanbeyli"
    },
    {
        "il": "Adana",
        "ilce": "Tufanbeyli",
        "mahalle": "Yeşilova Mahallesi",
        "postaKodu": "01642",
        "semt": "Damlalı"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Akdeniz Mahallesi",
        "postaKodu": "01680",
        "semt": "Yumurtalık"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Akyuva Mahallesi",
        "postaKodu": "01680",
        "semt": "Yumurtalık"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Asmalı Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Ayas Mahallesi",
        "postaKodu": "01680",
        "semt": "Yumurtalık"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Ayvalık Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Demirtaş Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Deveciuşağı Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Devrişiye Mahallesi",
        "postaKodu": "01680",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Gölovası Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Hamzalı Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Haylazlı Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Kaldırım Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Kalemli Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Kemalpaşa Mahallesi",
        "postaKodu": "01680",
        "semt": "Yumurtalık"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Kesmeburun Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Kırmızıdam Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Kuzupınarı Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Narlıören Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Ören Mahallesi",
        "postaKodu": "01680",
        "semt": "Yumurtalık"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Sugözü Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Yeniköy Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Yeşilköy Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Yumurtalık Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yumurtalık",
        "mahalle": "Zeytinbeli Mahallesi",
        "postaKodu": "01682",
        "semt": "Kalemli"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "19 Mayıs Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Abdioğlu Cumhuriyet Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Ağzıbüyük Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Akarcalı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Akdal Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Akdeniz Mahallesi",
        "postaKodu": "01291",
        "semt": "Yamaçlı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Akıncılar Mahallesi",
        "postaKodu": "01220",
        "semt": "Yavuzlar"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Akpınar Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Alihocalı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Anadolu Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Atakent Mahallesi",
        "postaKodu": "01260",
        "semt": "Karacaoğlan"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Atatürk Mahallesi",
        "postaKodu": "01375",
        "semt": "Havutlu"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Aydıncık Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Bahçelievler Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Başak Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Belören Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Beyköy Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Büyükkapılı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Çağırkanlı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Camil Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Çamlıbel Mahallesi",
        "postaKodu": "01260",
        "semt": "Karacaoğlan"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Çatalpınar Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Çelemlı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Cine Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Cırık Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Çotlu Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "01280",
        "semt": "Karşıyaka"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Dadaloğlu Mahallesi",
        "postaKodu": "01240",
        "semt": "PttEvleri"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Danişment Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Dede Korkut Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Dedepınarı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Denizkuyusu Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Dervişler Mahallesi",
        "postaKodu": "01260",
        "semt": "Karacaoğlan"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Doğankent Bahçelievler Mahallesi",
        "postaKodu": "01370",
        "semt": "Doğankent"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Doğankent Cumhuriyet Mahallesi",
        "postaKodu": "01370",
        "semt": "Doğankent"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Doğankent Kışla Mahallesi",
        "postaKodu": "01370",
        "semt": "Doğankent"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Düzce Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Eğriağaç Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Esenler Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Eski Misis Mahallesi",
        "postaKodu": "01350",
        "semt": "Yakapınar"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Gazipaşa Mahallesi",
        "postaKodu": "01370",
        "semt": "Doğankent"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Geçitli Cumhuriyet Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Gökçeli Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Gümüşyazı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Güneşli Mahallesi",
        "postaKodu": "01280",
        "semt": "Karşıyaka"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Güveloğlu Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Güzel Cumhuriyet Mahallesi",
        "postaKodu": "01965",
        "semt": "İncirlik"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Güzelevler Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Haciali Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Havraniye Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Havutlu Mahallesi",
        "postaKodu": "01375",
        "semt": "Havutlu"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Haydaroğlu Mahallesi",
        "postaKodu": "01291",
        "semt": "Yamaçlı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Herekli Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Irmakbaşı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Kadıköy Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Kamişli Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Karaahmetli Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Karacaoğlan Mahallesi",
        "postaKodu": "01240",
        "semt": "PttEvleri"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Kaşlıca Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Kayarlı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Kazım Karabekir Mahallesi",
        "postaKodu": "01230",
        "semt": "Kazımkarabekir"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Kiremithane Mahallesi",
        "postaKodu": "01260",
        "semt": "Karacaoğlan"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Kışla Mahallesi",
        "postaKodu": "01230",
        "semt": "Kazımkarabekir"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Köklüce Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Köprügözü Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Köprülü Mahallesi",
        "postaKodu": "01230",
        "semt": "Kazımkarabekir"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Koza Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Kütüklü Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Levent Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Mutlu Mahallesi",
        "postaKodu": "01260",
        "semt": "Karacaoğlan"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Özgür Mahallesi",
        "postaKodu": "01220",
        "semt": "Yavuzlar"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Özler Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "P.T.T Mahallesi",
        "postaKodu": "01240",
        "semt": "PttEvleri"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Paşaköy Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Pekmezli Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Sağdıçlı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Şahinağa Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Sakızlı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Sarıçam Mahallesi",
        "postaKodu": "01220",
        "semt": "Yavuzlar"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Sazak Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Şehit Erkut Akbay Mahallesi",
        "postaKodu": "01260",
        "semt": "Karacaoğlan"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Selahattin Eyyubi Mahallesi",
        "postaKodu": "01240",
        "semt": "PttEvleri"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Serinevler Mahallesi",
        "postaKodu": "01240",
        "semt": "PttEvleri"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Seyhan Mahallesi",
        "postaKodu": "01291",
        "semt": "Yamaçlı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Şeyhmurat Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Sinanpaşa Mahallesi",
        "postaKodu": "01220",
        "semt": "Yavuzlar"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Solaklı Cumhuriyet Mahallesi",
        "postaKodu": "01375",
        "semt": "Havutlu"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Solaklı Hürriyet Mahallesi",
        "postaKodu": "01375",
        "semt": "Havutlu"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Tahsilli Mahallesi",
        "postaKodu": "01260",
        "semt": "Karacaoğlan"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Taşcı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Ulubatlı Hasan Mahallesi",
        "postaKodu": "01260",
        "semt": "Karacaoğlan"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Vayvaylı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yahşiler Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yakapınar Mahallesi",
        "postaKodu": "01358",
        "semt": "Abdioğlu"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yalnızca Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yamaçlı Mahallesi",
        "postaKodu": "01291",
        "semt": "Yamaçlı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yavuzlar Mahallesi",
        "postaKodu": "01220",
        "semt": "Yavuzlar"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yenice Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yenidoğan Mahallesi",
        "postaKodu": "01263",
        "semt": "Keresteciler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yeniköy Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yerdelen Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yeşil Bağlar Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yukarıçiçekli Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yunus Emre Mahallesi",
        "postaKodu": "01285",
        "semt": "Bahçelievler"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yunus Oğlu Cumhuriyet Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Yunus Oğlu Hürriyet Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adana",
        "ilce": "Yüreğir",
        "mahalle": "Zağarlı Mahallesi",
        "postaKodu": "01415",
        "semt": "Alihocalı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "15 Temmuz Şehitler Mahallesi",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12629.58740550649!2d37.81000386676849!3d37.68687800025188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153257788a7ffb57%3A0x29f3ec74b23af0e7!2s15%20Temmuz%20%C5%9Eehitler%2C%20Besni%2FAd%C4%B1yaman!5e0!3m2!1sen!2str!4v1771021818853!5m2!1sen!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Abımıstık Mahallesi (Çakırhüyük Beldesi)",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12653.515408215837!2d37.88110826668672!3d37.54613705083393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15324e1a894b6bc5%3A0x68b265a6bc411f05!2zQWLEsW3EsXN0xLFrLCDDh2FrxLFyaMO8ecO8ay9CZXNuaS9BZMSxeWFtYW4!5e0!3m2!1sen!2str!4v1771027919268!5m2!1sen!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Adalet Mahallesi (Suvarlı Beldesi)",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25302.035892152697!2d37.59016299738385!3d37.560847753075315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15326a0d901baa63%3A0x6d93bf526667f89c!2zQWRhbGV0LCAwMjMzMCBTdXZhcmzEsS9CZXNuaS9BZMSxeWFtYW4!5e0!3m2!1sen!2str!4v1771028070558!5m2!1sen!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Ahuri Mahallesi (Sarıkaya Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Akdere Mahallesi (Başlı Köyü)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Akdoğanlar Mahallesi (Berete Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Akdurak Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Akkuyu Köü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Akkuyu Mahallesi (Atmalı Köyü)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Akpınar Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Aktepe Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Akyazı Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Ali Erdemoğlu Mahallesi",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Alıçlı Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Alişar Köyü",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Aşağıçöplü Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Aşağısarhan Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Aşağısöğütlü Mahallesi (Köseli Beldesi)",
        "postaKodu": "02348",
        "semt": "Köseli"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Atatürk Mahallesi (Kesmetepe Beldesi)",
        "postaKodu": "02346",
        "semt": "Kesmetepe"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Atatürk Mahallesi (Sugözü Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Atatürk Mahallesi (Üçgöz Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Atmalı Köyü",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Bahri Mahallesi (Bahri Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Balka Mahallesi (Beşyol Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Başlı Köyü",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Bayat Mahallesi (Şambayat Beldesi)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Bereketli Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Beşir Mahallesi (Tekağaç Köyü)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Beşkoz Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Beşyol Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Boncuk Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Bostancık Mahallesi (Tekağaç Köyü)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Boybeypınarı Mahallesi (Çakırhüyük Beldesi)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Burunçayır Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Büyükoba Mahallesi (Karalar Köyü)",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çakallı Mahallesi (Çorak Köyü)",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çakallı Mahallesi (Karalar Köyü)",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çakmak Mahallesi (Akdurak Köyü)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çakmak Mahallesi (Kesmetepe Beldesi)",
        "postaKodu": "02346",
        "semt": "Kesmetepe"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çamlıca Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Camuşçu Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çat Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çayırobası Mahallesi (Karalar Köyü)",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çaykaya Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çilboğaz Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Cirit Meydanı Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çomak Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çöplükışla Mahallesi (Yeniköy Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çorak Köyü",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Çorman Mahallesi (Tokar Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Cumhuriyet Mahallesi (Köseli Beldesi)",
        "postaKodu": "02348",
        "semt": "Köseli"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Cumhuriyet Mahallesi (Şambayat Beldesi)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Cumhuriyet Mahallesi (Sarıyaprak Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Cumhuriyet Mahallesi (Suvarlı Beldesi)",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Cumhuriyet Mahallesi (Üçgöz Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Deliseki Mahallesi (Çamlıca Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Dikilitaş Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Doğankaya Köyü",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Dörtyol Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Dumlupınar Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Eğerli Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Erdemoğlu Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Fatih Mahallesi (Kesmetepe Beldesi)",
        "postaKodu": "02346",
        "semt": "Kesmetepe"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Fatih Mahallesi (Şambayat Beldesi)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Fatih Mahallesi (Sarıyaprak Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Geçitli Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Gönderme Mahallesi (Konuklu Köyü)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Gümüşlü Köyü",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Güneykaş Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Hacıhalil Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Harmanardı Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Hasanlı Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Höyük Mahallesi (Beşyol Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Höyük Mahallesi (Comak Köyü)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Hürriyet Mahallesi (Köseli Beldesi)",
        "postaKodu": "02348",
        "semt": "Köseli"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Hürriyet Mahallesi (Suvarlı Beldesi)",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "İnce Mahallesi (Kesmetepe Beldesi)",
        "postaKodu": "02346",
        "semt": "Kesmetepe"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "İnönü Mahallesi (Kesmetepe Beldesi)",
        "postaKodu": "02346",
        "semt": "Kesmetepe"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "İnönü Mahallesi (Şambayat Beldesi)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "İnönü Mahallesi (Sugözü Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "İnönü Mahallesi (Üçgöz Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "İznik Mahallesi (Konuklu Köyü)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "İzollu Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Karaağaç Mahallesi (Yelbastı Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Karageçi Mahallesi (Beşyol Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Karagüveç Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Karahalil Mahallesi (Başlı Köyü)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Karalar Köyü",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kargalı Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Karnaçık Mahallesi (Kutluca Köyü)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kaymakam Hasan Tütün Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kepirce Mahallesi (Yazıkarakuyu Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kesecik Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kılıçlı Mahallesi (Başlı Köyü)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kıraçhayma Mahallesi (Pınarbaşı Köyü)",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kızılcamustafa Mahallesi (Başlı Köyü)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kızılhisar Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kızilin Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kızılkaya Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kızılpınar Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kocapirli Mahallesi (Eğerli Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Konuklu Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Köprübaşı Mahallesi (Çakırhüyük Beldesi)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Körtanlı Mahallesi (Pınarbaşı Köyü)",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Korupınar Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kurugöl Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kutluca Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Kuzevleri Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Levzin Mahallesi (Çakırhüyük Beldesi)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Menderes Mahallesi (Şambayat Beldesi)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Nohudanlı Mahallesi (Hacıhalil Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Ören Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Oyalı Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Oyratlı Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Özbağlar Mahallesi (Atmalı Köyü)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Pınarbaşı Köyü",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Pınarbaşı Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Pınarbaşıosb Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Sarıçiçek Mahallesi (Konuklu Köyü)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Sarıkaya Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Satılluşağı Mahallesi (Oyratlı Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Sayören Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Sumaklı Güzalevler Mahallesi (Kurugöl Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Taşlıyazı Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Tekağaç Köyü",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Tetirli Mahallesi (Köseli Beldesi)",
        "postaKodu": "02348",
        "semt": "Köseli"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Tileyli Mahallesi (Yazıbeydili Köyü)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Tokar Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Toklu Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Topkapı Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Turgut Özal Mahallesi (Kesmetepe Beldesi)",
        "postaKodu": "02346",
        "semt": "Kesmetepe"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Tutlupınar Mahallesi (Pınarbaşı Köyü)",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Ürecik Mahallesi (Yelbastı Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Uzunkuyu Köyü",
        "postaKodu": "02330",
        "semt": "Suvarlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yaylıklı Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yazıbademce Mahallesi (Yazıkarakuyu Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yazıbeydili Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yazıkarakuyu Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yazıyalangoz Mahallesi (Tekağaç Köyü)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yazıyurdu Mahallesi (Berete Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yelbastı Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yemlice Mahallesi (Kesecik Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yeni Besni Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yeni Mahallesi (Şambayat Beldesi)",
        "postaKodu": "02340",
        "semt": "Şambayat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yeniköy Köyü",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yenikurugöl Mahallesi (Akdurak Köyü)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yeşilova Mahallesi (Çakırhüyük Beldesi)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yeşilova Mahallesi (Ören Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yoldüzü Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yukarı Hozgişi Mahallesi (Yeniköy Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yukarı Sarhan Mahallesi",
        "postaKodu": "02300",
        "semt": "Besni"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yukarısöğütlü Köyü",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Yusufağa Mahallesi (Akkuyu Köyü)",
        "postaKodu": "02320",
        "semt": "Çakırhüyük"
    },
    {
        "il": "Adıyaman",
        "ilce": "Besni",
        "mahalle": "Zormağara Mahallesi (Yeniköy Köyü)",
        "postaKodu": "02302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Aksu Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Aktaş Mahallesi (Pınarbaşı Beldesi)",
        "postaKodu": "02610",
        "semt": "Pınarbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Aligür Mahallesi (Gölbağı Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Alisaha Kümesi Mahallesi (Mutlu Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Altıntaş Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Askerhan Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Bahçe Kümesi Mahallesi (Mutlu Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Bahçeli Evler Mahallesi",
        "postaKodu": "02600",
        "semt": "Çelikhan"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Balıkburun Mahallesi (Pınarbaşı Beldesi)",
        "postaKodu": "02610",
        "semt": "Pınarbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Başpınar Mahallesi",
        "postaKodu": "02600",
        "semt": "Çelikhan"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Bozgedik Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Cami Mahallesi",
        "postaKodu": "02600",
        "semt": "Çelikhan"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Cami Mahallesi (Pınarbaşı Beldesi)",
        "postaKodu": "02610",
        "semt": "Pınarbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Çamlıyayla Mahallesi (Pınarbaşı Beldesi)",
        "postaKodu": "02610",
        "semt": "Pınarbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Çampınar Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Çat Mahallesi (Şerefhan Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Cemolar Mahallesi (Kalecik Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "02600",
        "semt": "Çelikhan"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Değirmen Başı Mahallesi (Çampınar Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Deveboynu Mahallesi (Aksu Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Düzağaç Mahallesi (Bozgedik Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Eskiköy Mahallesi (Recep Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Eskiköy Mahallesi (Yeşilyayla Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Fatih Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "02600",
        "semt": "Çelikhan"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Gölbağı Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Hacılar Mahallesi (Pınarbaşı Beldesi)",
        "postaKodu": "02610",
        "semt": "Pınarbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Hamik Mahallesi (Köseuşağı Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Hovirge Yaylası Mahallesi (Mutlu Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "İncirli Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "İnönü Mahallesi (Pınarbaşı Beldesi)",
        "postaKodu": "02610",
        "semt": "Pınarbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Kale Mahallesi (Yeşiltepe Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Kalecik Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Karaçayır Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Karagöl Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Karşı Küme Evleri Mahallesi (Mutlu Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Kaya Mahallesi (Pınarbaşı Beldesi)",
        "postaKodu": "02610",
        "semt": "Pınarbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Kışıkan Yaylası Mahallesi (Mutlu Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Korucak Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Köseuşağı Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Koyuncular Mahallesi (Gölbağı Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Kurudere Mahallesi (Pınarbaşı Beldesi)",
        "postaKodu": "02610",
        "semt": "Pınarbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Mahmut Nedim Ökmen Mahallesi",
        "postaKodu": "02600",
        "semt": "Çelikhan"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Merkez Kümesi Mahallesi (Mutlu Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Merkez Mahallesi",
        "postaKodu": "02600",
        "semt": "Çelikhan"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Recep Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Şahverdi Mahallesi (Recep Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Şahverdi Yaylaevleri Mahallesi (Recep Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Şerefhan Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Soğukpınar Mahallesi (Korucak Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Yağızatlı Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Yağmurlu Mahallesi (Köseuşağı Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Yayla Evleri Mahallesi (Çampınar Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Yaylaevleri Mahallesi (Askerhan Köyü)",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Yeşilova Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Yeşiltepe Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Yeşilyayla Köyü",
        "postaKodu": "02602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Yunus Emre Mahallesi",
        "postaKodu": "02600",
        "semt": "Çelikhan"
    },
    {
        "il": "Adıyaman",
        "ilce": "Çelikhan",
        "mahalle": "Zafer Mahallesi",
        "postaKodu": "02600",
        "semt": "Çelikhan"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Açma Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Ağaçlı Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Aksan Mahallesi (Yayladalı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Alduş Mahallesi (Konacık Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Artilan Mahallesi (Dağdeviren Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Aşağı Cimik Mahallesi (Güzelsu Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Aşağıdağlıca Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Aydınlık Mahallesi (Zuğur Mahallesi) (Dallarca Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Bağlar Mahallesi (Geçitli Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Bayik Mahallesi (Oymaklı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Bazik Mahallesi (Yayladalı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Bekiran Mahallesi (Kılıç Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Bemirgo Mahallesi (Konacık Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Beşgöze Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Beybostan Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Bildeş Mahallesi (Demirtaş Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Bircan Mahallesi (Güngörmüş Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Bodin Mahallesi (Gündoğdu Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Budaklı Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çamiçi Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çamik Mahallesi (Seyitmahmut Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çavgür Mahallesi (Çobanpınarı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çavuş Mahallesi (Siver Mahallesi) (Sutepe Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çeman Mahallesi (Dağdeviren Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çet Mahallesi (Çamiçi Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çetin Mahallesi (Kütüklü Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Cevizpınar Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çifthisar Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çınarlık Mahallesi (Yukarıdağlıca Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çınarlık Mahallesi (Gümüşkaşık Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çobanpınarı Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Çukurca Mahallesi (Açma Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Dağdeviren Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Dallarca Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Demirtaş Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Despal Mahallesi (Yağmurlu Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Deyro Mahallesi (Konacık Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Dolorizan Mahallesi (Gölyurt Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Döşnik Mahallesi (Kaşyazı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Erdoğmuş Mahallesi (Baleyrek Mahallesi) (Dallarca Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Eskikent Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "02700",
        "semt": "Gerger"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Geçitli Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Gelebaz Mahallesi (Kılıç Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Gölani Mahallesi (Onevler Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Gölyurt Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Göme-i Masur Mahallesi (Gölyurt Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Gömük Mahallesi (Ağaçlı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Gönen Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Gözpınar Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Güdayik Mahallesi (Gönen Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Gümüşkaşık Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Gündoğdu Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Güneypınar Mahallesi (Yenibardak Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Güngörmüş Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Gürgenli Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Güzelsu Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Hanberti Mahallesi (Burçaklı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Harmuzan Mahallesi (Gözpınar Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Helezin Mahallesi (Gölyurt Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Hevenk Mahallesi (Eskikent Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Hilim Mahallesi (Gönen Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Hırcık Mahallesi (Gürgenli Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Horsaik Mahallesi (Dağdeviren Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Hüsükan Mahallesi (Gölyurt Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kaf Mahallesi (Geçitli Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kağındak Mahallesi (Gözpınar Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kalecik Mahallesi (Kılıç Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Karacaviran Mahallesi (Güzelsu Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kardigin Mahallesi (Yayladalı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Karuk Mahallesi (Kaşyazı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kaşyazı Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Keferge Mahallesi (Korulu Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kelazin Mahallesi (Yağmurlu Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Keleşan Mahallesi",
        "postaKodu": "02700",
        "semt": "Gerger"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kerzel Mahallesi (Oymaklı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kerzel Mahallesi (Yağmurlu Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kesertaş Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kevirsor Mahallesi (Burçaklı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kılıç Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kırıngöl Mahallesi (Yenibardak Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kırmızıtarla Mahallesi (Yenibardak Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kişik Mahallesi (Kılıç Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kızzık Mahallesi (Burçaklı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Köklüce Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Konacık Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Körtigin Mahallesi (Burçaklı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Korulu Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Koşarlar Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kozağaçı Mahallesi (Onevler Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Kütüklü Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Maroni Mahallesi (Saraycık Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Merkez Mahallesi",
        "postaKodu": "02700",
        "semt": "Gerger"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Merkez Mahallesi (Burçaklı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Mezra Mahallesi (Gürgenli Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Mirza Mahallesi (Dallarca Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Nakışlı Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Ninyat Mahallesi (Gözpınar Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Ömeran Mahallesi (Güngörmüş Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Onevler Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Ortaca Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Oymaklı Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Özkuran Mahallesi (Nakışlı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Pamuluk Mahallesi (Gümüşkaşık Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Pankin Mahallesi (Beybostan Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Pemice Mahallesi (Yenibardak Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Pınarbaşı Mahallesi (Gölyurt Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Piyamli Mahallesi (Sutepe Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Pupar Mahallesi (Oymaklı Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Şakol Mahallesi (Yenibardak Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Salavat Mahallesi (Beşgöze Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Samak Mahallesi (Çamiçi Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Şamani Mahallesi (Güzelsu Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Sankosi Mahallesi (Korulu Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Saraycık Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Şavi Mahallesi (Gölyurt Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Sengeto Mahallesi (Cevizpınar Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Şengül Mahallesi (Çamiçi Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Seyitmahmut Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Sofyan Mahallesi (Koşarlar Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Sorik Mahallesi (Demirtaş Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Sutepe Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Tankül Mahallesi (Gölyurt Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Taraksu Mahallesi (Üçkaya Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Tillak Mahallesi (Beşgöze Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Tırkidin Mahallesi (Gürgenli Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Tırşik Mahallesi (Seyitmahmut Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Üçkaya Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Vankök Mahallesi (Gölyurt Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Yağmurlu Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Yayladalı Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "02700",
        "semt": "Gerger"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Yenibardak Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Yeşilyurt Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Yukarıdağlıca Köyü",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gerger",
        "mahalle": "Yuvacık Mahallesi (Açma Köyü)",
        "postaKodu": "02702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Akçabel Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Akçakaya Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Aktoprak Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Alikaya Mahallesi (Akçakaya Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Arpatarlası Mahallesi (Karabahşılı Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Aşağıazaplı Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Aşağıkarakuyu Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Aşağınasırlı Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Asfalt Mahallesi",
        "postaKodu": "02500",
        "semt": "Gölbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Asfalt Mahallesi (Balkar Beldesi)",
        "postaKodu": "02530",
        "semt": "Balkar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Bağlarbaşı Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Ballık Mahallesi (Savran Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Beşevler Mahallesi (Haydarlı Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Beşevler Mahallesi (Karabahşılı Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Çakmak Mahallesi (Harmanlı Beldesi)",
        "postaKodu": "02520",
        "semt": "Harmanlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Cankara Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Çatalağaç Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Çataltepe Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Çayır Mahallesi (Karabahşılı Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Çelikköy Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Çelikköyosb Mahallesi (Çelikköy Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Cerrahobası Mahallesi (Haydarlı Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Civkur Mahallesi (Kösüklü Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Cumhuriyet Mahallesi (Balkar Beldesi)",
        "postaKodu": "02530",
        "semt": "Balkar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Cumhuriyet Mahallesi (Belören Beldesi)",
        "postaKodu": "02540",
        "semt": "Belören"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Cumhuriyet Mahallesi (Harmanlı Beldesi)",
        "postaKodu": "02520",
        "semt": "Harmanlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Durak Mahallesi (Çatalağaç Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Durak Mahallesi (Çelikköy Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "02500",
        "semt": "Gölbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Gedikli Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Hacılar Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Hamzalar Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Hasanlar Mahallesi (Hamzalar Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Haydarlı Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "02500",
        "semt": "Gölbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "İstasyon Mahallesi (Çelikköy Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Kalemkas Mahallesi (Harmanlı Beldesi)",
        "postaKodu": "02520",
        "semt": "Harmanlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Kandil Mahallesi (Hamzalar Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Karabahşılı Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Karaburun Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Karaçukur Mahallesi (Karabahşılı Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Karahasan Mahallesi (Çataltepe Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Keçibaşı Mahallesi (Meydan Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Keralmaz Mahallesi (Çatalağaç Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Kezbi Mahallesi (Savran Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Körpınarı Mahallesi (Meydan Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Kösüklü Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Kötel Mahallesi (Karabahşılı Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Küçükören Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Kumlu Mezrası Mahallesi (Aktoprak Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Kurucuova Mahallesi (Savran Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Kurugeçit Mahallesi",
        "postaKodu": "02500",
        "semt": "Gölbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Merkez Mahallesi (Belören Beldesi)",
        "postaKodu": "02540",
        "semt": "Belören"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Meydan Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Mıçolar Mahallesi (Çataltepe Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Mimar Sinan Mahallesi",
        "postaKodu": "02500",
        "semt": "Gölbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Örenli Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Ozan Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Savran Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Serpenolar Mahallesi (Haydarlı Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Sırıklı Mahallesi (Hamzalar Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Söğütlü Mahallesi (Küçükören Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Sorkun Mahallesi (Haydarlı Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Tecirli Mahallesi (Çataltepe Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Uçarlar Mahallesi (Hamzalar Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yarbaşı Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yavuz Selim Mahallesi",
        "postaKodu": "02500",
        "semt": "Gölbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yaylacık Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "02500",
        "semt": "Gölbaşı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yeni Mahallesi (Harmanlı Beldesi)",
        "postaKodu": "02520",
        "semt": "Harmanlı"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yenikent Mahallesi",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yeniköy Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yeşilova Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yıkicak Mahallesi (Meydan Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yolbağı Mahallesi (Çataltepe Köyü)",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yukarıçöplü Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yukarıkarakuyu Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Gölbaşı",
        "mahalle": "Yukarınasırlı Köyü",
        "postaKodu": "02502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Abdullah Bey Mahallesi (Arılı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Acoğlu Mahallesi (Geldibuldu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Adalı Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akalın Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akça Mahallesi (Arılı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akçakent Mahallesi (Oluklu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akçalı Mahallesi (Akkuş Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akçaveren Mahallesi (İkizce Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akdamar Mahallesi (Bozpınar Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akdoğan Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akıncılar Atatürk Mahallesi (Akıncılar Beldesi)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akkavak Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akkuş Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akpınar Mahallesi (Kavaklı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Aktaş Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Aktoprak Mahallesi (Erikli Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Akyıldız Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Alidam Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Arılı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Aşağı Tuğlu Mahallesi (Tuğlu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Askeran Mahallesi (Yolaltı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Ataköy Mahallesi (Ulupınar Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Atatürk Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Atatürk Mahallesi (Bölükyayla Beldesi)",
        "postaKodu": "02440",
        "semt": "Bölükyayla"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Atlı Mahallesi (Gölgeli Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Avnik Mahallesi (Gökçe Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Aydınlar Mahallesi (Arılı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Aydınpınar Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Bağbaşı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Bağlar Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Bağözü Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Bahçe Mahallesi (Belören Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Bahçe Mahallesi (Geldibuldu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Bakacak Mahallesi (Ulupınar Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Ballı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Bayraktar Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Belenli Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Belören Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Berbanos Mahallesi (Tuğlu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Beşevler Mahallesi (Dut Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Beşikli Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Beypınar Mahallesi (Kayadibi Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Birbir Mahallesi (Çıralık Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Boğazkaya Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Bostanlı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Bozpınar Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Boztarla Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Buhara Mahallesi (Göçeri Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Burmapınar Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Büyükbağ Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Büyükbejyan Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Büyükbey Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Büyükgöz Mahallesi (Oluklu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Büyütme Mahallesi (Turanlı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çakıreşme Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çaltılı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Cami Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çamlıca Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çamlıca Mahallesi (Akıncılar Beldesi)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çardak Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çataltepe Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çaybaşı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çelebi Mahallesi (Çıralık Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çem Mahallesi (Eski Kahta Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çetinkaya Mahallesi (Kozağaç Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çiçek Mahallesi (Zeytin Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çıralık Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çobanlı Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çörtenek Mahallesi (Eski Kahta Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Çukurtaş Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Cumhuriyet Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Cumhuriyet Mahallesi (Bölükyayla Beldesi)",
        "postaKodu": "02440",
        "semt": "Bölükyayla"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Dalince Mahallesi (Sıraca Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Damlacık Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Damlı Mahallesi (Eceler Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Damüstü Mahallesi (Eskitaş Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Darberi Mahallesi (Burmapınar Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Dardağan Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Derebaşı Mahallesi (Çukurtaş Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Dikenli Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Dikmetaş Mahallesi (Yapraklı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Divan Mahallesi (Erikli Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Doğantepe Mahallesi (Oluklu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Doluca Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Dumanlı Mahallesi (Çaybaşı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Dumlu Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Dut Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Eceler Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Ekinci Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Elbeyi Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Elmalı Tuğlu Mahallesi (Tuğlu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Erikdere Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Erikli Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Esendere Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Esentepe Mahallesi (Dardağan Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Eski Kahta Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Eskitaş Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Fatih Mahallesi (Bölükyayla Beldesi)",
        "postaKodu": "02440",
        "semt": "Bölükyayla"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Fırat Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Fıstıklı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Gazi Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Gedik Mahallesi (Alidam Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Geldibuldu Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Gevazi Mahallesi (Tuğlu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Girne Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Göçeri Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Gökçe Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Gölgeli Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Göllük Mahallesi (Kozağaç Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Gömlek Mahallesi (Eski Kahta Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Güdülge Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Gülahmet Mahallesi (Tuğlu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Gülveren Mahallesi (Karadut Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Gümüşkaya Mahallesi (Damlacık Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Güzelçay Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Güzelkent Mahallesi (Büyükbağ Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Habipler Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Haceri Mahallesi (Çaybaşı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Hacıyusuf Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Halice Mahallesi (Narince Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Halifan Mahallesi (Bostanlı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Hamzalar Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Hasandiğin Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Hasköy Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Hiniç Mahallesi (Adalı Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Hisar Mahallesi (Burmapınar Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Hüseyinli Mahallesi (Yenikuşak Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "İkizce Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "İngirce Mahallesi (Turanlı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Işıktepe Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "İslamköy Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kahta Osb Mahallesi (Salkımbağı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kamışlı Mahallesi (Çaybaşı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kanboğazı Mahallesi (Karadut Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kangülü Mahallesi (Bölükyayla Beldesi)",
        "postaKodu": "02440",
        "semt": "Bölükyayla"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karabağ Mahallesi (Taşlıca Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karacaören Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karadut Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karagül Mahallesi (Narince Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karakuş Mahallesi (Bağözü Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karamağara Mahallesi (Güdülge Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karaman Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karanfil Mahallesi (Damlacık Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karapınar Mahallesi (Tütenocak Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karataş Mahallesi (Karataş Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karatut Mahallesi (Çaltılı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karmitli Mahallesi (Tuğlu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Karşıyaka Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kavaklı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kayadibi Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Keklik Mahallesi (Güzelçay Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Keklik Mahallesi (Teğmenli Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kelpınar Mahallesi (Eski Kahta Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kerkah Mahallesi (Ekinci Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kılavuz Mahallesi (Akıncılar Beldesi)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kilisik Mahallesi (Çıralık Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kınık Mahallesi (Hacıyusuf Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Koçtepe Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Köprübaşı Mahallesi (Esendere Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Körgüdan Mahallesi (Yapraklı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kosa Mahallesi (Çakıreşme Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Köseler Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kozağaç Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Kubilay Mahallesi (Ortanca Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Küçük Eceler Mahallesi (Eceler Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Küçük Tomak Mahallesi (İkizce Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Mahmudiye Mahallesi (Dardağan Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Menderes Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Menderes Mahallesi (Dut Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Menzil Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Mülkköy Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Mustafaçayır Mahallesi (Ulupınar Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Narince Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Narlı Mahallesi (Hasandiğin Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Narlıdere Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Narsırtı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Nergiztepe Mahallesi (Hasköy Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Oluklu Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Ortanca Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Osmanpınar Mahallesi (Koçtepe Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Ovacık Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Özelevler Mahallesi (Boğazkaya Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Pınaryolu Mahallesi (İkizce Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Şahintepe Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Şahintepe Mahallesi (Karadut Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Sako Mahallesi (Erikdere Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Salik Mahallesi (Karadut Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Salkımbağı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Samanlı Mahallesi (Eceler Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Sarısu Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Sekük Mahallesi (Turanlı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Şenköy Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Şeyhbaba Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Sinke Mahallesi (Boğazkaya Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Sıraca Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Sırakaya Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Sıratut Mahallesi (Adalı Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Şirinevler Mahallesi (Karadut Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Sofya Mahallesi (Dardağan Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Soğuksu Mahallesi (Akıncılar Beldesi)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Sultanmağara Mahallesi (Köseler Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Süsük Mahallesi (Güdülge Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Susuz Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Tabaklı Mahallesi (Belenli Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Taşlıca Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Taşlıçay Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Teğmenli Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Teknecik Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Tepebaşı Mahallesi (Hamzalar Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Teriyan Mahallesi (Oluklu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Terziyan Mahallesi (Narince Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Teta Mahallesi (Oluklu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Tibil Mahallesi (Turanlı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Tilbe Mahallesi (Geldibuldu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Tuğlu Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Türeşik Mahallesi (Güdülge Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Turgut Özal Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Tütenocak Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Ulubey Mahallesi (Gölgeli Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Ulupınar Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yapraklı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yassıkaya Mahallesi (Doluca Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yavuz Selim Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yelkovan Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "02400",
        "semt": "Kahta"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yenice Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yenice Mahallesi (Koçtepe Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yenikuşak Köyü",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yeşilkaya Mahallesi (Yeşilkaya Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yeşiltepe Mahallesi (Oluklu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yolaltı Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yolçatı Mahallesi (Oluklu Köyü)",
        "postaKodu": "02450",
        "semt": "Akıncılar"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Yüksekyayla Mahallesi (Belenli Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Zeynan Mahallesi (Bostanlı Köyü)",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Zeytin Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Kahta",
        "mahalle": "Ziyaret Köyü",
        "postaKodu": "02402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "100. Yıl Mahallesi (100.Yıl Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Acempınarı Mahallesi (Kayacık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Afetevleri Mahallesi (Kayaönü Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ağaçkonak Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ağcin Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ağikan Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ağveren Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ahmethoca Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Akçalı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Akçik Mahallesi (Lokman Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Akdere Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Akhisar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Akın Mahallesi (Serhatlı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Akıncılar Mahallesi (Çerçiyan Mahallesi) (Akdere Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Akpınar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Aksu Mahallesi (Kır Mahallesi) (Doğanlı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Akyazı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Akyurt Mahallesi (Uludam Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Albet Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Alibey Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Alitaşı Mahallesi",
        "postaKodu": "02030",
        "semt": "Sümerevler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Altınşehir Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Altıntop Mahallesi (Büyükkavaklı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Altun Mahallesi (Kuyulu Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Armutlu Mahallesi (Hozik Mahallesi) (Kuyucak Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Aslanoğlu Mahallesi (Hacıhalil Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Asmalı Mahallesi (Varlık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ataköy Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Atatürk Mahallesi (Atakent Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Atatürk Mahallesi (Hasancık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Aydınlar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "B.Ayranlı Mahallesi (Uzunköy Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bağdere Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bağlıca Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bağpınar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bağpınar Kuyucak Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bağtepe Mahallesi (Yedioluk Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bahçe Mahallesi (Çamlıca Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bahçe Mahallesi (Pınaryayla Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bahçecik Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bahçelievler Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bahçelievler Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Balaban Mahallesi (Atakent Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Barbaros Hayrettin Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bardakçı Mahallesi (Bozhüyük Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Başpınar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Battalhüyük Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bebek Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Benav Mahallesi (Darıca Mahallesi) (İncebağ Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Beyler Mahallesi (Uludam Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Börkenek Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bozatlı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bozhüyük Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Boztepe Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Büklüm Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Bulam Mahallesi (Doğanlı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Burç Mahallesi (Durak Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Büyük Boyalı Mahallesi (Atakent Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Büyükkavaklı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Büyükkırıklı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çakmaklar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çamgazi Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çamlıca Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çamyurdu Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çatalağaç Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çatderesi Mahallesi (Yaylakonak Beldesi)",
        "postaKodu": "02270",
        "semt": "Yaylakonak"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çayırlı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çaylı Mahallesi (Düdere Mahallesi) (Hasankendi Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çaylı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çemberlitaş Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çençeng Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çiçek-1 Mahallesi (Bağpınar Kuyucak Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çiçek-2 Mahallesi (Bağpınar Kuyucak Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çimenke Mahallesi (Yaylakonak Beldesi)",
        "postaKodu": "02270",
        "semt": "Yaylakonak"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çınar Mahallesi (Akpınar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çınarik Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çitlice Mahallesi (Çamlıca Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çobandede Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çokpınar Mahallesi (Kındırali Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Çömlekçi Mahallesi (Birgeni Mahallesi) (Bebek Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Cumhuriyet Mahallesi (Atakent Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Cumhuriyet Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Daluca Mahallesi (Battalhüyük Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Damdırmaz Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Damlıca Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Darbelik Mahallesi (Akpınar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Dardağan Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Davuthan Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Derinsu Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Dişbudak Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Doğanlı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Dörtyol Mahallesi (Davuthan Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Doyran Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Durak Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Durukaynak Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Düzağaç Mahallesi (Uzunköy Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Düzce Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ekinci Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Elmacık Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Esence Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Esence Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Esentepe Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Eskihüsnümansur Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Eskisaray Mahallesi",
        "postaKodu": "02100",
        "semt": "Eskisaray"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Eskiviran Mahallesi (Dişbudak Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gazi Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gazihan Mahallesi (Bağpınar Kuyucak Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gedik Mahallesi (Çamlıca Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Girik Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gısrik Mahallesi (Derinsu Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gökçay Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Göktaş Mahallesi (Köristan Mahallesi) (Uğurca Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Göktepe Mahallesi (Aydınlar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gölpınar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gömlütepe Mahallesi (Uzunköy Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gözebaşı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gözecik Mahallesi (Küçük Çarkezi Mahallesi) (Uzunpınar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Göztepe Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gültepe Mahallesi (Bağdere Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Gümüşkaya Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Güneşli Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Güvenli Mahallesi (Koçali Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Güzelevler Mahallesi (Bağdere Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Güzelyurt Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Hacıhalil Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Haraba Mahallesi (Akpınar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Hasankan Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Hasankendi Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Hocaömer Mahallesi",
        "postaKodu": "02100",
        "semt": "Eskisaray"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Hürriyet Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ilıcak Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "İmamağa Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "İncebağ Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "İncekoz Mahallesi (Yaylakonak Beldesi)",
        "postaKodu": "02270",
        "semt": "Yaylakonak"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "İnceler Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "İnönü Mahallesi (Hasancık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "İpekli Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Işıklı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kalburcu Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kamışlı Mahallesi (Akyazı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kamışlı Mahallesi (Yazlık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kanikürk Mahallesi (Kaşköy Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kapcami Mahallesi",
        "postaKodu": "02100",
        "semt": "Eskisaray"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karaağaç Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karaburç Mahallesi (Battalhüyük Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karaçalı Mahallesi (Yaylakonak Beldesi)",
        "postaKodu": "02270",
        "semt": "Yaylakonak"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karagöl Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karahöyük Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karakoç Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karaköprü Mahallesi (Büyükkavaklı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karaman Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karapınar Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karruz Mahallesi (Lokman Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Karti Mahallesi (Gözebaşı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kaşıklı Mahallesi (Varlık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kaşköy Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kavak Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kavak Mahallesi (Pınaryayla Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kayabaşı Mahallesi (Kazni Mahallesi) (Kayaönü Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kayacık Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kayadibi Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kayalı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kayalık Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kayaönü Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kemalık Mahallesi (Ziyaretpayamlı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kemerkaya Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kerömer Mahallesi (Uzunköy Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kılıçlar Mahallesi (Bebek Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kilisik Mahallesi (Güzelyurt Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kındırali Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kışla Mahallesi (Yazlık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kıvırcık Mahallesi (Hacıhalil Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kızılcahöyük Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kızılcapınar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Koçali Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Köklü Mahallesi (Boztepe Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Konakdere Mahallesi (Gökçay Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Koruköy Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Korulu Mahallesi (Mermere Mahallesi) (Yazlık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kotur Mahallesi (Akçalı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kotur Mahallesi (Doğanlı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kozan Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Küçük Boyalı Mahallesi (Akpınar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Küçük Hacıvert Mahallesi (Zey Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Küçük Kavaklı Mahallesi (Büyükkavaklı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Küçük Kırgı Mahallesi (Ekinci Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Küçük Kırıklı Mahallesi (Büyükkırıklı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Küçükhasancık Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Küçükkırklı Mahallesi (Büyükkırıklı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Külafhüyük Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kümüşderesi Mahallesi (Koçali Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kürk Mahallesi (Girik Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kuşakkaya Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kuştepe Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kuyucak Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Kuyulu Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Lokman Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Madun Mahallesi (Gözebaşı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mahmut El Ensari Ziyareti Mahallesi (İpekli Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mahmutlu Mahallesi (Alibey Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Malazgirt Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Maloğlu Mahallesi (Akpınar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Malpınarı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Maltepe Mahallesi (Zey Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mara Mahallesi",
        "postaKodu": "02030",
        "semt": "Sümerevler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mazlık Mahallesi (Bebek Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mehmet Akif Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Merkez Mahallesi (Yaylakonak Beldesi)",
        "postaKodu": "02270",
        "semt": "Yaylakonak"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mestan Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Millik Mahallesi (Düzce Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mimar Sinan Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Miroğlu Mahallesi (Aydınlar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mürsel Mahallesi (Büklüm Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Musalla Mahallesi",
        "postaKodu": "02100",
        "semt": "Eskisaray"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mustafa Yücel Özbilgin Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mustafabeyli Mahallesi (Varlık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Mutluca Mahallesi (Gökçay Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Narlık Mahallesi (Yeniköy Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Olgunlar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Oluklu Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ordu Mahallesi (Güneşli Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Örenli Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ormaniçi Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Örümce Mahallesi (Yarmakaya Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Özelevler Mahallesi (Bağdere Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Paçık Mahallesi (Bebek Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Palanlı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Paşamezrası Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Payamlı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Petrolosb Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Pınarbaşı Mahallesi (Durak Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Pınaryayla Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Reşatlı Mahallesi (Kuyulu Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Rezip Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Sakallı Mahallesi (Ağaçkonak Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Sarıharman Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Sarıkaya Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Şemikan Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Şerefli Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Serhatlı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Serintepe Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Seyitevler Mahallesi (Bağlıca Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Şifrak Mahallesi (Serince Mahallesi) (İncebağ Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Sıncık Mahallesi (Bağlıca Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Sıratut Mahallesi",
        "postaKodu": "02100",
        "semt": "Eskisaray"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Şirazi Mahallesi (Bebek Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Siteler Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Sümerevler Mahallesi",
        "postaKodu": "02030",
        "semt": "Sümerevler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Taklar Mahallesi (Serhatlı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Taşar Mahallesi (Serhatlı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Taşgedik Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Taşoluk Mahallesi (Tetikan Mahallesi) (Derinsu Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Taşpınar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Tecir Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Tekpınar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Tepebaşı Mahallesi (Hasancık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Tepeönü Mahallesi (Uzunköy Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Terman Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Toptepe Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Tunçlar Mahallesi (Serhatlı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Turgut Reis Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Türkiye Petrolleri Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Tutluca Mahallesi (Dişbudak Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Üçdirek Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Uğurca Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Uğurlu Mahallesi (Kayaönü Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ulubey Mahallesi (Kayaönü Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ulucami Mahallesi",
        "postaKodu": "02030",
        "semt": "Sümerevler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Uludam Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ürgüç Mahallesi (Atakent Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Uzunköy Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Uzunömer Mahallesi (Bağdere Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Uzunpınar Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Vali Halil Işık Mahallesi (Atakent Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Varlık Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Varlık Mahallesi",
        "postaKodu": "02100",
        "semt": "Eskisaray"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Vartana Mahallesi (Taşpınar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yağlıca Mahallesi (Varlık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yakacık Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yarmakaya Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yassıhöyük Mahallesi (Güzelyurt Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yavuz Selim Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yaylacık Mahallesi (Uzunköy Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yayladamı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yazıbaşı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yazlık Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yedioluk Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yeni Mahalle",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yeni Sanayi Mahallesi",
        "postaKodu": "02040",
        "semt": "Yenisanayi"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yenice Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yenigüven Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yeniköy Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yenimahalle (Çemberlitaş Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yeninacar Mahallesi (Akpınar Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yenipınar Mahallesi",
        "postaKodu": "02100",
        "semt": "Eskisaray"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yeşilköy Mahallesi (Şerefli Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yeşilova Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yeşilyurt Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yeşilyurt Mahallesi (Kömür Beldesi)",
        "postaKodu": "02290",
        "semt": "Kömür"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yıldızlı Mahallesi (Battalhüyük Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yoğurtlu Mahallesi (Varlık Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yunus Emre Mahallesi",
        "postaKodu": "02200",
        "semt": "İmamağa"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Yuvacık Mahallesi (Belikan Mahallesi) (Akdere Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Zey Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Zivar Mahallesi (Yaylakonak Beldesi)",
        "postaKodu": "02270",
        "semt": "Yaylakonak"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ziyaret Mahallesi (Ziyaretpayamlı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Ziyaretpayamlı Köyü",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Merkez",
        "mahalle": "Zorköy Mahallesi (Gözebaşı Köyü)",
        "postaKodu": "02010",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Ağaköy Mahallesi (Uzuntepe Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Akdamar Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Altıntepe Mahallesi (Kırmacık Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Bağarası Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Bakacak Mahallesi (Kırmacık Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Baraj Mahallesi",
        "postaKodu": "02800",
        "semt": "Samsat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Başaklı Mahallesi (Bayırlı Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Bayırlı Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Bekçiler Mahallesi (Tepeönü Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Bekircik Mahallesi (Çiçek Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Çeşmebaşı Mahallesi (Kırmacık Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Çiçek Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Çille Mahallesi (Doğanca Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Dasınca Mahallesi (Taşkuyu Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Doğanca Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Doğanlar Mahallesi (Çiçek Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Gölpınar Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Göltarla Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Gümüşsuyu Mahallesi (Çiçek Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "İnceali Mahallesi (Yarımbağ Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Kale Mahallesi",
        "postaKodu": "02800",
        "semt": "Samsat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Keçiören Mahallesi (Göltarla Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Kergekuşu Mahallesi (Yarımbağ Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Kıraç Mahallesi (Kırmacık Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Kırmacık Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Kızılöz Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Kovanoluk Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Kuştepe Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Örentaş Mahallesi",
        "postaKodu": "02800",
        "semt": "Samsat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Ovacık Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Sarıkök Mahallesi (Göltarla Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Sefvanköy Mahallesi (Tepeönü Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Taşkuyu Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Tepeönü Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Tokaçlı Mahallesi (Bayırlı Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Uyanık Mahallesi (Doğanca Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Uzuntepe Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Yarımbağ Köyü",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Yavuz Selim Mahallesi",
        "postaKodu": "02800",
        "semt": "Samsat"
    },
    {
        "il": "Adıyaman",
        "ilce": "Samsat",
        "mahalle": "Yeşilbağ Mahallesi (Kırmacık Köyü)",
        "postaKodu": "02802",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Adaklar Mahallesi (Şahinbeyler Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Aksu Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Alancık Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Arıkonak Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Aydın Mahallesi (Söğütlübahçe Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Ayengin Mahallesi",
        "postaKodu": "02900",
        "semt": "Sincik"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Balkaya Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Biriman Mahallesi (Şahkolu Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çağlayan Mahallesi (Hüseyinli Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çalılık Mahallesi (Hüseyinli Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çamdere Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çarhanek Mahallesi (Çatbahçe Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çat Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çat Mahallesi (Geçitli Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çatbahçe Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çavçük Mahallesi (Çatbahçe Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çınar Mahallesi (İnlice Beldesi)",
        "postaKodu": "02920",
        "semt": "İnlice"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Çükan Mahallesi (İnlice Beldesi)",
        "postaKodu": "02920",
        "semt": "İnlice"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "02900",
        "semt": "Sincik"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Damlı Merkez Mahallesi (Taşkale Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Derecik Mezrası Mahallesi (Sakız Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Dervişan Mahallesi (Şahkolu Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Dilektepe Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Düdan Mahallesi (Çat Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Ekinci Kutan Mahallesi (Taşkale Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Elmırtan Mahallesi (Çamdere Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Eskiköy Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "02900",
        "semt": "Sincik"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Fırat Mahallesi (İnlice Beldesi)",
        "postaKodu": "02920",
        "semt": "İnlice"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Fırın Mahallesi (Balkaya Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Geçitli Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Ger Mahallesi (Alancık Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Gevrik Yağmurlu Mahallesi (Aksu Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Gevrol Mahallesi (Arıkonak Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Gollusor Mahallesi (Serince Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Göv Mahallesi (Arıkonak Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Gümükhan Mahallesi (Hüseyinli Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Güzelsu Mahallesi (Hasanlı Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Hasanlı Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Hayırlı Mahallesi (Sakız Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Hazaz Mahallesi (Çamdere Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Hesikan Mahallesi (Çamdere Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Hijik Mahallesi (Çamdere Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Hodri Mahallesi (Yarpuzlu Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Hürmer Mahallesi (Aksu Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Hüseyinli Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Karadağ Mahallesi (İnlice Beldesi)",
        "postaKodu": "02920",
        "semt": "İnlice"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Karakaya Mahallesi (Hasanlı Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Karaköse Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Karaman Mahallesi",
        "postaKodu": "02900",
        "semt": "Sincik"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Kaskanlı Mahallesi (Dilektepe Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Kocagazi Mezrası Mahallesi (Sakız Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Küçük Evler Mahallesi (Sakız Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Küçükçay Mahallesi (Dilektepe Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Küplüce Mahallesi (Şahinbeyler Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Kürelifan Mahallesi (Şahinbeyler Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Küsran Mahallesi (Alancık Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Mahmutoğlu Mahallesi",
        "postaKodu": "02900",
        "semt": "Sincik"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Mengil Mahallesi (Arıkonak Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Merkez Mahallesi",
        "postaKodu": "02900",
        "semt": "Sincik"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Narlı Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Onur Mahallesi",
        "postaKodu": "02900",
        "semt": "Sincik"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Özbilgin Mahallesi (İnlice Beldesi)",
        "postaKodu": "02920",
        "semt": "İnlice"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Pınarbaşı Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Rezan Sağlam Mahallesi (Taşkale Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Şahinbeyler Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Şahintepe Mahallesi (Yarpuzlu Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Şahkolu Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Sakız Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Şamlük Kalımlı Mahallesi (Taşkale Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Serbent Mahallesi (Çamdere Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Serince Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Soğanlı Mahallesi (Serince Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Söğütlübahçe Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Sorut Mahallesi (Karaköse Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Subaşı Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Taşkale Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Taşlıca Mahallesi (İnlice Beldesi)",
        "postaKodu": "02920",
        "semt": "İnlice"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Tepebaşı Mahallesi (Çatbahçe Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Tişik Mahallesi (Alancık Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Tokluca Mahallesi (Balkaya Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Tuna Mahallesi (İnlice Beldesi)",
        "postaKodu": "02920",
        "semt": "İnlice"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Turmuşan Mahallesi (Aksu Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Tuzik Mahallesi (Geçitli Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Uğurlu Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Yanıkkaya Mahallesi (Hasanlı Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Yarpuzlu Köyü",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Yassıkaya Mahallesi (Serince Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Yayla Evleri Mahallesi (Sakız Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Yaylabaşı Mahallesi (Balkaya Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Yüksekova Mahallesi (Hüseyinli Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Zevisimilan Mahallesi (Taşkale Köyü)",
        "postaKodu": "02902",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Sincik",
        "mahalle": "Zeynel Aslan Mahallesi",
        "postaKodu": "02900",
        "semt": "Sincik"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Akbel Mahallesi (Çiftlik Köyü)",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Akçatepe Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Ayniye Mahallesi",
        "postaKodu": "02350",
        "semt": "Tut"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Boyundere Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Bulanık Mahallesi",
        "postaKodu": "02350",
        "semt": "Tut"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Çamlıca Mahallesi",
        "postaKodu": "02350",
        "semt": "Tut"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Çiftlik Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "02350",
        "semt": "Tut"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Elçiler Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Fethiye Mahallesi",
        "postaKodu": "02350",
        "semt": "Tut"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Havutlu Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Kaşlıca Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Killili Mahallesi (Yaylımlı Köyü)",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Köseli Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Meryemuşağı Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Öğütlü Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Pamuklu Mahallesi (Kaşlıca Köyü)",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Pınarlı Mahallesi (Yeşilyurt Köyü)",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Reşadiye Mahallesi",
        "postaKodu": "02350",
        "semt": "Tut"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Salah Mahallesi",
        "postaKodu": "02350",
        "semt": "Tut"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Sülmen Mahallesi (Çiftlik Köyü)",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Tepecik Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Ünlüce Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Yalankoz Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Yaylımlı Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Yeşilyamaç Mahallesi (Tepecik Köyü)",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Adıyaman",
        "ilce": "Tut",
        "mahalle": "Yeşilyurt Köyü",
        "postaKodu": "02352",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Akkeçili Köyü",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Akkoyunlu Köyü",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.1042183147465!2d30.063040661803157!3d37.92799567183029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c67955ba6fe2c5%3A0xe02e94c5f86326b2!2sAkkoyunlu%2C%2003452%20Akkoyunlu%2FBa%C5%9Fmak%C3%A7%C4%B1%2FAfyonkarahisar!5e0!3m2!1sen!2str!4v1770757188462!5m2!1sen!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Akpınar Köyü",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6303.885892456697!2d29.916073867337982!3d37.814805337433704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c68ecd76ed0951%3A0x4938ed1165d9a374!2zQWtwxLFuYXIsIDAzNDUyIEFrcMSxbmFyL0JhxZ9tYWvDp8SxL0FmeW9ua2FyYWhpc2Fy!5e0!3m2!1sen!2str!4v1770757161547!5m2!1sen!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Aşağı Beltarla Köyü",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6297.060717069907!2d30.09385701735143!3d37.89466443735357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c67ee8ec05f8ff%3A0x339a8170a8dd0220!2zQcWfYcSfxLEgQmVsdGFybGEsIDAzNDUyIEHFn2HEn8SxIEJlbHRhcmxhL0JhxZ9tYWvDp8SxL0FmeW9ua2FyYWhpc2Fy!5e0!3m2!1sen!2str!4v1770757209603!5m2!1sen!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Aşağı Hilal Mahallesi",
        "postaKodu": "03450",
        "semt": "Başmakçı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Barbaros Mahallesi",
        "postaKodu": "03450",
        "semt": "Başmakçı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Çağlayan Mahallesi",
        "postaKodu": "03450",
        "semt": "Başmakçı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Çevlik Köyü",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Çığrı Köyü/Aşağı Mahallesi",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Çığrı Köyü/Orta Mahallesi",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12608.648903311345!2d30.040855259640743!3d37.80966899975234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c68727c9d7461d%3A0xb99113f8b5ef029c!2zw4fEscSfcsSxLCBPcnRhLCDDh8SxxJ9yxLEvQmHFn21ha8OnxLEvQWZ5b25rYXJhaGlzYXI!5e0!3m2!1sen!2str!4v1770757244183!5m2!1sen!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Çığrı Köyü/Yukarı Mahallesi",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Ekinlik Köyü",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "03450",
        "semt": "Başmakçı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Gülistan Mahallesi",
        "postaKodu": "03450",
        "semt": "Başmakçı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Hırkaköy Köyü",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Küllüce Köyü",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Mimar Sinan Mahallesi",
        "postaKodu": "03450",
        "semt": "Başmakçı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Ovacık Köyü/Emmiler Mahallesi",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Ovacık Köyü/Merkez Mahallesi",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Ovacık Köyü/Tınalar Mahallesi",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Sarıköy Köyü",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Yaka Köyü/Aşağı Mahallesi",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Yaka Köyü/Yukarı Mahallesi",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Yassıören Köyü",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03450",
        "semt": "Başmakçı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Yukarı Hilal Mahallesi",
        "postaKodu": "03450",
        "semt": "Başmakçı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Başmakçı",
        "mahalle": "Yukaribeltarla Köyü",
        "postaKodu": "03452",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Abdullahlı Mahallesi (Derbent Köyü)",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Akpınar Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Aşağıçaybelen Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Büyük Mahallesi",
        "postaKodu": "03780",
        "semt": "Bayat"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Ceritli Mahallesi (Derbent Köyü)",
        "postaKodu": "03782",
        "semt": "Bayat"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Çukurkuyu Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "03780",
        "semt": "Bayat"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Eskigömü Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "03780",
        "semt": "Bayat"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "İmralli Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "İnpınar Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Kuzuören Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Mallıca Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Muratkoru Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Sağırlı Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03780",
        "semt": "Bayat"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bayat",
        "mahalle": "Yukarıçaybelen Köyü",
        "postaKodu": "03782",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Akçeşme Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Alaca Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Bademli Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Bağlarbaşı Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Bağlarüstü Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Bolvadin Osb Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Bucak Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Büyükkarabağ Köyü/Atatürk Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Büyükkarabağ Köyü/Fevziçakmak Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Büyükkarabağ Köyü/Hacıbekir Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Büyükkarabağ Köyü/Karşıyaka Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Cirit Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Derekarağaç Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dipevler Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Çaybaşı Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Fatih Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Köprübaşı Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Malazgirt Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Mevlana Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Okul Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Şeyh Şamil Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Yavuz Selim Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Yukarı Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Dişli Beldesi/Yunus Emre Mahallesi",
        "postaKodu": "03330",
        "semt": "Dişli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Emrullah Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Erkmen Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Ethem Kelekçi Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Gökçeyayla Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Gölbaşı Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Güney Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Hacı Halife Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Hacı Ömer Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Hamidiye Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Hisar Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "İhsaniye Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Karabağ Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Karayokuş Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kaymaz Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kemerkaya Köyü/Avdan Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kemerkaya Köyü/Hürriyet Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kemerkaya Köyü/Savaş Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kemerkaya Köyü/Yaka Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kemerkaya Köyü/Yapraklı Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kemerkaya Köyü/Yeni Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kemerkaya Köyü/Zafer Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kırkgöz Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Konak Mahallesi",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.686904338436!2d31.049366661415398!3d38.702035658090196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cfae6e0feef9fb%3A0xc4d85d3fe874ff84!2sKonak%2C%2003300%20Bolvadin%2FAfyonkarahisar!5e0!3m2!1str!2str!4v1770556742430!5m2!1str!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kurucaova Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Kutlu Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Lala Sinan Paşa Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Malazgirt Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Müslümana Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Nusratlı Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Ortakarabağ Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Özburun Beldesi/Bahçelievler Mahallesi",
        "postaKodu": "03350",
        "semt": "Özburun"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Özburun Beldesi/Çaybaşı Mahallesi",
        "postaKodu": "03350",
        "semt": "Özburun"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Özburun Beldesi/Şehirönü Mahallesi",
        "postaKodu": "03350",
        "semt": "Özburun"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Özburun Beldesi/Ulucami Mahallesi",
        "postaKodu": "03350",
        "semt": "Özburun"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Özburun Beldesi/Üsküdar Mahallesi",
        "postaKodu": "03350",
        "semt": "Özburun"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Selçuklu Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Şıhlar Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Taşağıl Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Taşağıl Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Taşlıdere Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Yakup Şevki Paşa Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Yenice Mahallesi",
        "postaKodu": "03300",
        "semt": "Bolvadin"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Bolvadin",
        "mahalle": "Yürükkaracaören Köyü",
        "postaKodu": "03302",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Akkonak Köyü/Akhürrem Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Akkonak Köyü/Baltacı Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Akkonak Köyü/Cumhuriyet Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Akkonak Köyü/Hürriyet Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Akkonak Köyü/Milli Egemenlik Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Aktaş Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Ali İhsan Paşa Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Ali Kaleli Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Armutlu Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Aşağı Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Aydoğmuş Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Bahçelievler Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Bulanık Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Çayırpınar Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Çayiryazı Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Cedit Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Cumhuriyet Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Demirağaç Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Deresinek Köyü/Gündoğdu Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Deresinek Köyü/Kahraman Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Deresinek Köyü/Zafer Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Devederesi Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Dumlupınar Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Eber Köyü/Orta Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Eber Köyü/Tekke Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Eber Köyü/Yeni Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Eber Köyü/Yukarı Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Elbiz Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Göcen Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "İnli Köyü/Alpaslan Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "İnli Köyü/Cumhuriyet Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "İnli Köyü/Evren Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "İnli Köyü/Kavaklı Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "İnli Köyü/Kocatepe Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "İnli Köyü/Yayla Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "İstasyon Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Kadıköy Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Karamık Köyü/75. Yıl Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Karamık Köyü/Cumhuriyet Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Karamıkkaracaören Beldesi/Aşağı Mahallesi",
        "postaKodu": "03720",
        "semt": "Karamıkkaracaören"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Karamıkkaracaören Beldesi/Bağlar Mahallesi",
        "postaKodu": "03720",
        "semt": "Karamıkkaracaören"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Karamıkkaracaören Beldesi/Seka Mahallesi",
        "postaKodu": "03720",
        "semt": "Karamıkkaracaören"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Karamıkkaracaören Beldesi/Yukarı Mahallesi",
        "postaKodu": "03720",
        "semt": "Karamıkkaracaören"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Kılıçyaka Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Koçbeyli Köyü/Aşağı Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Koçbeyli Köyü/Göçmezler Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Koçbeyli Köyü/Gülbaharlı Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Koçbeyli Köyü/Yeni Mahallesi",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Köprübaşı Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Maltepe Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Orhaniye Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Orta Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Pazarağaç Beldesi/Afyon Mahallesi",
        "postaKodu": "03706",
        "semt": "Pazarağaç"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Pazarağaç Beldesi/Beşevler Mahallesi",
        "postaKodu": "03706",
        "semt": "Pazarağaç"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Pazarağaç Beldesi/Karabulut Mahallesi",
        "postaKodu": "03706",
        "semt": "Pazarağaç"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Pazarağaç Beldesi/Orta Mahallesi",
        "postaKodu": "03706",
        "semt": "Pazarağaç"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Pazarağaç Beldesi/Yukarı Mahallesi",
        "postaKodu": "03706",
        "semt": "Pazarağaç"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Pınarkaya Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Şirinevler Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Tekke Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Vakıf Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Yaka Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Yeşilevler Mahallesi",
        "postaKodu": "03700",
        "semt": "Çay"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çay",
        "mahalle": "Yeşilyurt Köyü",
        "postaKodu": "03702",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Bucak Mahallesi",
        "postaKodu": "03060",
        "semt": "Çobanlar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Gölcük Mahallesi",
        "postaKodu": "03060",
        "semt": "Çobanlar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Göynük Köyü",
        "postaKodu": "03062",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Işık Mahallesi",
        "postaKodu": "03060",
        "semt": "Çobanlar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Kaledeki Köyü",
        "postaKodu": "03062",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Karadede Mahallesi",
        "postaKodu": "03060",
        "semt": "Çobanlar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Kocaöz Beldesi/Atatürk Mahallesi",
        "postaKodu": "03107",
        "semt": "Kocaöz"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Kocaöz Beldesi/Cumhuriyet Mahallesi",
        "postaKodu": "03107",
        "semt": "Kocaöz"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Kocaöz Beldesi/Fatih Mahallesi",
        "postaKodu": "03107",
        "semt": "Kocaöz"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Kocaöz Beldesi/İstiklal Mahallesi",
        "postaKodu": "03107",
        "semt": "Kocaöz"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Sırakapi Mahallesi",
        "postaKodu": "03060",
        "semt": "Çobanlar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Termalkent Mahallesi",
        "postaKodu": "03060",
        "semt": "Çobanlar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Yavuz Selim Mahallesi",
        "postaKodu": "03060",
        "semt": "Çobanlar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03060",
        "semt": "Çobanlar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Çobanlar",
        "mahalle": "Zafer Mahallesi",
        "postaKodu": "03060",
        "semt": "Çobanlar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Barbaros Mahallesi",
        "postaKodu": "03950",
        "semt": "Dazkırı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Çamlık Mahallesi",
        "postaKodu": "03950",
        "semt": "Dazkırı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Esentepe Mahallesi",
        "postaKodu": "03950",
        "semt": "Dazkırı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Kurtuluş Mahallesi",
        "postaKodu": "03950",
        "semt": "Dazkırı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Vehbi Koç Sanayi Bölgesi Mahallesi",
        "postaKodu": "03950",
        "semt": "Dazkırı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Yeniyol Mahallesi",
        "postaKodu": "03950",
        "semt": "Dazkırı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Yeşilyurt Mahallesi",
        "postaKodu": "03950",
        "semt": "Dazkırı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Akarca Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Arıköy Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Aşağı Yenice Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Bozan Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Çiftlik Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Darıcilar Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Hasandede Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Hisaralan Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "İdris Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Karaağaçkuyusu Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Kızılören Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Örtülü Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Sarıkavak Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Yaylaköy Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Yukarı Yenice Köyü",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Yüreğil Köyü/Demirel Mahallesi",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dazkırı",
        "mahalle": "Yüreğil Köyü/Fatih Mahallesi",
        "postaKodu": "03952",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Adliye Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Afşar Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Akça Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Akçin Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Akgün Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Akpınarlı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Aktoprak Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Aktoprak Köyü/Aktoprak Mücavir Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Alacatlı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Alparslan Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Alparslan Köyü/Aşağı Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Alparslan Köyü/Yukarı Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Altmışevler Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Atatürk Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Avdan Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Bademli Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Bademli Köyü/Aydınlı Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Bademli Köyü/Camili Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Bademli Köyü/Orta Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Bağcılar Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Bağlar Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Belenpınar Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Bilgiç Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Bülücalan Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Bülücalan Köyü/Bülücalan Mücavir Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Burunkaya Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çağlayan Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çakıcı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Camikebir Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çamlı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çapalı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çayüstü Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Cerityaylası Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çiçektepe Köyü/Alparslan Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çiçektepe Köyü/Atatürk Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çiçektepe Köyü/Cumhuriyet Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çiçektepe Köyü/Fatih Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çobansaray Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Cumhuriyet Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Cumhuriyet Köyü/Akça Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Cumhuriyet Köyü/Ömerli Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Cumhuriyet Köyü/Seydilli Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Dikici Köyü/Dikici Mücavir Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Dikici Köyü/Erdoğan Ulusan Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Dikici Köyü/Hasan Hüseyin Çimen Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Dikici Köyü/Mehmet Tuncay Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Dikici Köyü/Mustafa Acar Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Dikici Köyü/Yücel Yalçın Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Doğanlı Köyü/Cumhuriyet Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Doğanlı Köyü/Gazi Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Doğanlı Köyü/Örnek Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Dombay Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Dörtyol Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Duman Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Eldere Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Emniyet Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Ergenli Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Gazi Mehmet Çavuş Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Gençali Köyü/Camili Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Gençali Köyü/Gençalıosb Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Gençali Köyü/Gençeli Mücavir Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Gençali Köyü/Köy Konağı Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Gençali Köyü/Yeni Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Göçerli Köyü/Dere Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Göçerli Köyü/Gedik Altı Mevki Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Göçerli Köyü/Gedik Başı Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Göçerli Köyü/Harman Yeri Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Göçerli Köyü/Küçük Kale Önü Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Göçerli Köyü/Sırataş Mh. Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Gökçeli Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Haydarli Beldesi/Cumhuriyet Mahallesi",
        "postaKodu": "03480",
        "semt": "Haydarli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "03480",
        "semt": "Haydarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "İstiklal Mahallesi",
        "postaKodu": "03480",
        "semt": "Haydarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Merkez Mahallesi",
        "postaKodu": "03480",
        "semt": "Haydarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Ocaklı Mahallesi",
        "postaKodu": "03480",
        "semt": "Haydarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Örnek Mahallesi",
        "postaKodu": "03480",
        "semt": "Haydarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03480",
        "semt": "Haydarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Ilıca Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "İncirli Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "İstasyon Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "İtfaiye Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kabaklı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kadılar Köyü/Atatürk Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kadılar Köyü/Cumhuriyet Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kadılar Köyü/İnönü Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kadılar Köyü/Zafer Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Karabedir Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Karahacılı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Karakuyu Köyü/İstasyon Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Karakuyu Köyü/Köy İçi Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Karataş Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kazanpınar Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Keklice Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kınık Köyü/Bahçelievler Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kınık Köyü/Esentepe Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kınık Köyü/Fatih Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kınık Köyü/Öztürk Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Kızıllı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Konak Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Körpeli Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Korubaşı Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Okçular Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Otagar Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Palaz Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Pancar Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Pazar Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Pınarbaşı Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Pınarlı Köyü",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6287.0034778258005!2d30.13104564848159!3d38.01208094076817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c677c871f514a7%3A0xd113848d6871759a!2zUMSxbmFybMSxLCAwMzQwMiBQxLFuYXJsxLEvRGluYXIvQWZ5b25rYXJhaGlzYXI!5e0!3m2!1sen!2str!4v1770290041131!5m2!1sen!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Sanayi Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Santral Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Stadyum Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Suçıkan Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Sütlaç Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Altınhisar Mahallesi",
        "postaKodu": "03490",
        "semt": "Tatarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çağlayan Mahallesi",
        "postaKodu": "03490",
        "semt": "Tatarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Çamlıca Mahallesi",
        "postaKodu": "03490",
        "semt": "Tatarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "03490",
        "semt": "Tatarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "03490",
        "semt": "Tatarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yeşilyurt Mahallesi",
        "postaKodu": "03490",
        "semt": "Tatarlı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Tekin Köyü/11 Evler Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Tekin Köyü/18 Evler Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Tekin Köyü/60 Evler Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Toptepe Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Tugaylı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Türkmen Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Üçlerce Mahallesi",
        "postaKodu": "03400",
        "semt": "Dinar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Uluköy Köyü/Camikebir Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Uluköy Köyü/Yeni Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yaka Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yaka Köyü/Yaka Mücavir Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yapağlı Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yelalan Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yeşilçat Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yeşilçat Köyü/Hacımahmut Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yeşilçat Köyü/Orta Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yeşilçat Köyü/Peynir Yemez Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yeşilhüyük Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yeşilyurt Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yıprak Köyü/Bahçelievler Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yıprak Köyü/Esentepe Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yıprak Köyü/Hisar Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yüksel Köyü",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yüksel Köyü/Akkanatlı Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Dinar",
        "mahalle": "Yüksel Köyü/Sağbaşlı Mahallesi",
        "postaKodu": "03402",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Ablak Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Adaçal Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Adalet Mahallesi (Bademli Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Ağılcık Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Alasakallı Mahallesi (Davulga Beldesi)",
        "postaKodu": "03630",
        "semt": "Davulga"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Alibeyce Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Arzılı Mahallesi (Başkonak Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Aşağıaliçomak Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Aşağıkurudere Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Avdan Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Aydınyaka Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Aynılı Mahallesi (Başkonak Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Aziziye Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Bağlarbaşı Mahallesi (Gömü Beldesi)",
        "postaKodu": "03680",
        "semt": "Gömü"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Bağlıca Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Balcam Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Başali Mahallesi (Başkonak Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Beyköy Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Beyören Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Burunarkaç Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Büyüktuğluk Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Camili Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Çatallı Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Çaykışla Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Çiftlikköy Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Çilli Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Civikli Mahallesi (Başkonak Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Cumhuriyet Mahallesi (Adayazı Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Cumhuriyet Mahallesi (Aşağıpiribeyli Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Dağılgan Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Dağınık Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Daydalı Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Demircili Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Dere Mahallesi (Aşağıkurudere Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Dereköy Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Domurlu Mahallesi (Davulga Beldesi)",
        "postaKodu": "03630",
        "semt": "Davulga"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Döneli Mahallesi (Yüreğil Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Dörtyol Mahallesi (Gömü Beldesi)",
        "postaKodu": "03680",
        "semt": "Gömü"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Ekizce Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Elhan Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Emirbaba Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Emirinköyü Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Eski Kacerli Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Eskiakören Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Eşrefli Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Fakılı Mahallesi (Tezköy Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Fatih Mahallesi (Gömü Beldesi)",
        "postaKodu": "03680",
        "semt": "Gömü"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Gedikevi Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Gelincik Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Gökçeyaka Mahallesi (Gömü Beldesi)",
        "postaKodu": "03680",
        "semt": "Gömü"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Gözeli Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Güney Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Güneysaray Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Güveççi Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Güzle Mahallesi (Tezköy Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Hacı Hüseyinli Mahallesi (Başkonak Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Hacı İsali Mahallesi (Başkonak Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Hacı Mustafalı Mahallesi (Başkonak Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Hamzahacılı Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Hisarköy Mahallesi (Davulga Beldesi)",
        "postaKodu": "03630",
        "semt": "Davulga"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "İnceli Mahallesi (Tezköy Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "İncik Mahallesi (Davulga Beldesi)",
        "postaKodu": "03630",
        "semt": "Davulga"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "İncili Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "İnkilap Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Karaağaç Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Karacalar Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Karakuyu Mahallesi (Davulga Beldesi)",
        "postaKodu": "03630",
        "semt": "Davulga"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Karayatak Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Karşıyaka Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Karşıyaka Mahallesi (Aşağıpiribeyli Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Kavlaklı Mahallesi (Kılıçlı Kavlaklı Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Kılıçlar Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Kılıçlı Mahallesi (Kılıçlı Kavlaklı Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Kırkpınar Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Köseli Mahallesi (Yüreğil Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Koyunlu Mahallesi (Kılıçlı Kavlaklı Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Kuruca Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Kurucaosb Mahallesi (Kuruca Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Leylekli Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Mahrumlu Mahallesi (Yukarıkurudere Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Mazı Mahallesi (Yukarıkurudere Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Menderes Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Örenköy Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Özkan Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Palitlı Mahallesi (Yukarıkurudere Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Rahimli Mahallesi (Tezköy Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Salihler Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Sığracık Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Sofulu Mahallesi (Davulga Beldesi)",
        "postaKodu": "03630",
        "semt": "Davulga"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Soğukkuyu Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Suvermez Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Tabaklar Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Tepeköy Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Tezköy Merkez Mahallesi (Tezköy Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Toki Mahallesi (Gömü Beldesi)",
        "postaKodu": "03680",
        "semt": "Gömü"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Toklucak Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Topçular Mahallesi (Başkonak Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Topdere Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Türkmenakören Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Türkmenköy Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Ümraniye Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Veysel Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yarıkkaya Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yarımca Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yavuz Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yeni Kacerli Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yeni Mahallesi (Adayazı Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yeni Mahallesi (Aşağıpiribeyli Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yenidoğan Mahallesi",
        "postaKodu": "03600",
        "semt": "Emirdağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yenidoğan Mahallesi (Adayazı Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yenikapı Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yeniköy Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yıldız Mahallesi (Bademli Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yüreğil Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Yusufağa Köyü",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Emirdağ",
        "mahalle": "Zafer Mahallesi (Bademli Köyü)",
        "postaKodu": "03602",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Akyarma Köyü",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Bademli Mahallesi (Altınova Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Barbaros Mahallesi (Gökçek Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Bostancı Köyü",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Camikebir Mahallesi",
        "postaKodu": "03960",
        "semt": "Evciler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Çayönü Mahallesi (Madenler Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Deprem Evleri Mahallesi (Madenler Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Dere Mahallesi (Altınova Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "03960",
        "semt": "Evciler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Fatih Mahallesi (Gökçek Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Gündoğdu Deprem Evleri Mahallesi (Gökçek Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Kayalık Mahallesi",
        "postaKodu": "03960",
        "semt": "Evciler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Körkuyu Köyü",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Küme Evleri Mahallesi (Altınova Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Mehmet Akif Mahallesi",
        "postaKodu": "03960",
        "semt": "Evciler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Mevlana Mahallesi (Baraklı Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Yavuz Selim Mahallesi",
        "postaKodu": "03960",
        "semt": "Evciler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Yunus Emre Mahallesi",
        "postaKodu": "03960",
        "semt": "Evciler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Evciler",
        "mahalle": "Yunus Emre Mahallesi (Baraklı Köyü)",
        "postaKodu": "03962",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Akçadere Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Aşağı Mahallesi (Güre Köyü)",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Aşağı Mahallesi (Kozluca Köyü)",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Avgancık Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Çalca Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Çepni Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Cumhuriyet Mahallesi (Yeşilhisar Köyü)",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Davulga Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Devlethan Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Devrant Mahallesi (Güre Köyü)",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Eldizan Mahallesi (Çepni Köyü)",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Fatih Mahallesi (Yeşilhisar Köyü)",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Güre Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Hisar Mahallesi (Yeşilhisar Köyü)",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "03530",
        "semt": "Hocalar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "İhsaniye Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Kocagöl Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Kozluca Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Örencik Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Örtülü Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Şafak Mahallesi",
        "postaKodu": "03530",
        "semt": "Hocalar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Uluköy Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Yağcı Köyü",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03530",
        "semt": "Hocalar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Yeni Mahallesi (Yeşilhisar Köyü)",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Hocalar",
        "mahalle": "Yukarı Mahallesi (Akçadere Köyü)",
        "postaKodu": "03532",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Ablak Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Akören Mahallesi",
        "postaKodu": "03370",
        "semt": "İhsaniye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Aşağıtandır Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Atatürk Mahallesi (Yaylabağı Beldesi)",
        "postaKodu": "03375",
        "semt": "Yaylabağı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Bahçelievler Mahallesi (Yaylabağı Beldesi)",
        "postaKodu": "03375",
        "semt": "Yaylabağı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Basırlar Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Bayramaliler Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Belce Mahallesi (Gazlıgöl Beldesi)",
        "postaKodu": "03383",
        "semt": "Gazlıgöl"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Beyköy Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Cumalı Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "03370",
        "semt": "İhsaniye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Cumhuriyet Mahallesi (Ayazini Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Cumhuriyet Mahallesi (Bozhüyük Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Cumhuriyet Mahallesi (Gazlıgöl Beldesi)",
        "postaKodu": "03383",
        "semt": "Gazlıgöl"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Cumhuriyet Mahallesi (Karacaahmet Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Cumhuriyet Mahallesi (Kayıhan Beldesi)",
        "postaKodu": "03384",
        "semt": "Kayıhan"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Demirli Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Dereköy Mahallesi (Eynehankuzviran Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Esentepe Mahallesi (Yaylabağı Beldesi)",
        "postaKodu": "03375",
        "semt": "Yaylabağı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Eskieymir Mahallesi (Eskieymir Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Fatih Mahallesi (Ayazini Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Fatih Mahallesi (Döğer Beldesi)",
        "postaKodu": "03380",
        "semt": "Döğer"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Fatih Mahallesi (Gazlıgöl Beldesi)",
        "postaKodu": "03383",
        "semt": "Gazlıgöl"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Hacıbeyli Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Hürriyet Mahallesi",
        "postaKodu": "03370",
        "semt": "İhsaniye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "İğdemir Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Kadımürsel Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Kervansaray Mahallesi (Döğer Beldesi)",
        "postaKodu": "03380",
        "semt": "Döğer"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Kildirler Mahallesi (Eynehankuzviran Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Kıyır Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Kunduzlu Mahallesi (Kayıhan Beldesi)",
        "postaKodu": "03384",
        "semt": "Kayıhan"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Kuzviran Mahallesi (Eynehankuzviran Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Muratlar Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Oğulbeyli Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Öksüzler Mahallesi (Eynehankuzviran Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Orhanlı Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Osmanköy Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Pınar Mahallesi (Kayıhan Beldesi)",
        "postaKodu": "03384",
        "semt": "Kayıhan"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Şahinler Mahallesi",
        "postaKodu": "03370",
        "semt": "İhsaniye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Sarıcaova Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Şehitler Mahallesi (Bozhüyük Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Susuz Osmaniye Mahallesi",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Taşpınar Mahallesi (Eskieymir Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Türbe Mahallesi (Karacaahmet Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Türbe Mahallesi (Kayıhan Beldesi)",
        "postaKodu": "03384",
        "semt": "Kayıhan"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Üçlerkayası Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Yeni Mahallesi (Döğer Beldesi)",
        "postaKodu": "03380",
        "semt": "Döğer"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Yenice Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Yenikent Mahallesi",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Yeşilyayla Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Yiğitpınarı Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Yukarıtandır Köyü",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Yunus Emre Mahallesi (Bozhüyük Köyü)",
        "postaKodu": "03372",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Yunus Emre Mahallesi (Döğer Beldesi)",
        "postaKodu": "03380",
        "semt": "Döğer"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Yunus Emre Mahallesi (Gazlıgöl Beldesi)",
        "postaKodu": "03383",
        "semt": "Gazlıgöl"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İhsaniye",
        "mahalle": "Zafer Mahallesi",
        "postaKodu": "03370",
        "semt": "İhsaniye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Ağzıkara Mahallesi (Çatağıl Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Atatürk Mahallesi (Alanyurt Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Bahçecik Köyü",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Çakmak Mahallesi (Alanyurt Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Çalışlar Köyü",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Cevizli Köyü",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Çukur Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Cumhuriyet Mahallesi (Alanyurt Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Cumhuriyet Mahallesi (Seydiler Beldesi)",
        "postaKodu": "03754",
        "semt": "Seydiler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Doğanlar Köyü",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Doğlat Köyü",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Duraklar Mahallesi (Çatağıl Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Esentepe Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Eski Hamam Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Hasan Basri Mahallesi (Seydiler Beldesi)",
        "postaKodu": "03754",
        "semt": "Seydiler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Hürriyet Mahallesi (Alanyurt Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Karaağaç Köyü",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Karakaya Mahallesi (Konarı Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Kavak Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Kavruklar Mahallesi (Karakaya Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Keserler Mahallesi (Karakaya Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Kurtuluş Mahallesi",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Kürtyurdu Mahallesi (Çatağıl Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Medrese Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Merkez Mahallesi (Çatağıl Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Merkez Mahallesi (Karakaya Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Merkez Mahallesi (Konarı Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Merkez Mahallesi (Olukpınar Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Mermer Osb Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Öldümler Mahallesi (Olukpınar Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Selçuklu Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Selimiye Mahallesi (Alanyurt Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Şirinevler Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Tepecik Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Veliler Mahallesi (Karakaya Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Yanıklar Mahallesi (Olukpınar Köyü)",
        "postaKodu": "03752",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "İscehisar",
        "mahalle": "Zeybek Mahallesi",
        "postaKodu": "03750",
        "semt": "İscehisar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Kızılören",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "03560",
        "semt": "Kızılören"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Kızılören",
        "mahalle": "Ekinova Köyü",
        "postaKodu": "03562",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Kızılören",
        "mahalle": "Gülyazı Köyü",
        "postaKodu": "03562",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Kızılören",
        "mahalle": "Türkbelkavak Köyü",
        "postaKodu": "03562",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Kızılören",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03560",
        "semt": "Kızılören"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Kızılören",
        "mahalle": "Yenibelkavak Köyü",
        "postaKodu": "03562",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Afyonkarahisar Osb Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Akçin Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Akmescit Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Alcalı Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Ali Çetinkaya Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Ali Çetinkaya Mahallesi (Çayırbağ Beldesi)",
        "postaKodu": "03210",
        "semt": "Çayırbağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Ali İhsan Paşa Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Ali İhsan Paşa Mahallesi (Nuribey Beldesi)",
        "postaKodu": "03215",
        "semt": "Nuribey"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Altındağ Mahallesi (Sülümenli Beldesi)",
        "postaKodu": "03140",
        "semt": "Sülümenli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Ataköy Mahallesi",
        "postaKodu": "03050",
        "semt": "Adliye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Atatürk Mahallesi (Beyyazı Beldesi)",
        "postaKodu": "03217",
        "semt": "Beyyazı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Atatürk Mahallesi (Işıklar Beldesi)",
        "postaKodu": "03080",
        "semt": "Işıklar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Barbaros Mahallesi (Salar Beldesi)",
        "postaKodu": "03150",
        "semt": "Salar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Battalgazi Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Bayatcık Mahallesi",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Bayramgazi Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Belkaracaören Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Beyazıt Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Bostanlı Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Burhaniye Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Burmalı Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Çakır Mahallesi",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Çatalçeşme Mahallesi (Bayramgazi Köyü)",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Çavdarlı Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Cumhuriyet Mahallesi (Anıtkaya Köyü)",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Cumhuriyet Mahallesi (Beyyazı Beldesi)",
        "postaKodu": "03217",
        "semt": "Beyyazı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Cumhuriyet Mahallesi (Erkmen Beldesi)",
        "postaKodu": "03211",
        "semt": "Erkmen"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Cumhuriyet Mahallesi (Işıklar Beldesi)",
        "postaKodu": "03080",
        "semt": "Işıklar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Cumhuriyet Mahallesi (Sülümenli Beldesi)",
        "postaKodu": "03140",
        "semt": "Sülümenli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Dairecep Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Değirmendere Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Demirçevre Mahallesi",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Derviş Paşa Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Devren Mahallesi (Saadet Köyü)",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Dörtyol Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Dumlupınar Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Erenler Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Erenler Mahallesi (Çıkrık Beldesi)",
        "postaKodu": "03204",
        "semt": "Çıkrık"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Ertuğrul Gazi Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Esentepe Mahallesi",
        "postaKodu": "03050",
        "semt": "Adliye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Eşrefpaşa Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Fakıpaşa Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Fatih Mahallesi (Çayırbağ Beldesi)",
        "postaKodu": "03210",
        "semt": "Çayırbağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Fatih Mahallesi (Fethibey Beldesi)",
        "postaKodu": "03212",
        "semt": "Fethibey"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Fatih Mahallesi (Gebeceler Beldesi)",
        "postaKodu": "03213",
        "semt": "Gebeceler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Fatih Mahallesi (Nuribey Beldesi)",
        "postaKodu": "03215",
        "semt": "Nuribey"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Fatih Mahallesi (Salar Beldesi)",
        "postaKodu": "03150",
        "semt": "Salar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Fevzi Çakmak Mahallesi (Erkmen Beldesi)",
        "postaKodu": "03211",
        "semt": "Erkmen"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Gazi Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Gökhan Mahallesi (Susuz Beldesi)",
        "postaKodu": "03218",
        "semt": "Susuz"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Gözsüzlü Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Gültepe Mahallesi (Sülün Beldesi)",
        "postaKodu": "03214",
        "semt": "Sülün"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Gümüş Tepe Mahallesi (Salar Beldesi)",
        "postaKodu": "03150",
        "semt": "Salar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Güvenevler Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Halil İbrahim Sultan Mahallesi (Salar Beldesi)",
        "postaKodu": "03150",
        "semt": "Salar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Halimoru Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Hamidiye Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Hasan Karaağaç Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Hattat Karahisar Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Hisar Mahallesi (Sülün Beldesi)",
        "postaKodu": "03214",
        "semt": "Sülün"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Hoca Ahmet Yesevi Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Hürriyet Mahallesi (Erkmen Beldesi)",
        "postaKodu": "03211",
        "semt": "Erkmen"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Hürriyet Mahallesi (Işıklar Beldesi)",
        "postaKodu": "03080",
        "semt": "Işıklar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Huzur Mahallesi (Çayırbağ Beldesi)",
        "postaKodu": "03210",
        "semt": "Çayırbağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "İsmail Mahallesi",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "İstiklal Mahallesi",
        "postaKodu": "03050",
        "semt": "Adliye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "İstiklal Mahallesi (Gebeceler Beldesi)",
        "postaKodu": "03213",
        "semt": "Gebeceler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "İstiklal Mahallesi (Işıklar Beldesi)",
        "postaKodu": "03080",
        "semt": "Işıklar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "İstiklal Mahallesi (Sülümenli Beldesi)",
        "postaKodu": "03140",
        "semt": "Sülümenli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kanlıca Mahallesi",
        "postaKodu": "03050",
        "semt": "Adliye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kaplanlı Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Karaarslan Çayırı Mahallesi (Karaarslan Köyü)",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Karaarslan Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Karaman Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Karşıyaka Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kasımpaşa Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kayadibi Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kışlacık Mahallesi",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kızıldağ Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Koçaktepesi Mahallesi (Çavdarlı Köyü)",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kocatepe Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kocatepe Mahallesi (Gebeceler Beldesi)",
        "postaKodu": "03213",
        "semt": "Gebeceler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kocatepe Mahallesi (Kocatepe Beldesi)",
        "postaKodu": "03105",
        "semt": "Kocatepe"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Köprülü Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kozluca Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Küçükçobanlı Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Küçükkalecik Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kurtuluş Mahallesi (Değirmenayvalı Beldesi)",
        "postaKodu": "03103",
        "semt": "Değirmenayvalı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Kurtuluş Mahallesi (Kocatepe Beldesi)",
        "postaKodu": "03105",
        "semt": "Kocatepe"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Mareşal Fevzi Çakmak Mahallesi",
        "postaKodu": "03050",
        "semt": "Adliye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Mareşal Fevzi Çakmak Mahallesi (Nuribey Beldesi)",
        "postaKodu": "03215",
        "semt": "Nuribey"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Marulcu Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Mecidiye Mahallesi",
        "postaKodu": "03200",
        "semt": "Çarşı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Mehmet Akif Mahallesi (Nuribey Beldesi)",
        "postaKodu": "03215",
        "semt": "Nuribey"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Nazmi Saatçi Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Olucak Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Olucak Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Omuzca Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Orhangazi Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Örnek Mahallesi (Beyyazı Beldesi)",
        "postaKodu": "03217",
        "semt": "Beyyazı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Örnekevler Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Osman Gazi Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Osmanlı Mahallesi (Susuz Beldesi)",
        "postaKodu": "03218",
        "semt": "Susuz"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Saadet Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Sadıkbey Mahallesi",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Sahipata Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Sakarya Mahallesi (Susuz Beldesi)",
        "postaKodu": "03218",
        "semt": "Susuz"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Saraydüzü Çayırı Mahallesi (Saraydüzü Köyü)",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Saraydüzü Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Sarık Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Şehit Ahmet Mahallesi (Değirmenayvalı Beldesi)",
        "postaKodu": "03103",
        "semt": "Değirmenayvalı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Şeker Mahallesi (Sülümenli Beldesi)",
        "postaKodu": "03140",
        "semt": "Sülümenli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Selçuklu Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Selçuklu Mahallesi (Susuz Beldesi)",
        "postaKodu": "03218",
        "semt": "Susuz"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Şuhut Osb Mahallesi (Belkaracaören Köyü)",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Sümer Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Tacı Ahmet Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Taşpınar Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Uğur Mahallesi (Çayırbağ Beldesi)",
        "postaKodu": "03210",
        "semt": "Çayırbağ"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Ulucami Mahallesi (Sülümenli Beldesi)",
        "postaKodu": "03140",
        "semt": "Sülümenli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Veysel Karani Mahallesi",
        "postaKodu": "03040",
        "semt": "Fatih"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yaka Mahallesi (Işıklar Beldesi)",
        "postaKodu": "03080",
        "semt": "Işıklar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yarenler Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yarımca Köyü",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yavuz Selim Mahallesi (Fethibey Beldesi)",
        "postaKodu": "03212",
        "semt": "Fethibey"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yavuz Selim Mahallesi (Salar Beldesi)",
        "postaKodu": "03150",
        "semt": "Salar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yeni Mahallesi (Gebeceler Beldesi)",
        "postaKodu": "03213",
        "semt": "Gebeceler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yeni Mahallesi (Işıklar Beldesi)",
        "postaKodu": "03080",
        "semt": "Işıklar"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yenice Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yeşilyurt Mahallesi",
        "postaKodu": "03030",
        "semt": "Uydukent"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yunus Emre Mahallesi",
        "postaKodu": "03100",
        "semt": "Kale"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yunus Emre Mahallesi (Fethibey Beldesi)",
        "postaKodu": "03212",
        "semt": "Fethibey"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Yunuslar Mahallesi (Çıkrık Beldesi)",
        "postaKodu": "03204",
        "semt": "Çıkrık"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Zafer Mahallesi",
        "postaKodu": "03050",
        "semt": "Adliye"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Zafer Mahallesi (Anıtkaya Köyü)",
        "postaKodu": "03032",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Zafer Mahallesi (Gebeceler Beldesi)",
        "postaKodu": "03213",
        "semt": "Gebeceler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Merkez",
        "mahalle": "Zafer Mahallesi (Sülümenli Beldesi)",
        "postaKodu": "03140",
        "semt": "Sülümenli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Akın Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Alacami Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Alagöz Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Alamescit Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Arızlar Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Asmacık Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Bahçeli Mahallesi (Örenkaya Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Başkuyucak Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Baştepe Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Bektaş Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Çakır Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Çambeyli Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Çay Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Celiloğlu Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Çevrepınar Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Çiğiltepe Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Çiğiltepe Mahallesi (Akharım Beldesi)",
        "postaKodu": "03510",
        "semt": "Akharım"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Çomoğlu Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Çukurca Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Cuma Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Cumhuriyet Mahallesi (Ballık Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Cumhuriyet Mahallesi (Başağaç Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Cumhuriyet Mahallesi (Karadirek Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Cumhuriyet Mahallesi (Kusura Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Cumhuriyet Mahallesi (Yavaşlar Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Daylık Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Dikmen Mahallesi (Akharım Beldesi)",
        "postaKodu": "03510",
        "semt": "Akharım"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Dodurga Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Dutağacı Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Ece Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Ekinhisar Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Emek Mahallesi (Sorkun Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Emirhisar Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Esentepe Mahallesi (Ballık Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Fatih Mahallesi (Kusura Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Fatih Mahallesi (Menteş Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Gökçealan Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Güney Mahallesi (Kızık Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Gürsu Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Hırka Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Hisar Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Hisar Mahallesi (Akharım Beldesi)",
        "postaKodu": "03510",
        "semt": "Akharım"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Hisar Mahallesi (Yavaşlar Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Hürriyet Mahallesi (Karadirek Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Hürriyet Mahallesi (Kusura Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Hürriyet Mahallesi (Menteş Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "İstasyon Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "İstiklal Mahallesi (Başağaç Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "İstiklal Mahallesi (Karadirek Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Karacaören Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Karasandıklı Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Kargın Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Kestel Mahallesi (Sorkun Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Kevser Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Kınık Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Kızılca Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Koçgazi Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Koçhisar Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Kozvan Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Kurtuluş Mahallesi (Yavaşlar Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Kuzey Mahallesi (Kızık Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Nasuhoğlu Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Nur Mahallesi (Örenkaya Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Oda Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Örmekuyu Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Orta Mahallesi (Kızık Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Otluk Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Reşadiye Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Şafak Mahallesi (Başağaç Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Saltık Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Sandıklı Osb Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Sazak Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Selçik Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Şeyhyahşi Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Şirinevler Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Soğucak Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Susuz Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Tapduk Emre Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Ülfeciler Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Ürküt Köyü",
        "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.3714079668907!2d30.187378511828612!3d38.525205871688314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cf531288ecbfd5%3A0xb46ef1d5918821bc!2zw5xya8O8dCwgMDM1MDIgw5xya8O8dC9TYW5kxLFrbMSxL0FmeW9ua2FyYWhpc2Fy!5e0!3m2!1sen!2str!4v1773552723562!5m2!1sen!2str\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Yanıkören Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Yayman Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Yolkonak Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Yükseliş Mahallesi (Sorkun Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Yumruca Köyü",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Yunus Emre Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Zafer Mahallesi",
        "postaKodu": "03500",
        "semt": "Sandıklı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sandıklı",
        "mahalle": "Zafer Mahallesi (Ballık Köyü)",
        "postaKodu": "03502",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Akçaşar Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Akdeğirmen Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Akpınar Mahallesi",
        "postaKodu": "03850",
        "semt": "Sinanpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Ali Çetinkaya Mahallesi",
        "postaKodu": "03850",
        "semt": "Sinanpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Ambar Mahallesi (Tınaztepe Beldesi)",
        "postaKodu": "03110",
        "semt": "Tınaztepe"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Aşağı Mahallesi (Güney Beldesi)",
        "postaKodu": "03880",
        "semt": "Güney"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Atatürk Mahallesi (Kılıçarslan Beldesi)",
        "postaKodu": "03858",
        "semt": "Kılıçarslan"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Atatürk Mahallesi (Kırka Beldesi)",
        "postaKodu": "03859",
        "semt": "Kırka"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Atatürk Mahallesi (Küçükhüyük Beldesi)",
        "postaKodu": "03854",
        "semt": "Küçükhüyük"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Atatürk Mahallesi (Tokuşlar Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Ayvali Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Bağdat Mahallesi (Akören Beldesi)",
        "postaKodu": "03857",
        "semt": "Akören"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Bahçelievler Mahallesi",
        "postaKodu": "03850",
        "semt": "Sinanpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Bahçelievler Mahallesi (Nuh Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Bahçelievler Mahallesi (Taşoluk Beldesi)",
        "postaKodu": "03121",
        "semt": "Taşoluk"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Bahçelievler Mahallesi (Tınaztepe Beldesi)",
        "postaKodu": "03110",
        "semt": "Tınaztepe"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Balmahmut Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Baltepe Mahallesi (Kınık Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Başkimse Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Bayrak Mahallesi (Kınık Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Boyali Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Bulca Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çalışlar Mahallesi (Güney Beldesi)",
        "postaKodu": "03880",
        "semt": "Güney"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Cami Mahallesi (Kınık Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çamtepe Mahallesi (Kınık Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çankaya Mahallesi (Taşoluk Beldesi)",
        "postaKodu": "03121",
        "semt": "Taşoluk"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çatkuyu Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çayhisar Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çayır Mahallesi (Kınık Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çiğiltepe Mahallesi",
        "postaKodu": "03850",
        "semt": "Sinanpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çiğiltepe Mahallesi (Ahmetpaşa Beldesi)",
        "postaKodu": "03860",
        "semt": "Ahmetpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çınarlı Mahallesi (Taşoluk Beldesi)",
        "postaKodu": "03121",
        "semt": "Taşoluk"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Çobanözü Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Cumhuriyet Mahallesi",
        "postaKodu": "03850",
        "semt": "Sinanpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Cumhuriyet Mahallesi (Düzağaç Beldesi)",
        "postaKodu": "03870",
        "semt": "Düzağaç"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Cumhuriyet Mahallesi (Kılıçarslan Beldesi)",
        "postaKodu": "03858",
        "semt": "Kılıçarslan"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Cumhuriyet Mahallesi (Küçükhüyük Beldesi)",
        "postaKodu": "03854",
        "semt": "Küçükhüyük"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Cumhuriyet Mahallesi (Nuh Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Cumhuriyet Mahallesi (Serban Beldesi)",
        "postaKodu": "03855",
        "semt": "Serban"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Cumhuriyet Mahallesi (Taşoluk Beldesi)",
        "postaKodu": "03121",
        "semt": "Taşoluk"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Cumhuriyet Mahallesi (Tokuşlar Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Dede Mahallesi (Kınık Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Dibekbaşı Mahallesi (Ahmetpaşa Beldesi)",
        "postaKodu": "03860",
        "semt": "Ahmetpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Elvanpaşa Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Eyice Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Fatih Mahallesi",
        "postaKodu": "03850",
        "semt": "Sinanpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Fatih Mahallesi (Akören Beldesi)",
        "postaKodu": "03857",
        "semt": "Akören"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Fatih Mahallesi (Düzağaç Beldesi)",
        "postaKodu": "03870",
        "semt": "Düzağaç"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Fatih Mahallesi (Kırka Beldesi)",
        "postaKodu": "03859",
        "semt": "Kırka"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Fatih Mahallesi (Küçükhüyük Beldesi)",
        "postaKodu": "03854",
        "semt": "Küçükhüyük"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Fatih Mahallesi (Tınaztepe Beldesi)",
        "postaKodu": "03110",
        "semt": "Tınaztepe"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Fevzi Çakmak Mahallesi (Kılıçarslan Beldesi)",
        "postaKodu": "03858",
        "semt": "Kılıçarslan"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Garipçe Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Gezler Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Gölcük Mahallesi (Ahmetpaşa Beldesi)",
        "postaKodu": "03860",
        "semt": "Ahmetpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Halkalı Mahallesi (Ahmetpaşa Beldesi)",
        "postaKodu": "03860",
        "semt": "Ahmetpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Hisar Mahallesi (Serban Beldesi)",
        "postaKodu": "03855",
        "semt": "Serban"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Hozman Mahallesi (Serban Beldesi)",
        "postaKodu": "03855",
        "semt": "Serban"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Hürriyet Mahallesi (Nuh Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Hürriyet Mahallesi (Taşoluk Beldesi)",
        "postaKodu": "03121",
        "semt": "Taşoluk"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "İğdeli Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Işık Mahallesi (Düzağaç Beldesi)",
        "postaKodu": "03870",
        "semt": "Düzağaç"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "İstiklal Mahallesi (Nuh Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Karaca Ören Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Kayadibi Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Kocatepe Mahallesi (Kılıçarslan Beldesi)",
        "postaKodu": "03858",
        "semt": "Kılıçarslan"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Köprübaşı Mahallesi (Serban Beldesi)",
        "postaKodu": "03855",
        "semt": "Serban"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Küçüktepe Mahallesi (Ahmetpaşa Beldesi)",
        "postaKodu": "03860",
        "semt": "Ahmetpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Kümbet Mahallesi (Serban Beldesi)",
        "postaKodu": "03855",
        "semt": "Serban"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Kurtuluş Mahallesi (Küçükhüyük Beldesi)",
        "postaKodu": "03854",
        "semt": "Küçükhüyük"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Öğretmenler Mahallesi",
        "postaKodu": "03850",
        "semt": "Sinanpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Orta Mahallesi (Güney Beldesi)",
        "postaKodu": "03880",
        "semt": "Güney"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Orta Mahallesi (Serban Beldesi)",
        "postaKodu": "03855",
        "semt": "Serban"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Saray Mahallesi (Tınaztepe Beldesi)",
        "postaKodu": "03110",
        "semt": "Tınaztepe"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Saraycık Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Tazlar Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yavuz Sultan Selim Mahallesi (Kırka Beldesi)",
        "postaKodu": "03859",
        "semt": "Kırka"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yeni Mahallesi (Güney Beldesi)",
        "postaKodu": "03880",
        "semt": "Güney"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yeni Mahallesi (Taşoluk Beldesi)",
        "postaKodu": "03121",
        "semt": "Taşoluk"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yeni Mahallesi (Tınaztepe Beldesi)",
        "postaKodu": "03110",
        "semt": "Tınaztepe"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yıldırım Beyazıt Mahallesi (Akören Beldesi)",
        "postaKodu": "03857",
        "semt": "Akören"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yıldırım Beyazıt Mahallesi (Kırka Beldesi)",
        "postaKodu": "03859",
        "semt": "Kırka"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yıldırım Kemal Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yukarı Mahallesi",
        "postaKodu": "03850",
        "semt": "Sinanpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yukarı Mahallesi (Ahmetpaşa Beldesi)",
        "postaKodu": "03860",
        "semt": "Ahmetpaşa"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yukarı Mahallesi (Güney Beldesi)",
        "postaKodu": "03880",
        "semt": "Güney"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Yürükmezarı Köyü",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Zafer Mahallesi (Düzağaç Beldesi)",
        "postaKodu": "03870",
        "semt": "Düzağaç"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Zafer Mahallesi (Kınık Köyü)",
        "postaKodu": "03852",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Zafer Mahallesi (Küçükhüyük Beldesi)",
        "postaKodu": "03854",
        "semt": "Küçükhüyük"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sinanpaşa",
        "mahalle": "Zafer Mahallesi (Tınaztepe Beldesi)",
        "postaKodu": "03110",
        "semt": "Tınaztepe"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Akbaba Köyü",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Akpınar Mahallesi (Yeşilçiftlik Beldesi)",
        "postaKodu": "03940",
        "semt": "Yeşilçiftlik"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Aşağı Mahallesi (Yeşilçiftlik Beldesi)",
        "postaKodu": "03940",
        "semt": "Yeşilçiftlik"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Atatürk Mahallesi (Dereçine Beldesi)",
        "postaKodu": "03910",
        "semt": "Dereçine"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Bahçelievler Mahallesi (Kırca Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Balaban Mahallesi (Çukurcak Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Çağlayan Mahallesi (Kırca Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Camikebir Mahallesi (Dereçine Beldesi)",
        "postaKodu": "03910",
        "semt": "Dereçine"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Çamözü Köyü",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Çavuş Mahallesi",
        "postaKodu": "03900",
        "semt": "Sultandağı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Çınarlı Mahallesi (Üçkuyu Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Çukurcak Köyü",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Cumhuriyet Mahallesi (Dereçine Beldesi)",
        "postaKodu": "03910",
        "semt": "Dereçine"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Cumhuriyet Mahallesi (Karapınar Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Doğancık Köyü",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Hisar Mahallesi (Kırca Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "İmam Aziz Mahallesi (Yakasinek Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "İnönü Mahallesi (Karapınar Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Karakişla Köyü",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Karaman Mahallesi (Dereçine Beldesi)",
        "postaKodu": "03910",
        "semt": "Dereçine"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Kavaklı Mahallesi (Dereçine Beldesi)",
        "postaKodu": "03910",
        "semt": "Dereçine"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Kayran Mahallesi",
        "postaKodu": "03900",
        "semt": "Sultandağı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Orta Mahallesi (Yakasinek Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Pazaralti Mahallesi",
        "postaKodu": "03900",
        "semt": "Sultandağı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Pınarlı Mahallesi (Üçkuyu Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Selçuk Mahallesi",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Selçuk Mahallesi (Karapınar Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Sira Mahallesi (Yeşilçiftlik Beldesi)",
        "postaKodu": "03940",
        "semt": "Yeşilçiftlik"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Taşköprü Köyü",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Tepebaşi Mahallesi (Yeşilçiftlik Beldesi)",
        "postaKodu": "03940",
        "semt": "Yeşilçiftlik"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Ulupınar Mahallesi (Yakasinek Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Yeni Mahallesi",
        "postaKodu": "03900",
        "semt": "Sultandağı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Yeni Mahallesi (Yakasinek Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Yenikarabağ Köyü",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Yenikent Mahallesi (Yeşilçiftlik Beldesi)",
        "postaKodu": "03940",
        "semt": "Yeşilçiftlik"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Yeşilyurt Mahallesi (Üçkuyu Köyü)",
        "postaKodu": "03911",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Yıldırım Mahallesi",
        "postaKodu": "03900",
        "semt": "Sultandağı"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Yıldız Mahallesi (Yeşilçiftlik Beldesi)",
        "postaKodu": "03940",
        "semt": "Yeşilçiftlik"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Sultandağı",
        "mahalle": "Yukarı Mahallesi (Yeşilçiftlik Beldesi)",
        "postaKodu": "03940",
        "semt": "Yeşilçiftlik"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Ağzikara Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Aharoluk Mahallesi (Ortapınar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Akkaya Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Akyatak Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Akyuva Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Altıgöz Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Anayurt Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Arapoğlu Mahallesi (Dadak Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Arızlı Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Atatürk Mahallesi (Efe Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Atatürk Mahallesi (Kayabelen Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Aydın Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Bademli Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Ballık Mahallesi (Dadak Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Baş Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Başarap Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Başören Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Başyer Mahallesi (Dadak Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Bozan Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Bürçek Mahallesi (Çakırözü Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Çağlayan Mahallesi (Karaadilli Beldesi)",
        "postaKodu": "03830",
        "semt": "Karaadilli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Çakırözü Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Çallıoğlu Mahallesi (Dadak Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Çanakpınarı Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Çobankaya Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Cumhuriyet Mahallesi (Karacaören Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Cumhuriyet Mahallesi (Kayabelen Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Dadak Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Demirbel Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Develi Mahallesi (Karaadilli Beldesi)",
        "postaKodu": "03830",
        "semt": "Karaadilli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Dolapderesi Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Efe Sultan Mahallesi (Efe Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Erenler Mahallesi (Karaadilli Beldesi)",
        "postaKodu": "03830",
        "semt": "Karaadilli"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Fatih Mahallesi (Atlıhisar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Fatih Mahallesi (Efe Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Fatih Mahallesi (Karacaören Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Gavuröreni Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Gazipaşa Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Güldede Mahallesi (Balçıkhisar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Güneytepe Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Hacı Musa Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Hallaç Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Hisar Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Hisar Mahallesi (Atlıhisar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Hürriyet Mahallesi (Karacaören Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "İcikli Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "İlyaslı Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "İplik Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "İsalı Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "İsmet İnönü Mahallesi (Kayabelen Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "İstiklal Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "İstiklal Mahallesi (Balçıkhisar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Karahallı Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Karlık Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Kavaklı Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Kayapınar Mahallesi (Ortapınar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Kılınçkaya Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Koçyatağı Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Kulak Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Kurtuluş Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Mahmut Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Mauşan Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Mehmet Akif Ersoy Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Örencik Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Ortapınar Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Oynağan Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Paşacık Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Pazar Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Şahbendi Mahallesi (Ortapınar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Sarıyar Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Satılmış Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Sinirköy Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Siyek Mahallesi (Dadak Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Suludere Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Taşlıca Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Taşoluk Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Tekke Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Tilkideresi Mahallesi (Koçyatağı Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Toprakpınar Mahallesi (Ortapınar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Üçin Mahallesi (Çakırözü Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Uzunpınar Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Yalı Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Yarışlı Köyü",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Yayla Mahallesi (Çakırözü Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Yeni Mahallesi (Balçıkhisar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Yeni Mahallesi (Efe Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Yeni Mahallesi (Karacaören Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Yeni Mahallesi (Kayabelen Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Zafer Mahallesi",
        "postaKodu": "03800",
        "semt": "Şuhut"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Zafer Mahallesi (Atlıhisar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Zafer Mahallesi (Balçıkhisar Köyü)",
        "postaKodu": "03810",
        "semt": "Merkezköyler"
    },
    {
        "il": "Afyonkarahisar",
        "ilce": "Şuhut",
        "mahalle": "Zafer Mahallesi (Karaadilli Beldesi)",
        "postaKodu": "03830",
        "semt": "Karaadilli"
    },
{"il":"Ağrı","ilce":"Diyadin","mahalle":"14 Nisan Mahallesi","postaKodu":"04900","semt":"Diyadin"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Akçevre Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Akçevre Köyü Yüceler Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Akyolaç Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Akyolaç Köyü Gültepe Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Altınkilit Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Altınkilit Köyü Altınkilit Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Aşağıakpazar Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Aşağıdalören Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Aşağıkardeşli Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Aşağıkardeşli Köyü Yukarı Kardeşli Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Aşağıtütek Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Atadami Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Atatürk Mahallesi","postaKodu":"04900","semt":"Diyadin"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Atayolu Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Atayolu Köyü Beyaztaş Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Batıbeyli Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Batıbeyli Köyü Durak Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Batıbeyli Köyü Tarlabaşı Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Boyalan Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Boyalan Köyü Zorava Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Budak Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Burgulu Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Büvetli Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Büvetli Köyü Beşevler Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Davut Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Davut Köyü Adakent Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Davut Köyü Kaplıca Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dedebulak Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dedebulak Köyü Alaçayır Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dedebulak Köyü Aşağı Köh Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dedebulak Köyü Aşağı Uğur Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dedebulak Köyü Buğdaylı Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dedebulak Köyü Kaynaklı Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dedebulak Köyü Şahinbey Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dedebulak Köyü Yukarı Köh Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dedebulak Köyü Yukarı Uğur Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Delihasan Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dibekli Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Dokuztaş Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Fatih Mahallesi","postaKodu":"04900","semt":"Diyadin"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Gedik Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Göğebakan Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Göl Mahallesi","postaKodu":"04900","semt":"Diyadin"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Gözüpek Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Günbuldu Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Günbuldu Köyü Çiftçi Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Günbuldu Köyü Gulebist Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Günbuldu Köyü Tarım Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Hacıhalit Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Heybeliyurt Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Heybeliyurt Köyü Mecburiyet Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"İsaağa Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"İsaağa Mahallesi","postaKodu":"04900","semt":"Diyadin"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Kapanca Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Karapazar Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Karataş Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Ketenpınar Mahallesi","postaKodu":"04900","semt":"Diyadin"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Kocaçoban Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Kotancı Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Kuşburnu Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Kuşburnu Köyü/Kaplıca Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Kuşlu Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Mollakara Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Murat Mahallesi","postaKodu":"04900","semt":"Diyadin"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Mutlu Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Mutlu Köyü/Apro Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Mutlu Köyü/Kırmızı Kom Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Oğuloba Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Oğuloba Köyü/Otlubayır Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Omuzbaşı Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Omuzbaşı Köyü/Yol Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Pirali Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Pirali Köyü/Akbıyık Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Rahmankulu Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Şahinşah Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Saticılar Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Saticılar Köyü/Yukarı Saticılar Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Şekerbulak Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Soğuksu Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürenkök Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürenkök Köyü/Akçay Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürenkök Köyü/Kom Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürenkök Köyü/Teyip Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürmelikoç Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürmelikoç Köyü/Abdulkadir Çetin Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürmelikoç Köyü/Ahmet Işık Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürmelikoç Köyü/Amereşk Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürmelikoç Köyü/Beşevler Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürmelikoç Köyü/Hası Kali Komu Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürmelikoç Köyü/Kamil Işık Komu Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Sürmelikoç Köyü/Kurt Dere Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Taşbasamak Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Taşbasamak Köyü/Harabe Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Taşkesen Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Taşkesen Köyü/Cumhuriyet Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Tazekent Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Toklucak Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Ulukent Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Uysallı Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yanıkçukur Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yanıkçukur Köyü/İsaselam Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yanıkçukur Köyü/Saitbey Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yeniçadır Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yeniçadır Köyü/İbrahim Komu Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yeniçadır Köyü/İpek Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yeniçadır Köyü/Seyitler Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yeniçadır Köyü/Yol Üstü Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yeşildurak Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yeşildurak Köyü/Yol Boyu Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yeşildurak Köyü/Yukarı Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yıldırım Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yıldız Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yolcupınarı Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yörükatlı Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yukarıakpazar Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yukaridalören Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yukarıtütek Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yukarıtütek Köyü/Kezo Mahallesi","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Diyadin","mahalle":"Yuva Köyü","postaKodu":"04902","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Abdigör Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Ahmedihani Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Aktarla Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Aktuğlu Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Alintepe Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Aşağıtavla Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Atabakan Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Atabakan Köyü/Yeniköy Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Ayrancı Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Ayrancı Köyü/Arpalı Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bardaklı Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bardaklı Köyü/Bedir Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Barındı Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Barış Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Başköy Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bereket Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Besler Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bezirhane Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bezirhane Köyü/Samanlı Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Binkaya Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bölücek Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bozkurt Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bozyayla Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bulakbaşı Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bulakbaşı Köyü/Demir Kılıç Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Bulakbaşı Köyü/Kesme Taş Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Büyük Ağrı Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Buyuretti Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çalıköy Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çalıköy Köyü/Taşlı Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çalıköy Köyü/Tepeili Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çetenli Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çetenli Köyü/Gökçebulak Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çiftepınar Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çiftlik Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çiftlik Köyü/Cebekümbet Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çiftlik Köyü/Türkmen Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Çömçeli Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Dağdelen Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Dalbahçe Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Demirtepe Köyü","map":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12297.550535664803!2d44.14007427731395!3d39.59594952978292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4014c9ca08a2a669%3A0xe3820c67898a6e84!2zRGVtaXJ0ZXBlLCAwNDQwMiBEZW1pcnRlcGUvRG_En3ViYXlhesSxdC9BxJ9yxLE!5e0!3m2!1sen!2str!4v1770325114056!5m2!1sen!2str\"width=\"600\"height=\"450\"style=\"border:0;\"allowfullscreen=\"\"loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade\"></iframe>","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Dolaklı Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Dostalı Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Eskisu Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Esnemez Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Esnemez Köyü/Darik Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Gökçekaynak Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Göller Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Gölyüzü Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Gölyüzü Köyü/Bekirağıl Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Gölyüzü Köyü/Çevirme Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Gölyüzü Köyü/Elle Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Gölyüzü Köyü/Mirağıl Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Gözükara Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Güllüce Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Gültepe Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Güngören Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Güngören Köyü/Aşağı Güngören Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Güngören Köyü/Gır Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Güngören Köyü/Kalhasan Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Güngören Köyü/Yakacık Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Günyolu Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Günyolu Köyü/Altun Tepe Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Günyolu Köyü/Duryan Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Günyolu Köyü/Kale Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Günyolu Köyü/Körükk Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Gürbulak Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Halaç Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Hasankeyf Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Hürriyet Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"İncesu Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Ishakpaşa Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Kalecik Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Karabulak Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Karaburun Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Karaburun Köyü/Ortaca Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Karaca Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Karakent Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Karaşeyh Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Karaşeyh Köyü/Ömerbey Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Karaşeyh Köyü/Yoluştu Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Kargakonmaz Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Kazan Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Kızılkaya Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Koçkıran Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Kucak Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Kutlubulak Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Melikşah Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Melikşah Köyü/Yukarı Melikşah Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Mescitköy Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Mescitköy Köyü/Uğrak Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Örmeli Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Örmeli Köyü/Çayır Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Örmeli Köyü/Göksügüzel Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Ortadirek Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Ortadirek Köyü/Aydoğan Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Ortaköy Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Örtülü Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Pullutarla Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Sağdıç Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Sağlıksuyu Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Sağlıksuyu Köyü/Küplü Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Sağlıksuyu Köyü/Ziyaret Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Sanayi Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Saribıyık Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Sarışavuş Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Sarigül Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Sazoba Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Seslitaş Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Seslitaş Köyü/Haso Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Seslitaş Köyü/Konutlar Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Seslitaş Köyü/Tımır Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Somkaya Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Subeşiği Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Suluçem Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Tanıktepe Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Tanıktepe Köyü/Künütepe Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Tanıktepe Köyü/Kurutepe Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Telçeker Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Topçatan Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Tutak Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Tutumlu Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Üçgöze Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Üçgöze Köyü/Ağa Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Üçmurat Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Ulu Yol Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Üzengili Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Üzengili Köyü/Rızde Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Uzunyazı Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Uzunyazı Köyü/Küçük Uzun Yazı Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Vatan Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yağmurdüşen Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yağmurdüşen Köyü/Konut Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yağmurdüşen Köyü/Şevket Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yalınsaz Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yalınsaz Köyü/Tab Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yanoba Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yanoba Köyü/Akçukur Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yaygınyurt Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yaygınyurt Köyü/Çatkıran Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yaygınyurt Köyü/Demir Kapı Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yaygınyurt Köyü/Güzel Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yaygınyurt Köyü/Sütcü Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yeni Mahallesi","postaKodu":"04400","semt":"Doğubeyazıt"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yeni Harman Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yığınçal Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yiğityatağı Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yılanlı Köyü/Aş.Küçük Yılanlı Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yılanlı Köyü/Küçük Yılanlı Mahallesi","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Doğubeyazıt","mahalle":"Yukarı Tavla Köyü","postaKodu":"04402","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Abdiköy Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Akyumak Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Akyumak Köyü/Akyumak Mezrası Mahallesi","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Alagün Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Alkuşak Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Arifbey Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Aşağıkopuz Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Aydoğdu Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Aydoğdu Köyü/Harebegül Mahallesi","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Çatalpınar Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Çatkösedağ Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Çetinsu Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Çiftepınar Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Dalkılıç Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Dalkılıç Köyü/Dalkılıç Konutlar Mahallesi","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Değirmenoluğu Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Dolutaş Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Düzağıl Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Düzyayla Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Ergözü Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Esentepe Mahallesi","postaKodu":"04600","semt":"Eleşkirt"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Fatih Mahallesi","postaKodu":"04600","semt":"Eleşkirt"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Goncali Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Goncali Köyü/Posto Mahallesi","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Gözaydın Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Güneykaya Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Güvence Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Hasanpınarı Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Haydaroğlu Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Hayrangöl Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Hürriyet Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Hürriyet Mahallesi","postaKodu":"04600","semt":"Eleşkirt"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"İkizgeçe Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"İkizgöl Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"İndere Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"İstiklal Mahallesi","postaKodu":"04600","semt":"Eleşkirt"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Kanatgeren Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Karabacak Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Karşıyaka Mahallesi","postaKodu":"04600","semt":"Eleşkirt"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Kayayolu Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Kazım Karabekir Mahallesi","postaKodu":"04600","semt":"Eleşkirt"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Kokulupınar Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Körpeçayır Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Lozan Mahallesi","postaKodu":"04600","semt":"Eleşkirt"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Mollahüseyin Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Mollasüleyman Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Mollasüleyman Köyü/Alı Paşa Mahallesi","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Müftüselim Mahallesi","postaKodu":"04600","semt":"Eleşkirt"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Öztoprak Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Palakçayı Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Pirabat Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Ramazan Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Sadaklı Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Salkımlı Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Sarıköy Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Söbetaş Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Sultanabat Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Süzgeçli Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Tahir Beldesi/Aydıntepe Mahallesi","postaKodu":"04401","semt":"Tahir"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Tahir Beldesi/Karşıyaka Mahallesi","postaKodu":"04401","semt":"Tahir"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Tahir Beldesi/Yeşil Mahallesi","postaKodu":"04401","semt":"Tahir"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Toprakkale Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Türkeli Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Uludal Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Uzunyazı Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yağmurlu Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yağmurlu Köyü/Eyüp Komu Mahallesi","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yanıkdere Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yayladüzü Beldesi/Aşağı Cihanbey Mahallesi","postaKodu":"04640","semt":"Yayladüzü"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yayladüzü Beldesi/Cumhuriyet Mahallesi","postaKodu":"04640","semt":"Yayladüzü"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yayladüzü Beldesi/Değirmengeçidi Mahallesi","postaKodu":"04640","semt":"Yayladüzü"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yayladüzü Beldesi/Gökçayır Mahallesi","postaKodu":"04640","semt":"Yayladüzü"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yayladüzü Beldesi/Karşıyaka Mahallesi","postaKodu":"04640","semt":"Yayladüzü"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yelkesen Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yeşilova Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yığintaş Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yücekapı Beldesi/Esentepe Mahallesi","postaKodu":"04630","semt":"Yücekapı"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yücekapı Beldesi/Oklavalı Mahallesi","postaKodu":"04630","semt":"Yücekapı"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yücekapı Beldesi/Şehit Engin Mahallesi","postaKodu":"04630","semt":"Yücekapı"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yücekapı Beldesi/Yeşilyurt Mahallesi","postaKodu":"04630","semt":"Yücekapı"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yukarıkopuz Köyü","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Eleşkirt","mahalle":"Yukarıkopuz Köyü/Han Mahallesi","postaKodu":"04602","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Abdiçıkmaz Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Abdiçıkmaz Köyü/Ovakent Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Abdiçıkmaz Köyü/Tepecik Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Abdiçıkmaz Köyü/Yukarı Tepecik Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Adımova Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Akyurt Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Alakoyun Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Aşağı Aladağ Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Aşağı Derebibi Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Aşağı Derebibi Köyü/Kuncık Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Aşağı Derebibi Köyü/Yukarı Derebibi Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Aşağı Gözlüce Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Aşağı Karabal Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Aşağı Yenigün Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Aşağı Yenigün Köyü/Güveç Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Aşağı Yenigün Köyü/Uzun Çeşme Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Ayvacık Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Ayvacık Köyü/Musabey Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Baldere Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Baldere Köyü/Gome Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Beklemez Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Beklemez Köyü/Kardeşler Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Buzhane Mahallesi","postaKodu":"04850","semt":"Hamur"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Çağlayan Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Ceylanlı Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Ceylanlı Köyü/Ortaköy Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Ceylanlı Köyü/Tatlisu Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Ceylanlı Köyü/Tazeköy Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Danakıran Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Demirkapı Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Ekinçik Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Ekincik Köyü/Yamaç Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Ekincik Köyü/Yukarı Ekinçik Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Erdoğan Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Erdoğan Köyü/Ömerşaban Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Esenören Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Esenören Köyü/Çeşme Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Esenören Köyü/Kayalar Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Esenören Köyü/Nenik Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Esenören Köyü/Selim Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Gültepe Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Gültepe Köyü/Aşağı Göze Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Gültepe Köyü/Yoğurtçu Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Gültepe Köyü/Yukarı Göze Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Gültepe Köyü/Yukarı Kaya Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Gümüşkuşak Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Gümüşkuşak Köyü/Boztepe Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Kaçmaz Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Kale Mahallesi","postaKodu":"04850","semt":"Hamur"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Kamışlı Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Kandildağı Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Karadoğu Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Karakazan Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Karakazan Köyü/Akören Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Karakazan Köyü/Bozo Çayırı Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Karakazan Köyü/Danacık Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Karakazan Köyü/Şehit Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Karakazan Köyü/Yazılı Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Karaseyitali Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Karlıca Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Kaynaklı Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Kılıç Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Kılıç Köyü/Aliaga Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Köşk Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Kümbet Mahallesi","postaKodu":"04850","semt":"Hamur"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Nallıkonak Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Nallıkonak Köyü/Güllüce Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Özdirek Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Özdirek Köyü/Altın Yurt Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Özdirek Köyü/Oluklu Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Özdirek Köyü/Örenli Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Saribuğday Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Seslidogan Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Seyithanbey Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Seyithanbey Köyü/Mezra Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Soğanlıtepe Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Süleymankümbet Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Süleymankümbet Köyü/Aş Koyuncu Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Süleymankümbet Köyü/Aşağı Yurt Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Süleymankümbet Köyü/Hanık Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Süleymankümbet Köyü/Karadere Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Süleymankümbet Köyü/Üç Evler Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Süleymankümbet Köyü/Yk Kuyuncu Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Süleymankümbet Köyü/Yk Yurt Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Tükenmez Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Uğurtaş Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yapılı Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yeni Mahallesi","postaKodu":"04850","semt":"Hamur"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yoğunhisar Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yukarialadağ Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yukarialadağ Köyü/Uzun Çeşme Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yukarıgözlüce Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yukarıgözlüce Köyü/Aşağı Kayalar Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yukarıyeni Gün Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yukarıyeni Gün Köyü/Tutak Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yukarıyeni Gün Köyü/Yeşil Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yuvacık Köyü","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yuvacık Köyü/Aşağı Mollahan Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yuvacık Köyü/Aydınlar Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yuvacık Köyü/Bekçiler Mezrası Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yuvacık Köyü/Keleşkom Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yuvacık Köyü/Orta Mollahan Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yuvacık Köyü/Şikeft Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yuvacık Köyü/Toklu Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Hamur","mahalle":"Yuvacık Köyü/Yk Mollahan Mahallesi","postaKodu":"04852","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"14 Nisan Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Abdulvehap Küfrevi Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ahmed-i Hani Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Akçaören Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Akçaören Köyü/Gelebızın Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Akdilek Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Akdilek Köyü/Bahçeli Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Akdilek Köyü/Güldüz Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Akdilek Köyü/Şekerova Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Aktepe Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Aktepe Köyü/Maltepe Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Akyemiş Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Akyemiş Köyü/Dermo Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Alatay Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Alatay Köyü/Kale Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Alpaslan Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Andaçlı Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Armutlu Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Armutlu Köyü/Yeşilce Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Aşağıgöçmez Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Aşağıkamışlı Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Atatürk Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Badişan Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Bağbaşı Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Baltacık Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Baltacık Köyü/Gül Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Baştarla Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Baştarla Köyü/Dambat Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Baştarla Köyü/Şeytanova Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Bozoğlak Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Bozoğlak Köyü/Arpacık Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Bozoğlak Köyü/Batıbeyli Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Bozoğlak Köyü/Çavuş Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Bozoğlak Köyü/Fatih Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Bozoğlak Köyü/Yeşilçimen Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Bozoğlak Köyü/Yk. Hirbe Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Bozoğlak Köyü/Zübeyt Komu Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Budak Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çakırbey Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çakırbey Köyü/Şırık Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çakırbey Köyü/Tapu Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Cami Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çamurlu Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çaputlu Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çaputlu Köyü/Yk. Dumanlı Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çatmaoluk Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çavuşköy Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çavuşköy Köyü/Yusuf Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çay Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çiçek Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çimenli Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çukurbağ Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Çukurbağ Köyü/Keleşler Mezrası Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Cumhuriyet Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dağalan Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dedeli Beldesi/Akbulut Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dedeli Beldesi/Budak Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dedeli Beldesi/Çaybaşı Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dedeli Beldesi/Cumhuriyet Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dedeli Beldesi/Değirmen Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dedeli Beldesi/Merkez Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dedeli Beldesi/Üzümlü Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dedeli Beldesi/Yeşilova Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Değirmendüzü Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Değirmendüzü Köyü/Kızılağıl Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Demirören Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Derecik Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Derecik Köyü/Zali Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Dizginkale Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Doğansu Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Düzceli Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Edremit Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Edremit Köyü/Dinçer Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ergeçli Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ergeçli Köyü/Çubuklu Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ergeçli Köyü/Esentepe Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ergeçli Köyü/Mecnungölü Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ergeçli Köyü/Yılanlı Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ergeçli Köyü/Zorava Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Eryılmaz Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Esenbel Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Eskikonak Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Gençali Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Gençali Köyü/Canik Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Gökçeali Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Gökçeali Köyü/Göl Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Gökçeali Köyü/Hazne Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Gökoğlu Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Gönlüaçık Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Gönlüaçık Köyü/Karabulak Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Güllüce Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Günbeli Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Gündüz Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Güvercinli Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Hacılar Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Hacılar Köyü/Evren Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Hacılar Köyü/Gülçimen Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Hasandolu Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Hasandolu Köyü/Çiçek Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Hisar Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"İnönü Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Karatoklu Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Karbasan Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Karbasan Köyü/Balcılar Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Karbasan Köyü/Derekomu Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kaş Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kazanbey Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kazanbey Köyü/Çortali Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kazanbey Köyü/Hirbe Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Keçelbaba Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kızıltepe Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kızkapan Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Koçaklar Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Konakbeyi Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Köseler Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Köseler Köyü/Adalet Mahallesi","postaKodu":"04510","semt":"Sarisu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kucak Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kürekli Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kuruyaka Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kuruyaka Köyü/Demirkaya Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kuruyaka Köyü/Tekik Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Kuşkaya Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Meydandağı Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Mollaibrahim Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Onbaşılar Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Örendik Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ortadamla Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ortadamla Köyü/Tozbelen Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Oyacık Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Özdemir Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Pirömer Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Pirömer Köyü/Cızvız Mahallesi","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Sağrıca Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Sağrıca Köyü/Küncük Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Sanayi Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Sarıdibek Köyü","postaKodu":"04510","semt":"Sarisu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Sarisu Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Selahaddini Eyyubi Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Serhad Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Suluca Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Süphan Dağı Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Susuz Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Susuz Köyü/Tekmal Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Sütlü Pınar Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Tanyeli Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Tanyeli Köyü/Düzce Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Tanyeli Köyü/Güzeldere Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Tanyeli Köyü/Kayadibi Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Tanyeli Köyü/Mezra Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Tanyeli Köyü/Y.Salahana Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Tanyeli Köyü/Yayalar Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Taşkın Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Taşkın Köyü/Abdullah Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Taşkın Köyü/Göl Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Taşkın Köyü/Harabekent Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Tepeli Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Tepeönü Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Turgut Özal Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Üçoymak Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ürüt Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ürüt Köyü/Yağız Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Usluca Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Uzunca Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Uzungün Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Uzungün Köyü/Halife Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yalçınkaya Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yalçınkaya Köyü/Cumhuriyet (LİÇ) Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yeni Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yeşil Çimen Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yeşilhisar Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yeşilyurt Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıdamla Köyü","postaKodu":"04503","semt":"Dedeli"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıgöçmez Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıgöçmez Köyü/Dibek Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıgöçmez Köyü/İncesu Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıgöçmez Köyü/Yeniçe Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıgöçmez Köyü/Yukarımahalle Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıkamışlı Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıkülecik Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıkülecik Köyü/Dikilitaş Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıkülecik Köyü/Geçit Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıkülecik Köyü/Kanışeviti Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıkülecik Köyü/Salahane Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yukarıkülecik Köyü/Varan Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yüncüler Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yunusemre Mahallesi","postaKodu":"04500","semt":"Patnos"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yürekveren Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yürekveren Köyü/Mezra Mahallesi","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Yurtöven Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Zincirkale Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Zirekli Köyü","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Zirekli Köyü/Bozo Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Zirekli Köyü/Çevlik Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Zirekli Köyü/Hırba Gülan Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Zirekli Köyü/SatıbulaK Mahallesi","postaKodu":"04510","semt":"Sarısu"},{"il":"Ağrı","ilce":"Patnos","mahalle":"Ziyaret Köyü","postaKodu":"04502","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"15 Temmuz Şehitler Mahallesi","postaKodu":"04800","semt":"Taşlıçay"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Adnan Menderes Mahallesi","postaKodu":"04800","semt":"Taşlıçay"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Alakoçlu Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Alakoçlu Köyü/Döşeme Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Aras Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Aşağıdumanlı Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Aşağıdüzmeydan Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Aşağıiesen Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Aşağıtoklu Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Balçiçek Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Bayıraltı Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Bayramyazı Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Boyuncak Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Çöğürlü Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Çöğürlü Köyü/Çermik Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Çökelge Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Çökelge Köyü/Çökelge Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Cumhuriyet Mahallesi","postaKodu":"04800","semt":"Taşlıçay"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Dilekyazı Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Düzgören Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Geçitveren Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Gözücu Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Gözücu Köyü/Satikomu Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Gündoğdu Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Güneysöğüt Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Hürriyet Mahallesi","postaKodu":"04800","semt":"Taşlıçay"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"İkiyamaç Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Kağnılı Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Kağnılı Köyü/Kağılı Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Karagöz Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Kumlubucak Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Kumlubucak Köyü/Esen Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Kumluça Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Kumluça Köyü/Yeniköy Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Samanyolu Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Samanyolu Köyü/Gültepe Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Samanyolu Köyü/İnanlı Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Tanrıverdi Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Tanriverdi Köyü/Kürekli Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Tanriverdi Köyü/Yaylacık Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Tanyolu Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Tanyolu Köyü/Adakent Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Tanyolu Köyü/Kayalık Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Tanyolu Köyü/Yaylacık Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Taşteker Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Taşteker Köyü/Kado Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yanal Yol Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yankaya Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yardımcılar Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yassıkaya Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yeltepe Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yeltepe Köyü/Gümüşlü Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yukarıdumanlı Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yukarıdüzmeydan Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yukarıdüzmeydan Köyü/Sivrice Mahallesi","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yukarıesen Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yukarıtaşlıçay Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Taşlıçay","mahalle":"Yukarıtoklu Köyü","postaKodu":"04802","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Adakent Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Ahmetabat Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Akyele Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Alacahan Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Aşağıkarahalit Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Aşağıkargalık Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Aşağıköşkköy Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Aşağıköşkköy Köyü/Gülçimen Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Aşağıkülecik Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Aşağıözdek Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Atabindi Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Ataköy Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Azizler Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bahçe Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bahçe Köyü/Kayadibi Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Batmış Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bayındır Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bayındır Köyü/Tepebaşı Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Beydamarli Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bintosun Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bintosun Köyü/Sofukacıl Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bişi Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bolaşli Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bolaşli Köyü/Merpezer Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bozkas Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Bulutpınar Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Burnubulak Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Cami Mahallesi","postaKodu":"04700","semt":"Tutak"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Çelebaşı Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Çelebaşı Köyü/Aydın Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Çelebaşı Köyü/Gülçimen Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Çırpılı Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Çobanoğa Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Çukurkonak Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Dağlıca Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Dağlıca Köyü/Nüsret Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Daldalık Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Damlakaya Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Dayıpınarı Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Dereköy Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Dibelek Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Dikbıyık Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Dikme Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Doğangün Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Dönertaş Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Dorukdibi Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Döşkaya Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Ekincek Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Erdal Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Ergeçidi Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Esmer Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Geçimli Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Gültepe Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Güneşören Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Güneşören Köyü/Topi Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Hacıyusuf Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"İkigözüm Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"İpekkuşak Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"İpekkuşak Köyü/Yazı Başı Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"İsaabat Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Karaağaç Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Karaağaç Köyü/Edisler Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Karaağaç Köyü/Hurisam Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Karacan Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Karacan Köyü/Kuşkaya Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Karahan Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Karakuyu Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Karşıyaka Mahallesi","postaKodu":"04700","semt":"Tutak"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Kaşönü Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Kesik Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Kılıçgediği Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Mızrak Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Mollahasan Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Murat Mahallesi","postaKodu":"04700","semt":"Tutak"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Ocakbaşı Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Oğlaksuyu Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Öndül Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Öndül Köyü/Hacı Ali Komu Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Ortayamaç Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Otluca Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Ozanpınar Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Palandöken Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Palandöken Köyü/Aksu Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Pınar Mahallesi","postaKodu":"04700","semt":"Tutak"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Sarığöze Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Sarığöze Köyü/Mollahalit Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Şekerbülak Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Sincan Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Soğukpınar Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Soğukpınar Köyü/Ada Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Soğukpınar Köyü/Hürriyet Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Sorguçlu Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Suvar Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Taşbudağı Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Uzunöz Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Uzunöz Köyü/Alıhirco Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yayıkla Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yeni Mahallesi","postaKodu":"04700","semt":"Tutak"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yenikent Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yeniköy Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yukarıkara Halit Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yukarıkargalık Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yukarıkargalık Köyü/Lal Yusuf Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yukarıkargalık Köyü/Zozo Mahallesi","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yukarıköşk Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Tutak","mahalle":"Yukarıözdek Köyü","postaKodu":"04702","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"100.Yıl Mahallesi","postaKodu":"04200","semt":"Fevziçakmak"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Abide Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Ağılbaşı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Ahmetbey Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Akbulgur Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Akçay Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Alpaslan Mahallesi","postaKodu":"04200","semt":"Fevziçakmak"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Anakaya Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Arakonak Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşağıağadeve Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşağıdirmeli Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşağıkent Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşağıküpkıran Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşağıpamuktaş Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşağıpamuktaş Köyü/Mezra Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşağısaklıca Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşağısaklıca Köyü/Mamik Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşağıyöldüzü Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aşkale Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Aslangazi Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Badıllı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Bahçelievler Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Balıksu Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Balkaynak Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Ballıbostan Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Baloluk Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Başçavuş Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Başkent Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Beşbulak Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Beşiktepe Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Bezirkhane Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Bölükbaşı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Boztoprak Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Çakıroba Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Çamurlu Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Çatalipaşa Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Çayırköy Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Çobanbeyi Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Çobanbeyi Köyü/Arap Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Çukuralan Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Çukurçayır Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Cumaçay Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Cumaçay Köyü/Komik Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Cumhuriyet Mahallesi","postaKodu":"04200","semt":"Fevziçakmak"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Dedemaksut Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Doğutepe Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Doğutepe Köyü/Mezra Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Dönerdere Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Dumanlı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Eğribelen Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Eliaçık Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Esenköy Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Esenköy Köyü/Esen Köy Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Eskişarman Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Fatih Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Fevzi Çakmak Mahallesi","postaKodu":"04200","semt":"Fevziçakmak"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Fırat Mahallesi","postaKodu":"04200","semt":"Fevziçakmak"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Gazi Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Geçitalan Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Gümüşyazı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Güneysu Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Güvendik Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Güvenli Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Hacisefer Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Hanoba Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Hıdır Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Hürriyet Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kalender Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Karasu Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kavacık Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kavakköy Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kayabey Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kazım Karabekir Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kazlı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kocataş Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kocataş Köyü/Altınçayır Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Koçbaşı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Konuktepe Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kovancık Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kovancık Köyü/Aşağısubaşı Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kovancık Köyü/Ayranlı Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kovancık Köyü/Darica Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kovancık Köyü/Gölsevti Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kovancık Köyü/Pınarcık Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kovancık Köyü/Yayıklı Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kumlugeçit Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Kurtuluş Mahallesi","postaKodu":"04200","semt":"Fevziçakmak"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Leylek Pınar Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Mehmet Akif Ersoy Mahallesi","postaKodu":"04200","semt":"Fevziçakmak"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Mollaali Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Mollaosman Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Mollaosman Köyü/Konak Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Murat Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Murat Köyü/Ağrı OSB Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Murat Köyü/Üç Evler Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Murat Mahallesi","postaKodu":"04200","semt":"Fevziçakmak"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Murathan Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Oğlaklı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Oğlaklı Köyü/Çayır Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Ortakent Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Ortayokuş Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Otlubayır Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Ozanlar Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Özbaşı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Özveren Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Sabuncu Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Sağırtas Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Sarica Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Sarica Köyü/Ferhat Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Sarica Köyü/Reşo Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Saridoğan Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Sariharman Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Sariharman Köyü/Yukarı Subaşı Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Saritaş Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Sıtkıya Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Soğancumacık Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Soğanköy Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Söğütlü Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Suçatağı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Taştekne Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Taypınar Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Tellisırt Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Tezeren Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Uçarkaya Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Uzunveli Köyü/Aşağı Pınar Mahallesi","map":"<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31249.12764100706!2d43.20725055321074!3d39.596409592527266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406c98b9358ec315%3A0x5f732ad545b0ff1c!2zVXp1bnZlbGksIEHFn2HEn8SxIFDEsW5hciwgMDQwMTAgVXp1bnZlbGkvQcSfcsSxIE1lcmtlei9BxJ9yxLE!5e0!3m2!1sen!2str!4v1770842125499!5m2!1sen!2str' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Uzunveli Köyü/Yukarı Pınar Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yakınca Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yalnızkonak Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yavuz Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yaylaköy Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yazıcı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yazılı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yığıntepe Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yolluyazı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yolu Güzel Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yoncali Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Suçatağı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Taştekne Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Taypınar Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Tellisırt Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Tezeren Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Uçarkaya Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yakınca Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yalnızkonak Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yavuz Mahallesi","postaKodu":"04100","semt":"Kazımkarabekir"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yaylaköy Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yazıcı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yazılı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yığıntepe Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yolluyazı Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yolu Güzel Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yorgunsöğüt Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yukarıağadeve Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yukarıağadeve Köyü/Darboğaz Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yukarıağadeve Köyü/Gülçimen Mahallesi","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yukarıdirmeli Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yukarıküpkıran Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yukarıpamuktaş Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yukarısaklıca Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yukarıyolduzu Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Yurtpınar Köyü","postaKodu":"04010","semt":"Merkezköyler"},{"il":"Ağrı","ilce":"Merkez","mahalle":"Ziyaret Köyü","postaKodu":"04010","semt":"Merkezköyler"},

];

    return data;
}, {
    maxAge: 60 * 60, // 1 hour
    name: 'postal-data'
});
