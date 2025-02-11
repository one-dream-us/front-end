import { ChangeEvent, useState } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValue(e.target.value);

  return { value, handleInputChange, setValue };
};

export default useInput;
