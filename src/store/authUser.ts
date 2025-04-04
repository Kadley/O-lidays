import type { IUser } from '@/@types/user';
import { atom } from 'jotai';

export const authUserAtom = atom<IUser>();
