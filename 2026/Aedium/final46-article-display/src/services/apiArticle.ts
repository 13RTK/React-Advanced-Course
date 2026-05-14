import type { InsertArticle } from '../types/Article';
import { client } from '../utils/neon';

const ARTICLE_TABLE_NAME = 'article';

export async function getAllArticles() {
  const { data, error } = await client.from(ARTICLE_TABLE_NAME).select('*');

  if (error) {
    throw error;
  }

  console.log(data);
  return data;
}

export async function insertArticle(insertArticle: InsertArticle) {
  const { data, error } = await client
    .from(ARTICLE_TABLE_NAME)
    .insert(insertArticle)
    .select();

  if (error) {
    throw error;
  }

  console.log(data);
  return data;
}
