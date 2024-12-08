export type myScrapMenu = '콘텐츠' | '단어장';

export type MyScrapStoreState = {
  isEditing: boolean;
  selectedIdList: number[];
  allIdList: number[];
  isDelModalOpen: boolean;
  isAllChecked: boolean;

  setIsEditing: (isEditing: boolean) => void;
  setSelectedIdList: (selectedIdList: number[]) => void;
  setAllIdList: (allIdList: number[]) => void;
  setIsDelModalOpen: (isDelModalOpen: boolean) => void;
  setIsAllChecked: (isAllChecked: boolean) => void;
};
