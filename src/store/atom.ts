import { atom } from 'jotai';
// 마이 페이지
export const isEditingAtom = atom(false);
export const selectedIdListAtom = atom<number[]>([]);
export const allIdListAtom = atom<number[]>([]);
export const isDelModalOpenAtom = atom(false);
export const isComModalOpenAtom = atom(false);
