import { UploadFormChangeType, UploadFormState } from '@/types/interface';
import { create } from 'zustand';

export const useUploadFormStore = create<UploadFormState>((set) => ({
  uploadForm: {
    title: '',
    newsCompany: '',
    newsLink: '',
    imgLink: '',
  },
  onChange: (newValue: string, type: UploadFormChangeType) =>
    set((prev) => {
      const newUploadForm = {
        ...prev.uploadForm,
        [type]: newValue,
      };
      return { uploadForm: newUploadForm };
    }),
}));
