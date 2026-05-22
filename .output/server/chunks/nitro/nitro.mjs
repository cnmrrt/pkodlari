import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    const nextChar = input[_base.length];
    if (!nextChar || nextChar === "/" || nextChar === "?") {
      return input;
    }
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const nextChar = input[_base.length];
  if (nextChar && nextChar !== "/" && nextChar !== "?") {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return Promise.resolve()}};const c=class{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=m(e._destroy,t._destroy);}};function _(){return Object.assign(c.prototype,i$1.prototype),Object.assign(c.prototype,l$1.prototype),c}function m(...n){return function(...e){for(const t of n)t(...e);}}const g=_();class A extends g{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function getRouterParams(event, opts = {}) {
  let params = event.context.params || {};
  if (opts.decode) {
    params = { ...params };
    for (const key in params) {
      params[key] = decode(params[key]);
    }
  }
  return params;
}
function getRouterParam(event, name, opts = {}) {
  const params = getRouterParams(event, opts);
  return params[name];
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(
    String(event.node.req.headers["transfer-encoding"] ?? "")
  )) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  if (value instanceof FormData || value instanceof URLSearchParams) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (contentType === "text/event-stream") {
    return "stream";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
      if (!(context.options.headers instanceof Headers)) {
        context.options.headers = new Headers(
          context.options.headers || {}
          /* compat */
        );
      }
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        const contentType = context.options.headers.get("content-type");
        if (typeof context.options.body !== "string") {
          context.options.body = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(
            context.options.body
          ).toString() : JSON.stringify(context.options.body);
        }
        if (!contentType) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch({ fetch, Headers: Headers$1, AbortController });
const $fetch = ofetch;

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "6269d2bb-5d4e-4697-8d5a-c17c8e538113",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message
	errorObject.message ||= "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await import('../_/error-500.mjs');
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const plugins = [
  
];

const assets = {
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": "\"154-CRjyR7XoM3/JSv6TzF4KxKSiptc\"",
    "mtime": "2026-05-22T20:25:59.168Z",
    "size": 340,
    "path": "../public/favicon.svg"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"49-jo9AdbxV7TO8yCoPM+5Rg45QrJ4\"",
    "mtime": "2026-05-22T20:25:59.168Z",
    "size": 73,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"4e82d-VWnMb1MmK9DMcHd6OEH8YdL/kO8\"",
    "mtime": "2026-05-22T20:25:59.177Z",
    "size": 321581,
    "path": "../public/sitemap.xml"
  },
  "/data/aksaray.json": {
    "type": "application/json",
    "etag": "\"bb3d-PEZvUEdD0/l84iKoXU/BcSMU5xg\"",
    "mtime": "2026-05-22T20:25:59.140Z",
    "size": 47933,
    "path": "../public/data/aksaray.json"
  },
  "/data/amasya.json": {
    "type": "application/json",
    "etag": "\"13b92-wX5SsZSgA3PQf5XfKUdugG81ksg\"",
    "mtime": "2026-05-22T20:25:59.141Z",
    "size": 80786,
    "path": "../public/data/amasya.json"
  },
  "/data/ardahan.json": {
    "type": "application/json",
    "etag": "\"9648-s0VYGsFkxMqZ6W9M8niNqfovJjU\"",
    "mtime": "2026-05-22T20:25:59.141Z",
    "size": 38472,
    "path": "../public/data/ardahan.json"
  },
  "/data/agri.json": {
    "type": "application/json",
    "etag": "\"1afa8-6YLDYGEQaL5/kn0IMpJEriQxG1o\"",
    "mtime": "2026-05-22T20:25:59.141Z",
    "size": 110504,
    "path": "../public/data/agri.json"
  },
  "/data/adiyaman.json": {
    "type": "application/json",
    "etag": "\"20fe7-F/MUQtBveVU+kumKCVK5qjAcB6Y\"",
    "mtime": "2026-05-22T20:25:59.142Z",
    "size": 135143,
    "path": "../public/data/adiyaman.json"
  },
  "/data/bartin.json": {
    "type": "application/json",
    "etag": "\"1efff-4tvILGYKo1rHDVdgi7ws7Vj5lkc\"",
    "mtime": "2026-05-22T20:25:59.144Z",
    "size": 126975,
    "path": "../public/data/bartin.json"
  },
  "/data/bilecik.json": {
    "type": "application/json",
    "etag": "\"9f86-JWufqehvcrXEq88JjvfSMd0s6A8\"",
    "mtime": "2026-05-22T20:25:59.145Z",
    "size": 40838,
    "path": "../public/data/bilecik.json"
  },
  "/data/bayburt.json": {
    "type": "application/json",
    "etag": "\"67f6-RCTxpvNQUNiDzKn+EE7NqCl6DcU\"",
    "mtime": "2026-05-22T20:25:59.144Z",
    "size": 26614,
    "path": "../public/data/bayburt.json"
  },
  "/data/burdur.json": {
    "type": "application/json",
    "etag": "\"bc00-7IncBHpsKWwr/kAuq22XOpbcDYY\"",
    "mtime": "2026-05-22T20:25:59.146Z",
    "size": 48128,
    "path": "../public/data/burdur.json"
  },
  "/data/bitlis.json": {
    "type": "application/json",
    "etag": "\"147ea-UxFWfggp1x5OuW0j/imShTzZlls\"",
    "mtime": "2026-05-22T20:25:59.147Z",
    "size": 83946,
    "path": "../public/data/bitlis.json"
  },
  "/data/batman.json": {
    "type": "application/json",
    "etag": "\"147d7-Vfyx8KneIzaxWxn3ccQq64DyUYE\"",
    "mtime": "2026-05-22T20:25:59.144Z",
    "size": 83927,
    "path": "../public/data/batman.json"
  },
  "/data/cankiri.json": {
    "type": "application/json",
    "etag": "\"121d2-9sl+7QwlzXddgpaMiW8RPV2DbSE\"",
    "mtime": "2026-05-22T20:25:59.148Z",
    "size": 74194,
    "path": "../public/data/cankiri.json"
  },
  "/data/artvin.json": {
    "type": "application/json",
    "etag": "\"380fc-ZfsCvCNRnHgw1qgbmTq4mHlHH1M\"",
    "mtime": "2026-05-22T20:25:59.145Z",
    "size": 229628,
    "path": "../public/data/artvin.json"
  },
  "/data/denizli.json": {
    "type": "application/json",
    "etag": "\"f9c1-6Oh2y940/C7WRDBs3JKVcm6R4fU\"",
    "mtime": "2026-05-22T20:25:59.148Z",
    "size": 63937,
    "path": "../public/data/denizli.json"
  },
  "/data/edirne.json": {
    "type": "application/json",
    "etag": "\"9b25-qr8AeR2w3sp1BDYXIA6VgT5D8Q0\"",
    "mtime": "2026-05-22T20:25:59.149Z",
    "size": 39717,
    "path": "../public/data/edirne.json"
  },
  "/data/diyarbakir.json": {
    "type": "application/json",
    "etag": "\"1b7ab-TRarjFrJjb0p/rcQmzMjZWbyOAE\"",
    "mtime": "2026-05-22T20:25:59.149Z",
    "size": 112555,
    "path": "../public/data/diyarbakir.json"
  },
  "/data/bolu.json": {
    "type": "application/json",
    "etag": "\"31429-tHxaaGeC87U+2k16/WEU7tr3jio\"",
    "mtime": "2026-05-22T20:25:59.149Z",
    "size": 201769,
    "path": "../public/data/bolu.json"
  },
  "/data/aydin.json": {
    "type": "application/json",
    "etag": "\"108d7-L9BV8grm4YIs1WTZyprIAahjvnk\"",
    "mtime": "2026-05-22T20:25:59.143Z",
    "size": 67799,
    "path": "../public/data/aydin.json"
  },
  "/data/elazig.json": {
    "type": "application/json",
    "etag": "\"2ec78-F4cBcOoIPF4paf4n0sjr3B6lDhs\"",
    "mtime": "2026-05-22T20:25:59.153Z",
    "size": 191608,
    "path": "../public/data/elazig.json"
  },
  "/pk.json": {
    "type": "application/json",
    "etag": "\"1edadd-6HAcjtV5P0xQOZMLCPgdnt1YQTQ\"",
    "mtime": "2026-05-22T20:25:59.213Z",
    "size": 2022109,
    "path": "../public/pk.json"
  },
  "/data/gaziantep.json": {
    "type": "application/json",
    "etag": "\"1397e-WueF1VnYlDcCfU/6DSaW0Eqz4FU\"",
    "mtime": "2026-05-22T20:25:59.152Z",
    "size": 80254,
    "path": "../public/data/gaziantep.json"
  },
  "/data/gumushane.json": {
    "type": "application/json",
    "etag": "\"16111-6Mau5zPhPHGrRCR8S225MDyhgRM\"",
    "mtime": "2026-05-22T20:25:59.154Z",
    "size": 90385,
    "path": "../public/data/gumushane.json"
  },
  "/data/eskisehir.json": {
    "type": "application/json",
    "etag": "\"eb02-o99Bc1sDqJ0UBm0sgTdGQ/78hd0\"",
    "mtime": "2026-05-22T20:25:59.151Z",
    "size": 60162,
    "path": "../public/data/eskisehir.json"
  },
  "/data/istanbul.json": {
    "type": "application/json",
    "etag": "\"1b254-vhxtNXRQkbA5vi9KVRPQTOuDqBk\"",
    "mtime": "2026-05-22T20:25:59.156Z",
    "size": 111188,
    "path": "../public/data/istanbul.json"
  },
  "/data/isparta.json": {
    "type": "application/json",
    "etag": "\"102bd-FP3pw4eUtd6v7dH+vcpcFTRssIQ\"",
    "mtime": "2026-05-22T20:25:59.154Z",
    "size": 66237,
    "path": "../public/data/isparta.json"
  },
  "/data/giresun.json": {
    "type": "application/json",
    "etag": "\"51b0d-0f/Fygf148DXejOQT1sDiNnXU0o\"",
    "mtime": "2026-05-22T20:25:59.158Z",
    "size": 334605,
    "path": "../public/data/giresun.json"
  },
  "/data/kars.json": {
    "type": "application/json",
    "etag": "\"d919-CZaK3FGteLYD6kE3wf5UjK7naRM\"",
    "mtime": "2026-05-22T20:25:59.157Z",
    "size": 55577,
    "path": "../public/data/kars.json"
  },
  "/data/karaman.json": {
    "type": "application/json",
    "etag": "\"bf1e-L4Je4tDieXq8cGRX8J8l6BkNG34\"",
    "mtime": "2026-05-22T20:25:59.155Z",
    "size": 48926,
    "path": "../public/data/karaman.json"
  },
  "/data/kayseri.json": {
    "type": "application/json",
    "etag": "\"13090-22YEwWlzRF4pCDlQbFlfmVl7dmY\"",
    "mtime": "2026-05-22T20:25:59.158Z",
    "size": 77968,
    "path": "../public/data/kayseri.json"
  },
  "/data/kirklareli.json": {
    "type": "application/json",
    "etag": "\"8653-Y3DGLfT27/A3GjSPt73C6YrBlMA\"",
    "mtime": "2026-05-22T20:25:59.159Z",
    "size": 34387,
    "path": "../public/data/kirklareli.json"
  },
  "/data/kirikkale.json": {
    "type": "application/json",
    "etag": "\"9e1f-WyslnAV4+l0a50MRTky39a5uXVA\"",
    "mtime": "2026-05-22T20:25:59.158Z",
    "size": 40479,
    "path": "../public/data/kirikkale.json"
  },
  "/data/kirsehir.json": {
    "type": "application/json",
    "etag": "\"c280-677IFyg5bsPCqy+QGr95VwFj1W8\"",
    "mtime": "2026-05-22T20:25:59.158Z",
    "size": 49792,
    "path": "../public/data/kirsehir.json"
  },
  "/data/izmir.json": {
    "type": "application/json",
    "etag": "\"2124d-rdqi8raiZ3TOsKKbz87Jr63ReQI\"",
    "mtime": "2026-05-22T20:25:59.157Z",
    "size": 135757,
    "path": "../public/data/izmir.json"
  },
  "/data/konya.json": {
    "type": "application/json",
    "etag": "\"fc89-ijSZjJYhaFd1aE3gPIsAZ2nijuA\"",
    "mtime": "2026-05-22T20:25:59.160Z",
    "size": 64649,
    "path": "../public/data/konya.json"
  },
  "/data/kocaeli.json": {
    "type": "application/json",
    "etag": "\"cfcb-6ofbz+JVwhz8a0KGzS6Qvyf0ETE\"",
    "mtime": "2026-05-22T20:25:59.160Z",
    "size": 53195,
    "path": "../public/data/kocaeli.json"
  },
  "/data/mardin.json": {
    "type": "application/json",
    "etag": "\"11f9f-vgU3RpuhcwZu7p4kZ8hItt0au7g\"",
    "mtime": "2026-05-22T20:25:59.161Z",
    "size": 73631,
    "path": "../public/data/mardin.json"
  },
  "/data/malatya.json": {
    "type": "application/json",
    "etag": "\"12b8c-3waoZu8tUs7R23zTOBuJbKGakNs\"",
    "mtime": "2026-05-22T20:25:59.160Z",
    "size": 76684,
    "path": "../public/data/malatya.json"
  },
  "/data/mugla.json": {
    "type": "application/json",
    "etag": "\"e470-6wD3qiEF09qO1o55ERRuKsw9G60\"",
    "mtime": "2026-05-22T20:25:59.162Z",
    "size": 58480,
    "path": "../public/data/mugla.json"
  },
  "/data/nevsehir.json": {
    "type": "application/json",
    "etag": "\"b153-RoZUf+mhel8ktqRX2WhQOAh/F9c\"",
    "mtime": "2026-05-22T20:25:59.162Z",
    "size": 45395,
    "path": "../public/data/nevsehir.json"
  },
  "/data/mus.json": {
    "type": "application/json",
    "etag": "\"12913-xBiLC1LMnH7DWKF8DXhk7OHkyaE\"",
    "mtime": "2026-05-22T20:25:59.162Z",
    "size": 76051,
    "path": "../public/data/mus.json"
  },
  "/data/mersin.json": {
    "type": "application/json",
    "etag": "\"149f4-crSOlTkfwlyUtCH7A8/sBtWD0dI\"",
    "mtime": "2026-05-22T20:25:59.161Z",
    "size": 84468,
    "path": "../public/data/mersin.json"
  },
  "/data/nigde.json": {
    "type": "application/json",
    "etag": "\"a09a-RBsleA7Md9MNTJacQE/t3QkZuG8\"",
    "mtime": "2026-05-22T20:25:59.162Z",
    "size": 41114,
    "path": "../public/data/nigde.json"
  },
  "/data/ordu.json": {
    "type": "application/json",
    "etag": "\"1303c-4VLxsf3T4TzfIo1JNS38O1p+pNk\"",
    "mtime": "2026-05-22T20:25:59.164Z",
    "size": 77884,
    "path": "../public/data/ordu.json"
  },
  "/data/sakarya.json": {
    "type": "application/json",
    "etag": "\"113e4-M/oli/5FBPH8j7FKQzNgcNN73+I\"",
    "mtime": "2026-05-22T20:25:59.164Z",
    "size": 70628,
    "path": "../public/data/sakarya.json"
  },
  "/data/siirt.json": {
    "type": "application/json",
    "etag": "\"df36-72qPj1PA92jE6LwG24bj3RlYPSc\"",
    "mtime": "2026-05-22T20:25:59.164Z",
    "size": 57142,
    "path": "../public/data/siirt.json"
  },
  "/data/samsun.json": {
    "type": "application/json",
    "etag": "\"279a0-Nyn7w5hOEXhzks11Mt+3Z2IrN6Y\"",
    "mtime": "2026-05-22T20:25:59.166Z",
    "size": 162208,
    "path": "../public/data/samsun.json"
  },
  "/data/sirnak.json": {
    "type": "application/json",
    "etag": "\"9f39-0NsGz549rLAwuSwVrWh29FZ0QLc\"",
    "mtime": "2026-05-22T20:25:59.165Z",
    "size": 40761,
    "path": "../public/data/sirnak.json"
  },
  "/data/tekirdag.json": {
    "type": "application/json",
    "etag": "\"af1a-5GVZvDGm3K/uy4UZbnOwpBvwlxI\"",
    "mtime": "2026-05-22T20:25:59.165Z",
    "size": 44826,
    "path": "../public/data/tekirdag.json"
  },
  "/data/tokat.json": {
    "type": "application/json",
    "etag": "\"174cf-xPf5CANIFpAhP22tRbnxV6UpkNY\"",
    "mtime": "2026-05-22T20:25:59.166Z",
    "size": 95439,
    "path": "../public/data/tokat.json"
  },
  "/data/trabzon.json": {
    "type": "application/json",
    "etag": "\"124f7-s+fXKUbpuEqmyQdi3Z5hI/ot8qI\"",
    "mtime": "2026-05-22T20:25:59.166Z",
    "size": 74999,
    "path": "../public/data/trabzon.json"
  },
  "/data/usak.json": {
    "type": "application/json",
    "etag": "\"13c41-jcwvQLTpmBYLwcIIgNgyajdG6j0\"",
    "mtime": "2026-05-22T20:25:59.167Z",
    "size": 80961,
    "path": "../public/data/usak.json"
  },
  "/data/van.json": {
    "type": "application/json",
    "etag": "\"11235-0WjdxSylvtc2S0MiRyF3WYPFo4Y\"",
    "mtime": "2026-05-22T20:25:59.167Z",
    "size": 70197,
    "path": "../public/data/van.json"
  },
  "/_nuxt/0vNoVHNd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"77-MWjlnkX8NVUp0+3UIzg4zzpMjcg\"",
    "mtime": "2026-05-22T20:25:59.114Z",
    "size": 119,
    "path": "../public/_nuxt/0vNoVHNd.js"
  },
  "/_nuxt/1MEbYFmr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-pVyEF/L+WiBEca6i2YJ8JO0MqCE\"",
    "mtime": "2026-05-22T20:25:59.114Z",
    "size": 3964,
    "path": "../public/_nuxt/1MEbYFmr.js"
  },
  "/data/yozgat.json": {
    "type": "application/json",
    "etag": "\"16cd3-M9cyhtpv6XSkjvGPFNs2MO4k1xA\"",
    "mtime": "2026-05-22T20:25:59.168Z",
    "size": 93395,
    "path": "../public/data/yozgat.json"
  },
  "/_nuxt/0VLmjPYt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ee1-/S+jyS2QyIU+uiUJ49LaamIddCM\"",
    "mtime": "2026-05-22T20:25:59.114Z",
    "size": 7905,
    "path": "../public/_nuxt/0VLmjPYt.js"
  },
  "/_nuxt/1bri2pqu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1efe-0U9k8N7KdHwK+JDv6ICknj2eJaQ\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 7934,
    "path": "../public/_nuxt/1bri2pqu.js"
  },
  "/_nuxt/2VaphDpG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c5-vpz7kATai6xogl2HpbepHVOgdR0\"",
    "mtime": "2026-05-22T20:25:59.114Z",
    "size": 2245,
    "path": "../public/_nuxt/2VaphDpG.js"
  },
  "/_nuxt/42Ex0G99.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c9-8+oUqfq0yQ0crjugAMVJ24aQ+MQ\"",
    "mtime": "2026-05-22T20:25:59.114Z",
    "size": 2249,
    "path": "../public/_nuxt/42Ex0G99.js"
  },
  "/_nuxt/49FPDLld.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f5b-RRkjv/5AtAF2tC6PTNvl7AUo6KU\"",
    "mtime": "2026-05-22T20:25:59.114Z",
    "size": 3931,
    "path": "../public/_nuxt/49FPDLld.js"
  },
  "/_nuxt/5rzBLv-j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f6c-7piYI+9EdtRLvmAezJ661wpTAIQ\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 3948,
    "path": "../public/_nuxt/5rzBLv-j.js"
  },
  "/_nuxt/84fvONmj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f4c-ca0jMSNM/A2G0+DpiFrWCFZLK5g\"",
    "mtime": "2026-05-22T20:25:59.114Z",
    "size": 3916,
    "path": "../public/_nuxt/84fvONmj.js"
  },
  "/_nuxt/B-JxeioU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20c3-QVVXJFGtS2cOKCGD99+onyGljaI\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 8387,
    "path": "../public/_nuxt/B-JxeioU.js"
  },
  "/_nuxt/2mWUkJic.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f75-X4nJ6Hw47fm0RJuqZcTks7vMZug\"",
    "mtime": "2026-05-22T20:25:59.114Z",
    "size": 3957,
    "path": "../public/_nuxt/2mWUkJic.js"
  },
  "/data/zonguldak.json": {
    "type": "application/json",
    "etag": "\"2ef2f-H1lruvAsyK8o4TBS4mRn/tV2jCQ\"",
    "mtime": "2026-05-22T20:25:59.170Z",
    "size": 192303,
    "path": "../public/data/zonguldak.json"
  },
  "/sitemap1.xml": {
    "type": "application/xml",
    "etag": "\"55f335-9q5aNfuotv46aWICOrd5kri3/L4\"",
    "mtime": "2026-05-22T20:25:59.274Z",
    "size": 5632821,
    "path": "../public/sitemap1.xml"
  },
  "/sitemap2.xml": {
    "type": "application/xml",
    "etag": "\"513ed4-lR7Fi4rbnDwNH4O3lMVB9shh+wI\"",
    "mtime": "2026-05-22T20:25:59.268Z",
    "size": 5324500,
    "path": "../public/sitemap2.xml"
  },
  "/_nuxt/B099RBT1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c9-3AcGjf/m5Z8WJDMMhXLBntz0xsU\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 2249,
    "path": "../public/_nuxt/B099RBT1.js"
  },
  "/_nuxt/B2-RqIgx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"267-3XqfAYbflzhcDj4RqbmkWy84F7c\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 615,
    "path": "../public/_nuxt/B2-RqIgx.js"
  },
  "/_nuxt/B22OUkZN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20a6-R5LoHbp1Q1NYJs+EHSOuuwCWgzE\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 8358,
    "path": "../public/_nuxt/B22OUkZN.js"
  },
  "/_nuxt/B4ASGvHu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"90d-jHjoA25spCOd0ZgpsKOViJMgFTc\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 2317,
    "path": "../public/_nuxt/B4ASGvHu.js"
  },
  "/_nuxt/B51J6ZKM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-6CNINONz0cwzHuWn0jt8dqa53hQ\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 3964,
    "path": "../public/_nuxt/B51J6ZKM.js"
  },
  "/_nuxt/B69rcQls.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-g1K+dQwhnbqVtciL0PTmxae2tFs\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 2253,
    "path": "../public/_nuxt/B69rcQls.js"
  },
  "/_nuxt/B7DONgve.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"208a-lg/Ar41l4D3R/8tUXl8IbWbqdiA\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 8330,
    "path": "../public/_nuxt/B7DONgve.js"
  },
  "/_nuxt/B79a9MND.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20c3-r4VPyjm4T7meQVWG+5ML7bgDWuo\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 8387,
    "path": "../public/_nuxt/B79a9MND.js"
  },
  "/_nuxt/B9NbxTeb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f19-nDiCboKofPg/CehT0kyeJMWKnNI\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 7961,
    "path": "../public/_nuxt/B9NbxTeb.js"
  },
  "/_nuxt/B9uUFS9t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fc9-DDHuRbcm/i0QHi1HmRt7NfwZInQ\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 4041,
    "path": "../public/_nuxt/B9uUFS9t.js"
  },
  "/_nuxt/B8YGiZXu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e5-HmS7FmHD49MNcXQ/7dFfzErNQS0\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 2277,
    "path": "../public/_nuxt/B8YGiZXu.js"
  },
  "/_nuxt/BAb-qiIM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e9-D/2vXPeFnA0jzFoeIayzFnTlTm4\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 2281,
    "path": "../public/_nuxt/BAb-qiIM.js"
  },
  "/_nuxt/BB55Mymg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f96-wmDdMAZqGFILvDUgN7d0lc4Khdg\"",
    "mtime": "2026-05-22T20:25:59.115Z",
    "size": 3990,
    "path": "../public/_nuxt/BB55Mymg.js"
  },
  "/_nuxt/BDd_L1q7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8bd-ugG1R2k7mySAHy/rTv50Jcu/xBs\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 2237,
    "path": "../public/_nuxt/BDd_L1q7.js"
  },
  "/_nuxt/BFcFOmd7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2012-U/zuSlL+WYmdD8GtEwGlZAgrSR8\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 8210,
    "path": "../public/_nuxt/BFcFOmd7.js"
  },
  "/_nuxt/BGL1cv8N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f5b-szhzDAqZK31PyE59siCW7Jh55tk\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 3931,
    "path": "../public/_nuxt/BGL1cv8N.js"
  },
  "/_nuxt/BH6ML3wg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2042-2fzghTv7EUO9u9Y3IEi2zk3oVdE\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 8258,
    "path": "../public/_nuxt/BH6ML3wg.js"
  },
  "/_nuxt/BHGZroO6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c9-iyH76aQgoJ626eRfP0AkZC3VVrY\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 2249,
    "path": "../public/_nuxt/BHGZroO6.js"
  },
  "/_nuxt/BJ6evVuv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2026-HI74u+ZlgQVpFJR9+9sO70sTdrs\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 8230,
    "path": "../public/_nuxt/BJ6evVuv.js"
  },
  "/_nuxt/BLdktx7b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20c3-1cN20oi457yJiZMGQrYycnaSoLo\"",
    "mtime": "2026-05-22T20:25:59.116Z",
    "size": 8387,
    "path": "../public/_nuxt/BLdktx7b.js"
  },
  "/_nuxt/BNYgNeZR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64e8-JSk+e833QdeZ7QO2pGFhfjxPDz0\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 25832,
    "path": "../public/_nuxt/BNYgNeZR.js"
  },
  "/_nuxt/BQRzVD4y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-XhvRS84EDp28LW8/SrIEQa0OMc8\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 3964,
    "path": "../public/_nuxt/BQRzVD4y.js"
  },
  "/_nuxt/BQrrOVQE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f1b-M2mGy7QX5tCu8X/udSUw423/yKA\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 7963,
    "path": "../public/_nuxt/BQrrOVQE.js"
  },
  "/_nuxt/BQy6YwTD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-K7A27TCqmAVLb/z4W6BhLmrHC4I\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 2261,
    "path": "../public/_nuxt/BQy6YwTD.js"
  },
  "/_nuxt/BQxIYP_f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10bd-xI3oe9i/lTigV8nJpVxuC608ZPs\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 4285,
    "path": "../public/_nuxt/BQxIYP_f.js"
  },
  "/_nuxt/BQz90Fos.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f5b-HSMjzoNid5skOszBF5G8ansiXM8\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 3931,
    "path": "../public/_nuxt/BQz90Fos.js"
  },
  "/_nuxt/BRYKPg1e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f6a-b28q6Ut2HBRziNLe2TIRQcNHMKI\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 3946,
    "path": "../public/_nuxt/BRYKPg1e.js"
  },
  "/_nuxt/BSRJ3QIt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f9f-TP6Oiu2D/zHxcwDid4P10uoCnyo\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 8095,
    "path": "../public/_nuxt/BSRJ3QIt.js"
  },
  "/_nuxt/BSDC30Aq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f6a-pa91GeT1DLCUeAP81jQMK+LX/jc\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 3946,
    "path": "../public/_nuxt/BSDC30Aq.js"
  },
  "/_nuxt/BSfOYAF9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"201b-OSclgktf8cK8oU5ef2EHKvDHsgk\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 8219,
    "path": "../public/_nuxt/BSfOYAF9.js"
  },
  "/_nuxt/BVWITc2G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f92-z2+gA/NqIcYPMeypwvxDuC+86cA\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 3986,
    "path": "../public/_nuxt/BVWITc2G.js"
  },
  "/_nuxt/BW1gBWt1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c5-2X2Xv3Bz4uI2bXPWLYG2DrZrTkQ\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 2245,
    "path": "../public/_nuxt/BW1gBWt1.js"
  },
  "/_nuxt/BXQjAuSJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2054-xqRrTQd8NzincYjLIRTOyclKwZM\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 8276,
    "path": "../public/_nuxt/BXQjAuSJ.js"
  },
  "/_nuxt/BaEOfaQP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f71-Ml4IfU3bSq7WHJ4kGpOhSpYcNRI\"",
    "mtime": "2026-05-22T20:25:59.117Z",
    "size": 3953,
    "path": "../public/_nuxt/BaEOfaQP.js"
  },
  "/_nuxt/BVpP9a3W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fcf-IKFz+fIOR8j2jek2SLzTu84SzWQ\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 8143,
    "path": "../public/_nuxt/BVpP9a3W.js"
  },
  "/_nuxt/BbUR8jWW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-mbTs/qqjcE3knR1E2htTTvgTC7Q\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 2261,
    "path": "../public/_nuxt/BbUR8jWW.js"
  },
  "/_nuxt/BdJYdaEP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b5-ZYLVj8Y2yT8o1wQlsVc17IJdKfE\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 2229,
    "path": "../public/_nuxt/BdJYdaEP.js"
  },
  "/_nuxt/Babnk0LZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f87-2ehQDnw0WMx41G/pvE6mx+8zRbc\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 3975,
    "path": "../public/_nuxt/Babnk0LZ.js"
  },
  "/_nuxt/Bea6AEBa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f66-QrtX1PasadVap0hzqserlCDByPE\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 3942,
    "path": "../public/_nuxt/Bea6AEBa.js"
  },
  "/_nuxt/BfkQYICH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f71-bpepq/FKfUBxc08jzejqTHHzKBs\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 3953,
    "path": "../public/_nuxt/BfkQYICH.js"
  },
  "/_nuxt/Bfbbop5W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8ed-Ww+sLEjbvgA4eFnt9Yqg1eVfiH4\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 2285,
    "path": "../public/_nuxt/Bfbbop5W.js"
  },
  "/_nuxt/Bk_d7hyT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-2y2SWETq63yzovdOwarkeuPPmZU\"",
    "mtime": "2026-05-22T20:25:59.119Z",
    "size": 2261,
    "path": "../public/_nuxt/Bk_d7hyT.js"
  },
  "/_nuxt/Bl1og7Yz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fe2-wmpkqMqNq0BE4jsyoPSjoCNNAbI\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 8162,
    "path": "../public/_nuxt/Bl1og7Yz.js"
  },
  "/_nuxt/BgdzozPs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-uQ1HhcL51u2aBw5908LNbc/5DP0\"",
    "mtime": "2026-05-22T20:25:59.118Z",
    "size": 2261,
    "path": "../public/_nuxt/BgdzozPs.js"
  },
  "/_nuxt/BlIdkl72.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2008-7nrv3k6oAe9XCX8JyY0JWTb/pPA\"",
    "mtime": "2026-05-22T20:25:59.119Z",
    "size": 8200,
    "path": "../public/_nuxt/BlIdkl72.js"
  },
  "/_nuxt/BlhQYcH4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f71-v2uxVoVMOA7Exqha5GupU0AZjHA\"",
    "mtime": "2026-05-22T20:25:59.119Z",
    "size": 3953,
    "path": "../public/_nuxt/BlhQYcH4.js"
  },
  "/_nuxt/Blz8d07F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"200b-Pi/5AqZDmGkrRmX9eW8rDTH2AuU\"",
    "mtime": "2026-05-22T20:25:59.119Z",
    "size": 8203,
    "path": "../public/_nuxt/Blz8d07F.js"
  },
  "/_nuxt/BlNpblCX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f88-ss/HQSj4bmlwO3aPwjL2sqD7ww8\"",
    "mtime": "2026-05-22T20:25:59.119Z",
    "size": 3976,
    "path": "../public/_nuxt/BlNpblCX.js"
  },
  "/_nuxt/BvKvbYiO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2010-8FUwVBnJ6ZO4LymDckJfOyLZ67c\"",
    "mtime": "2026-05-22T20:25:59.119Z",
    "size": 8208,
    "path": "../public/_nuxt/BvKvbYiO.js"
  },
  "/_nuxt/BoFtfgdi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f6c-zf2VzixHGnVS4ZW383j3HbIqv80\"",
    "mtime": "2026-05-22T20:25:59.120Z",
    "size": 3948,
    "path": "../public/_nuxt/BoFtfgdi.js"
  },
  "/_nuxt/Bvr4YqHl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8f1-7BxyfQVX7gvYFEFnCPBo2zqQcFY\"",
    "mtime": "2026-05-22T20:25:59.119Z",
    "size": 2289,
    "path": "../public/_nuxt/Bvr4YqHl.js"
  },
  "/_nuxt/ByaZFtB_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f5b-hRfZi+O0dRpT463/3R84snjWu70\"",
    "mtime": "2026-05-22T20:25:59.119Z",
    "size": 3931,
    "path": "../public/_nuxt/ByaZFtB_.js"
  },
  "/_nuxt/ByzkcM_n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fe6-XDNtNeSDZWKqAslxcjGGcv04KV4\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 8166,
    "path": "../public/_nuxt/ByzkcM_n.js"
  },
  "/_nuxt/BzpKiRyb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"201b-uVx770aMx/dv1ev7UMcueSSDiiI\"",
    "mtime": "2026-05-22T20:25:59.120Z",
    "size": 8219,
    "path": "../public/_nuxt/BzpKiRyb.js"
  },
  "/_nuxt/C-CGq8yA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-SfLy/Ryi+9HYoXp6OJI/eP3tJz0\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 2261,
    "path": "../public/_nuxt/C-CGq8yA.js"
  },
  "/_nuxt/C-eTPrtO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f6a-ZnowyXcFRT7SkfBWpMUioHFkT3o\"",
    "mtime": "2026-05-22T20:25:59.120Z",
    "size": 3946,
    "path": "../public/_nuxt/C-eTPrtO.js"
  },
  "/_nuxt/C1zahdiA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2076-FsTU14+4gdsxffOq/QNUB+JMJik\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 8310,
    "path": "../public/_nuxt/C1zahdiA.js"
  },
  "/_nuxt/C2D58ac_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2555-ufG2o0E0QD+XsKU3YQRQekgozx4\"",
    "mtime": "2026-05-22T20:25:59.120Z",
    "size": 9557,
    "path": "../public/_nuxt/C2D58ac_.js"
  },
  "/_nuxt/C1pdOOdg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f75-2eHnxf6pgtDAynBeL7Q2ezM9MjY\"",
    "mtime": "2026-05-22T20:25:59.120Z",
    "size": 3957,
    "path": "../public/_nuxt/C1pdOOdg.js"
  },
  "/_nuxt/C2UroZ48.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c9-alzE+PQ4hZgmvj/z/cnZ5CwfRrU\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 2249,
    "path": "../public/_nuxt/C2UroZ48.js"
  },
  "/_nuxt/C2Jba_RV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-/hBTEBvRsdqwhtFGyPrKuRdnz0o\"",
    "mtime": "2026-05-22T20:25:59.120Z",
    "size": 3964,
    "path": "../public/_nuxt/C2Jba_RV.js"
  },
  "/_nuxt/C33-572H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f1a-6f/T5+9NmjeYHJQh+K5N31uL5cg\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 7962,
    "path": "../public/_nuxt/C33-572H.js"
  },
  "/_nuxt/C3PvPPu4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ff7-fMJP8p/OV7/KNwBkKigKhJsJPMk\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 8183,
    "path": "../public/_nuxt/C3PvPPu4.js"
  },
  "/_nuxt/C3P5CfEB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e1-X3YG7cWKJ+Mi1iQq2yjiyJBYfno\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 2273,
    "path": "../public/_nuxt/C3P5CfEB.js"
  },
  "/_nuxt/C7PER0f_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7-wRmlLF4QGC1nNxDfAedMZv0glAc\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 247,
    "path": "../public/_nuxt/C7PER0f_.js"
  },
  "/_nuxt/C9_EOY5P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-sS8tBbskRWimdye3gz+jltLbywQ\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 2253,
    "path": "../public/_nuxt/C9_EOY5P.js"
  },
  "/_nuxt/C3dwBpLe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eb7-R+GgUKZyaZmPtAtrkQAWijG7Fac\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 3767,
    "path": "../public/_nuxt/C3dwBpLe.js"
  },
  "/_nuxt/CAbbrkLH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f6c-JuYqtVG3noCkPuFay1uOsZhgE6o\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 3948,
    "path": "../public/_nuxt/CAbbrkLH.js"
  },
  "/_nuxt/C3VPS_0w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-kI8pQ/Xuycs1wZosdfNDp0oghRc\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 2261,
    "path": "../public/_nuxt/C3VPS_0w.js"
  },
  "/_nuxt/CA1y1r5M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e1-/hNDmMiOsWVoAHmids3eeKiaE0M\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 2273,
    "path": "../public/_nuxt/CA1y1r5M.js"
  },
  "/_nuxt/CBZx-AVa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-R+cq8BqF1ozdCIeSsUZ4fOjDT+Y\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 3964,
    "path": "../public/_nuxt/CBZx-AVa.js"
  },
  "/_nuxt/CBcu4zWP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e5-ONgwZiYtVwBGTOefatXSiIpGqX0\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 2277,
    "path": "../public/_nuxt/CBcu4zWP.js"
  },
  "/_nuxt/CBf1kD0z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f54-xq/vNI0N8JopEUFFdZ6wxXm6Zow\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 3924,
    "path": "../public/_nuxt/CBf1kD0z.js"
  },
  "/_nuxt/CBfDxq0y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fff-4mZKPob3SewH4mKGUlRgR//cQXY\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 8191,
    "path": "../public/_nuxt/CBfDxq0y.js"
  },
  "/_nuxt/CDN8USUq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-WkEkuOGbhYo/hrM81yWKH/DgP8I\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 2261,
    "path": "../public/_nuxt/CDN8USUq.js"
  },
  "/_nuxt/CDcZ9ekr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e5-FURtGxk2fMzzvWWUCiXiewPPW6o\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 2277,
    "path": "../public/_nuxt/CDcZ9ekr.js"
  },
  "/_nuxt/CG2oQD2X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-uH4ghdmBlC0PPrSUHnJy590A9Oc\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 3964,
    "path": "../public/_nuxt/CG2oQD2X.js"
  },
  "/_nuxt/CIBmCGQ4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d9-I0h3i9bDi2K+mL5ctQTOutfGtsk\"",
    "mtime": "2026-05-22T20:25:59.121Z",
    "size": 2265,
    "path": "../public/_nuxt/CIBmCGQ4.js"
  },
  "/_nuxt/CIq3EXNP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f71-6pkcTe63ztMsOAZOlHrgxqudMgc\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 3953,
    "path": "../public/_nuxt/CIq3EXNP.js"
  },
  "/_nuxt/CJn90Uni.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c5-+35Z0aE9Nu6YSO5QeShUchIDv6U\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 2245,
    "path": "../public/_nuxt/CJn90Uni.js"
  },
  "/_nuxt/CLNQ4hyH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-whiXP+pnGcKbD0jo5L4L+pL0RnE\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 2253,
    "path": "../public/_nuxt/CLNQ4hyH.js"
  },
  "/_nuxt/COPXx7I3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2041-mVkg2OJaU3CZTwH9gYUu8oSq07g\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 8257,
    "path": "../public/_nuxt/COPXx7I3.js"
  },
  "/_nuxt/CPgF6GDG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-pC+74fr9MYDzPQAap4wQkRY7mdk\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 3964,
    "path": "../public/_nuxt/CPgF6GDG.js"
  },
  "/_nuxt/CQ7PmSvs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f71-SKHYagfP6CM4EL3NqTup/GvbvcY\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 3953,
    "path": "../public/_nuxt/CQ7PmSvs.js"
  },
  "/_nuxt/CQRNbCJP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f80-Le+Rb8Aj5/kbOV3Vy3/rwRT+Oj8\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 3968,
    "path": "../public/_nuxt/CQRNbCJP.js"
  },
  "/_nuxt/CRrgdyWO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f63-IDk4Ko9jxGKfFxUBoiAMjrRJSxc\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 3939,
    "path": "../public/_nuxt/CRrgdyWO.js"
  },
  "/_nuxt/CSVNw9uG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f8b-pmWlh+H/3vG3tteqxS+TdG5A4sU\"",
    "mtime": "2026-05-22T20:25:59.125Z",
    "size": 3979,
    "path": "../public/_nuxt/CSVNw9uG.js"
  },
  "/_nuxt/CUKeUuXq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e9-fLvAuonqFQhNY9SQsqm2Siu5q+k\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 2281,
    "path": "../public/_nuxt/CUKeUuXq.js"
  },
  "/_nuxt/CVLVvXgJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d1-q5Wv+F9FjYFhr6aEvNr2+x/nnLw\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 2257,
    "path": "../public/_nuxt/CVLVvXgJ.js"
  },
  "/_nuxt/CXZGrOeD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f8f-5ugQDak51YYgGQIFJC6jfLyv2Vg\"",
    "mtime": "2026-05-22T20:25:59.123Z",
    "size": 3983,
    "path": "../public/_nuxt/CXZGrOeD.js"
  },
  "/_nuxt/CZa7geHM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fe2-H3V47EChUQOmzGUonDpiJCOO6gE\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 8162,
    "path": "../public/_nuxt/CZa7geHM.js"
  },
  "/_nuxt/CZar7ICP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f6a-8oOvMyMCly6o2zbUsauv48EaZI0\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 3946,
    "path": "../public/_nuxt/CZar7ICP.js"
  },
  "/_nuxt/CZh4gpkn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-tsElUX7QSKGehtbkIaG5jXer0po\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 2261,
    "path": "../public/_nuxt/CZh4gpkn.js"
  },
  "/_nuxt/C_yg0ubW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fda-9PN2T/N+8Y0AQtfbUgSowMSk8Lc\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 8154,
    "path": "../public/_nuxt/C_yg0ubW.js"
  },
  "/_nuxt/Ca0GTu0K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-OWBXOXopAJPKNLElkJDfIs1tAp0\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 2253,
    "path": "../public/_nuxt/Ca0GTu0K.js"
  },
  "/_nuxt/CaSlh0o5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1efc-xpf804cHsQgNG7qkx5f6HE5lVIw\"",
    "mtime": "2026-05-22T20:25:59.123Z",
    "size": 7932,
    "path": "../public/_nuxt/CaSlh0o5.js"
  },
  "/_nuxt/CawYFv2i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ffb-18MCutK9fKBDp74Z0rmRzD3TI1A\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 8187,
    "path": "../public/_nuxt/CawYFv2i.js"
  },
  "/_nuxt/Cc3puWYa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-CaJZHLwjJ1lKrU/0Nvzuxwgw8vA\"",
    "mtime": "2026-05-22T20:25:59.122Z",
    "size": 2253,
    "path": "../public/_nuxt/Cc3puWYa.js"
  },
  "/_nuxt/CfZ098F8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-aizOjG+g31B/flfnLBSmncXlSwk\"",
    "mtime": "2026-05-22T20:25:59.124Z",
    "size": 2261,
    "path": "../public/_nuxt/CfZ098F8.js"
  },
  "/_nuxt/Cff-Xmrp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-Frqkk056sy6Y5fveoVNiracQCSM\"",
    "mtime": "2026-05-22T20:25:59.124Z",
    "size": 2261,
    "path": "../public/_nuxt/Cff-Xmrp.js"
  },
  "/_nuxt/CgRsc4B6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f4a-DudiVwSDJkgcU9NU4FAOxLYrniM\"",
    "mtime": "2026-05-22T20:25:59.123Z",
    "size": 8010,
    "path": "../public/_nuxt/CgRsc4B6.js"
  },
  "/_nuxt/ChjXAqLh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-Ant6oemuMvtyxFQQZkDeIBPoLfM\"",
    "mtime": "2026-05-22T20:25:59.123Z",
    "size": 2253,
    "path": "../public/_nuxt/ChjXAqLh.js"
  },
  "/_nuxt/Ck5K67eB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c9-UCe03vNZNWxRUaiNxNThW3S/Yrg\"",
    "mtime": "2026-05-22T20:25:59.123Z",
    "size": 2249,
    "path": "../public/_nuxt/Ck5K67eB.js"
  },
  "/_nuxt/ClwD9pvf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-jipcI6aM7ztwLqw3MKZzNPEbwvY\"",
    "mtime": "2026-05-22T20:25:59.123Z",
    "size": 2253,
    "path": "../public/_nuxt/ClwD9pvf.js"
  },
  "/_nuxt/CnQQdfj5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c5-BBMM5u/Wgs1l3kOgpAZSU9QA5X8\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 2245,
    "path": "../public/_nuxt/CnQQdfj5.js"
  },
  "/_nuxt/CoU74pDJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f77-y4X/BSWGdu4dAqCaokHmEx+DDFE\"",
    "mtime": "2026-05-22T20:25:59.123Z",
    "size": 3959,
    "path": "../public/_nuxt/CoU74pDJ.js"
  },
  "/_nuxt/Cpqrl8-Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"201c-ZUkX0lTXDMw2mtdXKleCOUqWj34\"",
    "mtime": "2026-05-22T20:25:59.124Z",
    "size": 8220,
    "path": "../public/_nuxt/Cpqrl8-Q.js"
  },
  "/_nuxt/CtJZm1Mg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f65-j7CXloPKl7vNpPafA6yMheQv/1g\"",
    "mtime": "2026-05-22T20:25:59.123Z",
    "size": 3941,
    "path": "../public/_nuxt/CtJZm1Mg.js"
  },
  "/_nuxt/CtYjmnkU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20a4-80w7UpSYm5uuONEaK+YT5Q/jCcI\"",
    "mtime": "2026-05-22T20:25:59.125Z",
    "size": 8356,
    "path": "../public/_nuxt/CtYjmnkU.js"
  },
  "/_nuxt/CugYsnw-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"206b-0YLXIIr0wiL89tjMIzEGlICcXhc\"",
    "mtime": "2026-05-22T20:25:59.124Z",
    "size": 8299,
    "path": "../public/_nuxt/CugYsnw-.js"
  },
  "/_nuxt/CukvRsm3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2008-hXlv8OT+Dkdu/giqZfhGbwT6Twk\"",
    "mtime": "2026-05-22T20:25:59.124Z",
    "size": 8200,
    "path": "../public/_nuxt/CukvRsm3.js"
  },
  "/_nuxt/Cx5JaFA2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8a7-46Zx87xU5ad0arI2h6S8kbHxe5o\"",
    "mtime": "2026-05-22T20:25:59.125Z",
    "size": 2215,
    "path": "../public/_nuxt/Cx5JaFA2.js"
  },
  "/_nuxt/D0OwL6ht.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f82-d1RPE2aiShqjj5fgPXs2twUvK3Y\"",
    "mtime": "2026-05-22T20:25:59.124Z",
    "size": 3970,
    "path": "../public/_nuxt/D0OwL6ht.js"
  },
  "/_nuxt/D0pOk6RN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f50-cNq3CaXJVeo8/rAuSaKX28JeEnU\"",
    "mtime": "2026-05-22T20:25:59.125Z",
    "size": 3920,
    "path": "../public/_nuxt/D0pOk6RN.js"
  },
  "/_nuxt/D1IWAclL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f06-L8AjhF23lw9XdtKQctZvf3Fwi94\"",
    "mtime": "2026-05-22T20:25:59.125Z",
    "size": 7942,
    "path": "../public/_nuxt/D1IWAclL.js"
  },
  "/_nuxt/D1jsg2Pc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c1-jCwFYonGme2xa5eIrowLdcHEOGU\"",
    "mtime": "2026-05-22T20:25:59.125Z",
    "size": 2241,
    "path": "../public/_nuxt/D1jsg2Pc.js"
  },
  "/_nuxt/D2LOzqJc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f96-LtM8q/sa3hvCdfIMR5ECvU3MvsM\"",
    "mtime": "2026-05-22T20:25:59.125Z",
    "size": 3990,
    "path": "../public/_nuxt/D2LOzqJc.js"
  },
  "/_nuxt/D52kHdSu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-ZLlVZSOo6KSl8IaJcXUCGIWnUFs\"",
    "mtime": "2026-05-22T20:25:59.125Z",
    "size": 2261,
    "path": "../public/_nuxt/D52kHdSu.js"
  },
  "/_nuxt/D55mlvUk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-mSLHACdGJfhEODhzu66rIh6GvXE\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 2261,
    "path": "../public/_nuxt/D55mlvUk.js"
  },
  "/_nuxt/D77SdyoP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-8uJufYEAcdMaaWKWrbX3dmq9sPw\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 2253,
    "path": "../public/_nuxt/D77SdyoP.js"
  },
  "/_nuxt/DCQBzDyZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c5-KkSPCJInmat8KAa9p8d6Z/vMbJ4\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 2245,
    "path": "../public/_nuxt/DCQBzDyZ.js"
  },
  "/_nuxt/DEAMjqCc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f71-gGJJ/ZBE3FbDzlJq2DArZymI8Ik\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 3953,
    "path": "../public/_nuxt/DEAMjqCc.js"
  },
  "/_nuxt/D9w6UamH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20a4-vxIw9nYoG/MhhW8le22I2Mw1u3s\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 8356,
    "path": "../public/_nuxt/D9w6UamH.js"
  },
  "/_nuxt/DGGNkOZy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2091-rLcZSzhLtUhtiDZn6pANlE3ucPM\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 8337,
    "path": "../public/_nuxt/DGGNkOZy.js"
  },
  "/_nuxt/DGjd5c46.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e9-VwWnKtWNLTi0BVpx6TNo2FtjPVc\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 2281,
    "path": "../public/_nuxt/DGjd5c46.js"
  },
  "/_nuxt/DHr_m_bl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-YlPi68wRy1OcsArD0s3ucSOson8\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 2261,
    "path": "../public/_nuxt/DHr_m_bl.js"
  },
  "/_nuxt/DJFp9pcg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2093-wWof19DEr6bU+bHIRwMUc2bMIq8\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 8339,
    "path": "../public/_nuxt/DJFp9pcg.js"
  },
  "/_nuxt/DJU7Fr0K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f5f-8T1dZ8aXWKT3LaD43dUtEYBpyxc\"",
    "mtime": "2026-05-22T20:25:59.128Z",
    "size": 3935,
    "path": "../public/_nuxt/DJU7Fr0K.js"
  },
  "/_nuxt/DLh8WUS-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a2-+u5p6Y3XmTJt2o+12DtN5ca+aoo\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 162,
    "path": "../public/_nuxt/DLh8WUS-.js"
  },
  "/_nuxt/DLvw0hXv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f99-aVnMjrjSF4UzdEKFkdXVbZlo3G8\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 3993,
    "path": "../public/_nuxt/DLvw0hXv.js"
  },
  "/_nuxt/DNas8_Jj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f71-WxXTiKo94oU5ZwsHPkAiNdTptqs\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 3953,
    "path": "../public/_nuxt/DNas8_Jj.js"
  },
  "/_nuxt/DNtOEFOn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8dd-L3P2KdWJNn5cJODUgDvXL/XbxHg\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 2269,
    "path": "../public/_nuxt/DNtOEFOn.js"
  },
  "/_nuxt/DOT7P5mc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f5b-DZx1Cq+q62wX5oCRPhVi+rNX+lM\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 3931,
    "path": "../public/_nuxt/DOT7P5mc.js"
  },
  "/_nuxt/DRBkdGbR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2080-DdDnBJk7Lwzpesl+roOm/3o7z04\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 8320,
    "path": "../public/_nuxt/DRBkdGbR.js"
  },
  "/_nuxt/DRJO4Hpe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9a-/JVbeJOQsO69+CkppJnUmzJYi1I\"",
    "mtime": "2026-05-22T20:25:59.126Z",
    "size": 154,
    "path": "../public/_nuxt/DRJO4Hpe.js"
  },
  "/_nuxt/DV0qgpE8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ef3-iDDIOFnLnogwby5goFh8Dqs2DEA\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 7923,
    "path": "../public/_nuxt/DV0qgpE8.js"
  },
  "/_nuxt/DV3A1Bd4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e1-/m3HQp+W2uwKA2zpniQ32k6LyEU\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 2273,
    "path": "../public/_nuxt/DV3A1Bd4.js"
  },
  "/_nuxt/DVircFkm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-QFztDC9bJADZSYdq0iONbd1iP8w\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 2253,
    "path": "../public/_nuxt/DVircFkm.js"
  },
  "/_nuxt/DWQyUzMC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"204c-AORFN2oR6F8049zuhWeDPTdodBQ\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 8268,
    "path": "../public/_nuxt/DWQyUzMC.js"
  },
  "/_nuxt/DWzu5QSi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"201b-I/pFt4M34TdTJNUsGmBQBkolSpY\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 8219,
    "path": "../public/_nuxt/DWzu5QSi.js"
  },
  "/_nuxt/DZG_oGRF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35b7b-epQ5wEIheIeUGA1q+WHaoPE1lMc\"",
    "mtime": "2026-05-22T20:25:59.130Z",
    "size": 220027,
    "path": "../public/_nuxt/DZG_oGRF.js"
  },
  "/_nuxt/DZh8rVgt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2026-UsLwGYS+APLWAOuCSVFMLiRqv+A\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 8230,
    "path": "../public/_nuxt/DZh8rVgt.js"
  },
  "/_nuxt/Dd3iTy_E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8f1-7j2ImxRBTH6Tp+EN5HwSXMnsuHM\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 2289,
    "path": "../public/_nuxt/Dd3iTy_E.js"
  },
  "/_nuxt/De9jmtk5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"202f-zZjNc0/h1c4O/zTlysTxNadrdoo\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 8239,
    "path": "../public/_nuxt/De9jmtk5.js"
  },
  "/_nuxt/DevZFlz-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2009-ETNFpdp5cJphmn74+1bF8IwhYZg\"",
    "mtime": "2026-05-22T20:25:59.128Z",
    "size": 8201,
    "path": "../public/_nuxt/DevZFlz-.js"
  },
  "/_nuxt/Df-p94Wj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8a7-4luKgMBjpOhBKWgIiFRx9i5yq4s\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 2215,
    "path": "../public/_nuxt/Df-p94Wj.js"
  },
  "/_nuxt/DgN-eES3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f79-4NxIquH5oL32a2l6s550jOtB0W0\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 3961,
    "path": "../public/_nuxt/DgN-eES3.js"
  },
  "/_nuxt/Dhw0Pmjt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20e8-RXvWW0o8pgbUQfy/m/0dBfGpTus\"",
    "mtime": "2026-05-22T20:25:59.128Z",
    "size": 8424,
    "path": "../public/_nuxt/Dhw0Pmjt.js"
  },
  "/_nuxt/Dkt7rFbZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-9xWQiXV6cYjq8PFzmJP6bn5oXGE\"",
    "mtime": "2026-05-22T20:25:59.127Z",
    "size": 3964,
    "path": "../public/_nuxt/Dkt7rFbZ.js"
  },
  "/_nuxt/DlAUqK2U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2026-05-22T20:25:59.128Z",
    "size": 91,
    "path": "../public/_nuxt/DlAUqK2U.js"
  },
  "/_nuxt/Dn9MnvGT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8bd-oPXfXnVUb7oQXILo4RT2Tdhr67k\"",
    "mtime": "2026-05-22T20:25:59.128Z",
    "size": 2237,
    "path": "../public/_nuxt/Dn9MnvGT.js"
  },
  "/_nuxt/DnbltXil.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f8b-fPoOiOL0nN8Y8Oo5k5D2Vv8hWLw\"",
    "mtime": "2026-05-22T20:25:59.129Z",
    "size": 3979,
    "path": "../public/_nuxt/DnbltXil.js"
  },
  "/_nuxt/Do0yzuZl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f77-bi4Wy916/Hb1Ha1zwykNE3D/mxs\"",
    "mtime": "2026-05-22T20:25:59.128Z",
    "size": 3959,
    "path": "../public/_nuxt/Do0yzuZl.js"
  },
  "/_nuxt/DoxLqj7U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20de-Nz4PNf6DcSu27Yomwvhe60/G/Bg\"",
    "mtime": "2026-05-22T20:25:59.128Z",
    "size": 8414,
    "path": "../public/_nuxt/DoxLqj7U.js"
  },
  "/_nuxt/Dp1-uAXb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f15-QR7R09m7RJ8MdTRQaBe27k+wEQk\"",
    "mtime": "2026-05-22T20:25:59.129Z",
    "size": 7957,
    "path": "../public/_nuxt/Dp1-uAXb.js"
  },
  "/_nuxt/DouOtjpP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ef5-pQ/jMnxBUtoxAsUYaBRhnPglR6M\"",
    "mtime": "2026-05-22T20:25:59.128Z",
    "size": 7925,
    "path": "../public/_nuxt/DouOtjpP.js"
  },
  "/_nuxt/DpRHhkvr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2002-AYiqYqNSnc8g3O4Ei2s1Fje2Xh4\"",
    "mtime": "2026-05-22T20:25:59.129Z",
    "size": 8194,
    "path": "../public/_nuxt/DpRHhkvr.js"
  },
  "/_nuxt/DpjKqM86.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f96-ASwge73Q1sLKqbC/RoWnbEv17Xo\"",
    "mtime": "2026-05-22T20:25:59.129Z",
    "size": 3990,
    "path": "../public/_nuxt/DpjKqM86.js"
  },
  "/_nuxt/DqYhob7Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d60-dV5/9Fnq/5kIauvsmzPs1afbyao\"",
    "mtime": "2026-05-22T20:25:59.129Z",
    "size": 3424,
    "path": "../public/_nuxt/DqYhob7Y.js"
  },
  "/_nuxt/DrBvseLV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"200a-qSI0pdAVis5mv43IsZiOUXdCg2E\"",
    "mtime": "2026-05-22T20:25:59.130Z",
    "size": 8202,
    "path": "../public/_nuxt/DrBvseLV.js"
  },
  "/_nuxt/DrwZwhtQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2062-kjapHBxwCvMtq8Z6UGO8V2RQO8U\"",
    "mtime": "2026-05-22T20:25:59.129Z",
    "size": 8290,
    "path": "../public/_nuxt/DrwZwhtQ.js"
  },
  "/_nuxt/DrEduxBg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f66-wsctHVwdl3w8iPdUza06Afu+zHY\"",
    "mtime": "2026-05-22T20:25:59.129Z",
    "size": 3942,
    "path": "../public/_nuxt/DrEduxBg.js"
  },
  "/_nuxt/Du6_XV_B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f79-sLLgEJUF+EWx+43xzFPR/NGMgjc\"",
    "mtime": "2026-05-22T20:25:59.130Z",
    "size": 3961,
    "path": "../public/_nuxt/Du6_XV_B.js"
  },
  "/_nuxt/DvNPya1x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c5-1TVNedsut0a+5hQvT/jw39nAj1Y\"",
    "mtime": "2026-05-22T20:25:59.130Z",
    "size": 2245,
    "path": "../public/_nuxt/DvNPya1x.js"
  },
  "/_nuxt/DtOFJaxt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f0b-C4thLqAWpLjNFo1P8a32ph2Km/E\"",
    "mtime": "2026-05-22T20:25:59.129Z",
    "size": 7947,
    "path": "../public/_nuxt/DtOFJaxt.js"
  },
  "/_nuxt/DwCrvXAs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b9-yJ6vh2uwzton4YP+8gLDTgeWNbU\"",
    "mtime": "2026-05-22T20:25:59.130Z",
    "size": 2233,
    "path": "../public/_nuxt/DwCrvXAs.js"
  },
  "/_nuxt/Dx3PV431.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20cd-rPUlLdwIC2qJKwQshtoMdpHTBhA\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 8397,
    "path": "../public/_nuxt/Dx3PV431.js"
  },
  "/_nuxt/Dwv66rVk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20a1-Ik0q6rtK61byVt891u+emnoVJyY\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 8353,
    "path": "../public/_nuxt/Dwv66rVk.js"
  },
  "/_nuxt/Dx6_y6qo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2018-Vm3y8y0rZqFf/zmsFD+ETNeDHfQ\"",
    "mtime": "2026-05-22T20:25:59.130Z",
    "size": 8216,
    "path": "../public/_nuxt/Dx6_y6qo.js"
  },
  "/_nuxt/Dx6z5Iwk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f71-bu+FUDKulcH2rQbco64tLHqfmBQ\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 3953,
    "path": "../public/_nuxt/Dx6z5Iwk.js"
  },
  "/_nuxt/DyDpcO52.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-BKkz9XYbnbKKcgUWy1yBNpXjPN0\"",
    "mtime": "2026-05-22T20:25:59.130Z",
    "size": 3964,
    "path": "../public/_nuxt/DyDpcO52.js"
  },
  "/_nuxt/Ef6lAI_J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20a6-VXM5AeIJH/XDGYbIElqEnhlMteg\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 8358,
    "path": "../public/_nuxt/Ef6lAI_J.js"
  },
  "/_nuxt/FntVOiOr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8dd-nPSCCgb+AV0kFNZmoIlfF4Rt5ls\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 2269,
    "path": "../public/_nuxt/FntVOiOr.js"
  },
  "/_nuxt/FpGizsyV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d1-nmgdEfMcQF5Mhws6n26siyDM5JE\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 2257,
    "path": "../public/_nuxt/FpGizsyV.js"
  },
  "/_nuxt/GCU9_HIB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8bd-lR2k/1vPSLLVKN/dPHF36jDo3Xg\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 2237,
    "path": "../public/_nuxt/GCU9_HIB.js"
  },
  "/_nuxt/GSmlYW5B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f28-qQZj74DydT7Tp5pYwJwZHIQyFCU\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 7976,
    "path": "../public/_nuxt/GSmlYW5B.js"
  },
  "/_nuxt/IMOTwu8x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fa1-Fg7wWvAYLC+02AeyhlYTm3khhaI\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 4001,
    "path": "../public/_nuxt/IMOTwu8x.js"
  },
  "/_nuxt/IlUdh6bm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f66-XkNznTTaxkg6rnjljkEUhveKG8E\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 3942,
    "path": "../public/_nuxt/IlUdh6bm.js"
  },
  "/_nuxt/KOfnLd_I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2009-8b3YrTuJ6pLXpRO6nbYOJDEglFI\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 8201,
    "path": "../public/_nuxt/KOfnLd_I.js"
  },
  "/_nuxt/LiW_cdE9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-1bbYsCrkKzFqKs41wRGqrV6YnsM\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 2253,
    "path": "../public/_nuxt/LiW_cdE9.js"
  },
  "/_nuxt/OwuYFvkE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f9a-WaHDBzISIZIid+nqpA76Fgwpj1E\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 3994,
    "path": "../public/_nuxt/OwuYFvkE.js"
  },
  "/_nuxt/Qgiei7fw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8f1-+LcL+JItuFuK/yoVerLiVkIK7T8\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 2289,
    "path": "../public/_nuxt/Qgiei7fw.js"
  },
  "/_nuxt/R3x0FoBo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f66-A70ETPHbqdIr7GVzt3dEq3fmVTc\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 3942,
    "path": "../public/_nuxt/R3x0FoBo.js"
  },
  "/_nuxt/RMpmuPwa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2009-FHSEctv+73EptH3PFe5exnB8S0Q\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 8201,
    "path": "../public/_nuxt/RMpmuPwa.js"
  },
  "/_nuxt/RmoiqWKx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7c-vkbtBVSVAQ/TsydycYhFIx054P4\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 3964,
    "path": "../public/_nuxt/RmoiqWKx.js"
  },
  "/_nuxt/VNdD1hVV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f80-sZyvEixzvrYoy5SiYBjCUsiDpVU\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 3968,
    "path": "../public/_nuxt/VNdD1hVV.js"
  },
  "/_nuxt/T7vOGOoI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d9-QFGwzUDYy9j2cx9EcUv8hjgykCk\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 2265,
    "path": "../public/_nuxt/T7vOGOoI.js"
  },
  "/_nuxt/WDiD5K14.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-Ic+44dCXnqK6PTftjEKRgLW0dSE\"",
    "mtime": "2026-05-22T20:25:59.131Z",
    "size": 2253,
    "path": "../public/_nuxt/WDiD5K14.js"
  },
  "/_nuxt/ZLxepVGZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8cd-sRxoxKU+ZYK8cWMPDhymWq2VedA\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 2253,
    "path": "../public/_nuxt/ZLxepVGZ.js"
  },
  "/_nuxt/ZMkKB-Ol.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bd4-qZsNjsx6p4mXwI95OKmJ7SCj7ck\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 3028,
    "path": "../public/_nuxt/ZMkKB-Ol.js"
  },
  "/_nuxt/WUJWHwBF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8ae-exVZiq4hPCGzOnyHzZgr2cCMvMw\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 2222,
    "path": "../public/_nuxt/WUJWHwBF.js"
  },
  "/_nuxt/aJhhuuu7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"303-/xcQRJOcPKuy5ywvODV+Cb4aa5E\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 771,
    "path": "../public/_nuxt/aJhhuuu7.js"
  },
  "/_nuxt/bNv9oHQZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f66-asnzT+L95zZpEktQrhbhYI80OuY\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 3942,
    "path": "../public/_nuxt/bNv9oHQZ.js"
  },
  "/_nuxt/YC_4M7yz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2008-9IF6jwwI68hWxQA2urv/okn/tAE\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 8200,
    "path": "../public/_nuxt/YC_4M7yz.js"
  },
  "/_nuxt/dUw7e_dX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e5-6Djn41P1SQRD9KiC+O9iha9adTI\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 2277,
    "path": "../public/_nuxt/dUw7e_dX.js"
  },
  "/_nuxt/eHrUM4cC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f71-IKWui+e7Sa09PVPW3MsgqrY3vKY\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 3953,
    "path": "../public/_nuxt/eHrUM4cC.js"
  },
  "/_nuxt/bahYVJ08.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c9-IXUrxxzro+vbMm4hBEP6bTHCzKo\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 2249,
    "path": "../public/_nuxt/bahYVJ08.js"
  },
  "/_nuxt/bk5OmaCR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d5-oOIiCUNAXvR2RVB8SDS8HE7TANg\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 2261,
    "path": "../public/_nuxt/bk5OmaCR.js"
  },
  "/_nuxt/error-404.DL_4WIao.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"dca-KnjyV0UbpsrliiJzZx69defY74k\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 3530,
    "path": "../public/_nuxt/error-404.DL_4WIao.css"
  },
  "/_nuxt/error-500.I1Dtv2V5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75a-vEGyJqldBVJrnMfcLsrGaHcxYl0\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 1882,
    "path": "../public/_nuxt/error-500.I1Dtv2V5.css"
  },
  "/_nuxt/m6rLGYeX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f92-D5R9A7oHsbShXRXCC5JKif9pPs4\"",
    "mtime": "2026-05-22T20:25:59.132Z",
    "size": 3986,
    "path": "../public/_nuxt/m6rLGYeX.js"
  },
  "/_nuxt/ql4lUCGn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"201f-87retXrhTepdkDmgjJbaXj5l+tg\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 8223,
    "path": "../public/_nuxt/ql4lUCGn.js"
  },
  "/_nuxt/qlBEC9uH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ff5-iZJPb8czrTFuSi63Nq4/OeOK6XY\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 8181,
    "path": "../public/_nuxt/qlBEC9uH.js"
  },
  "/_nuxt/rQs7jso9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f3f-wh5i6zdbNfl8bLydbj+V1O3szTw\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 7999,
    "path": "../public/_nuxt/rQs7jso9.js"
  },
  "/_nuxt/s0X5EXbv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fda-BFOU7RbZGy4X8HgJivmM5VQw92w\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 8154,
    "path": "../public/_nuxt/s0X5EXbv.js"
  },
  "/_nuxt/sVrPz_bN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f6a-Zu5Lls0q5/QRetJFwcsyIT/n9Uw\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 3946,
    "path": "../public/_nuxt/sVrPz_bN.js"
  },
  "/_nuxt/vHvTNmK3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2009-S7xnJUFHvU8n0UWU/KSA5NcL2dQ\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 8201,
    "path": "../public/_nuxt/vHvTNmK3.js"
  },
  "/_nuxt/vvZytTxe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f8d-hSA844nV+8HiPGoeU/tcp+FQQcM\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 3981,
    "path": "../public/_nuxt/vvZytTxe.js"
  },
  "/_nuxt/zQVvRpJz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fa1-jPge+IozPejsjGjsPw6dN37E/F8\"",
    "mtime": "2026-05-22T20:25:59.133Z",
    "size": 4001,
    "path": "../public/_nuxt/zQVvRpJz.js"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-9l18al4ke3W0Y0bw76nppHoR4Vk\"",
    "mtime": "2026-05-22T20:25:59.084Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/6269d2bb-5d4e-4697-8d5a-c17c8e538113.json": {
    "type": "application/json",
    "etag": "\"58-asAYLwQXJH6KSr3FHYqi8qzsK+Y\"",
    "mtime": "2026-05-22T20:25:59.081Z",
    "size": 88,
    "path": "../public/_nuxt/builds/meta/6269d2bb-5d4e-4697-8d5a-c17c8e538113.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const __kamDj = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _SxA8c9 = defineEventHandler(() => {});

const _lazy_pzRPYN = () => import('../routes/api/data/_city_.get.mjs');
const _lazy_sbvGIU = () => import('../routes/api/postal-data.get.mjs');
const _lazy_FLF44k = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: __kamDj, lazy: false, middleware: true, method: undefined },
  { route: '/api/data/:city', handler: _lazy_pzRPYN, lazy: true, middleware: false, method: "get" },
  { route: '/api/postal-data', handler: _lazy_sbvGIU, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_FLF44k, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_FLF44k, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $fetch as $, getResponseStatusText as a, getResponseStatus as b, createError$1 as c, defineCachedEventHandler as d, decodePath as e, defineRenderHandler as f, getRouterParam as g, getQuery as h, getRouteRules as i, joinRelativeURL as j, joinURL as k, useNitroApp as l, getContext as m, hasProtocol as n, isScriptProtocol as o, parseQuery as p, withTrailingSlash as q, withoutTrailingSlash as r, sanitizeStatusCode as s, createHooks as t, useRuntimeConfig as u, executeAsync as v, withQuery as w, defu as x, getRequestURL as y, nodeServer as z };
//# sourceMappingURL=nitro.mjs.map
