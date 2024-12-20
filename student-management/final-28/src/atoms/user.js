import { atom } from 'jotai';

export const userAtom = atom({
  avatar:
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
  isStudent: null,
});

export const isStudentAtom = atom((get) => {
  const user = get(userAtom);

  return user.isStudent;
});
