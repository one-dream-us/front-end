import SubmitButton from '@/components/newAdmin/SubmitButton';
import { useScheduleStore } from '@/store/newAdmin/useFormStore';

export default function SubmitButtonContainer() {
  const { isSchedule, toggleSchedule, setIsSchedule } = useScheduleStore();
  return (
    <SubmitButton
      isSchedule={isSchedule}
      toggleSchedule={toggleSchedule}
      setIsSchedule={setIsSchedule}
    />
  );
}
