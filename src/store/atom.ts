import { atom } from 'jotai';
// 마이 스크랩
export const isEditingAtom = atom(false);
export const selectedIdListAtom = atom<number[]>([]);
export const allIdListAtom = atom<number[]>([]);
export const isDelModalOpenAtom = atom(false);
export const isComModalOpenAtom = atom(false);
export const isAllCheckedAtom = atom(false);
