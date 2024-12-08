export function handleEditClick(setIsEditing: (value: boolean) => void) {
  setIsEditing(true);
}

export const handleCheckAllChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setIsAllChecked: (value: boolean) => void,
  allIdList: number[],
  setSelectedIdList: (value: number[]) => void,
) => {
  const isChecked = e.target.checked;
  setIsAllChecked(isChecked);
  setSelectedIdList(isChecked ? allIdList : []);
};

export function handleCancelClick(
  setSelectedIdList: (value: number[]) => void,
  setIsEditing: (value: boolean) => void,
  setIsAllChecked: (value: boolean) => void,
) {
  setSelectedIdList([]);
  setIsEditing(false);
  setIsAllChecked(false);
}

export function handleConCheckChange(
  e: React.ChangeEvent<HTMLInputElement>,
  selectedIdList: number[],
  id: number,
  setSelectedIdList: (value: number[]) => void,
  allIdList: number[],
  setIsAllChecked: (value: boolean) => void,
) {
  let updatedSelectedIdList = [...selectedIdList];
  if (e.target.checked) {
    updatedSelectedIdList.push(id);
  } else {
    updatedSelectedIdList = updatedSelectedIdList.filter((itemId) => itemId !== id);
  }

  setSelectedIdList(updatedSelectedIdList);

  if (updatedSelectedIdList.length === allIdList.length) {
    setIsAllChecked(true);
  } else {
    setIsAllChecked(false);
  }
}
