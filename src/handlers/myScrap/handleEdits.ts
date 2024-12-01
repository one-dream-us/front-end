export function handleEditClick(setIsEditing: React.Dispatch<React.SetStateAction<boolean>>) {
  setIsEditing(true);
}

export const handleCheckAllChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setIsAllChecked: React.Dispatch<React.SetStateAction<boolean>>,
  allIdList: number[],
  setSelectedIdList: React.Dispatch<React.SetStateAction<number[]>>,
) => {
  const isChecked = e.target.checked;
  setIsAllChecked(isChecked);
  setSelectedIdList(isChecked ? allIdList : []);
};

export function handleCancelClick(
  setSelectedIdList: React.Dispatch<React.SetStateAction<number[]>>,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
) {
  setSelectedIdList([]);
  setIsEditing(false);
}

export function handleCheckboxChange(
  e: React.ChangeEvent<HTMLInputElement>,
  selectedIdList: number[],
  id: number,
  setSelectedIdList: React.Dispatch<React.SetStateAction<number[]>>,
  allIdList: number[],
  setIsAllChecked: React.Dispatch<React.SetStateAction<boolean>>,
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
