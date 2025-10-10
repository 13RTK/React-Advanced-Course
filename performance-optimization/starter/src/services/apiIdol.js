const API_URL = import.meta.env.VITE_API_URL;

export async function getIdols() {
  const response = await fetch(`${API_URL}/idols`);
  return response.json();
}

export async function addIdol(newIdol) {
  const addedIdol = {
    id: Date.now(),
    images:
      newIdol.gender === 'female' ? ['avatarwoman.png'] : ['avatarman.png'],
    ...newIdol,
  };

  const response = await fetch(`${API_URL}/idols`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(addedIdol),
  });

  return response.json();
}
