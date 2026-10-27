export const getSpanishDataUrl = (baseURL: string, isServer: boolean) =>
  isServer ? '/api/es-data' : `${baseURL}data/es.json`;
