const API_URL = import.meta.env.VITE_API_URL;

export async function getIdols() {
  const response = await fetch(`${API_URL}/idols`);
  return response.json();
}
