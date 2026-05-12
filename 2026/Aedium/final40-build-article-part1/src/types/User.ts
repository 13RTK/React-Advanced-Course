export type User = {
  id: string;
  name: string;
  role?: null | string | undefined;
  email: string;
  image?: null | string | undefined;
  banned: null | boolean | undefined;
  banReason?: null | string | undefined;
  createdAt: Date;
  updatedAt: Date;
  banExpires?: null | Date | undefined;
  emailVerified: boolean;
};
