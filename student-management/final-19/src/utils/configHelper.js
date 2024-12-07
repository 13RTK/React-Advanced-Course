export function getConfig(config) {
  return import.meta.env[`VITE_${config}`];
}
