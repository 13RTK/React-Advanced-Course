import { client } from '../utils/neon';

export async function getAllArticles() {
  const { data, error } = await client.from('article').select('*');

  if (error) {
    throw error;
  }

  console.log(data);
  return data;
}
