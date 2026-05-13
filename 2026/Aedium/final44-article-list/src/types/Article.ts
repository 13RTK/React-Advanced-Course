import type { Tables, TablesInsert } from './database';

export type InsertArticle = TablesInsert<'article'>;

export type Article = Tables<'article'>;
