import { atom } from 'jotai';
import type { User } from '../types/User';

export const userAtom = atom<null | User>(null);
