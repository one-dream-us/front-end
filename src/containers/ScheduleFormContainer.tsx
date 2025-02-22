import ScheduleForm from '@/components/newAdmin/ScheduleForm';
import { useScheduleStore } from '@/store/newAdmin/useFormStore';

export default function ScheduleFormContainer() {
  const { date, isSchedule, setDate, setIsSchedule } = useScheduleStore();
  return (
    <ScheduleForm
      isSchedule={isSchedule}
      date={date}
      setDate={setDate}
      setIsSchedule={setIsSchedule}
    />
  );
}
