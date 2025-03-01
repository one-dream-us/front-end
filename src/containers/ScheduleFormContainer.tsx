import ScheduleForm from '@/components/newAdmin/ScheduleForm';
import { useScheduleStore, useUplodTypeStore } from '@/store/newAdmin/useFormStore';
import { useShallow } from 'zustand/shallow';

export default function ScheduleFormContainer() {
  const { date, isSchedule, setDate } = useScheduleStore();
  const setUploadType = useUplodTypeStore(useShallow((s) => s.setUploadType));
  return (
    <ScheduleForm
      isSchedule={isSchedule}
      date={date}
      setDate={setDate}
      // setIsSchedule={setIsSchedule}
      setUploadType={() => setUploadType('scheduled')}
    />
  );
}
