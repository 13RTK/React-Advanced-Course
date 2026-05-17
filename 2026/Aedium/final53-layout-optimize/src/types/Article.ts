import type { Tables, TablesInsert, TablesUpdate } from './database';

export type InsertArticle = TablesInsert<'article'>;

export type UpdateArticle = TablesUpdate<'article'>;

export type Article = Tables<'article'>;
