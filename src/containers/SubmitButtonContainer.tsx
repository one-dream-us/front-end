import SubmitButton from '@/components/newAdmin/SubmitButton';
import { useScheduleStore, useUplodTypeStore } from '@/store/newAdmin/useFormStore';
import { useShallow } from 'zustand/shallow';

export default function SubmitButtonContainer() {
  const { isSchedule, toggleSchedule } = useScheduleStore();
  const setUploadType = useUplodTypeStore(useShallow((s) => s.setUploadType));
  return (
    <SubmitButton
      isSchedule={isSchedule}
      toggleSchedule={toggleSchedule}
      // setIsSchedule={setIsSchedule}
      setUploadType={setUploadType}
    />
  );
}
