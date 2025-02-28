import UpdateFormButtons from '@/components/newAdmin/common/UpdateFormButtons';
import { useScheduleStore, useUplodTypeStore } from '@/store/newAdmin/useFormStore';

export default function UpdateFormButtonsContainer() {
  const { toggleSchedule, isSchedule } = useScheduleStore();
  const { setUploadType } = useUplodTypeStore();

  const handleDraft = () => {
    setUploadType('draft');
    console.log('ok');
  };

  return (
    <UpdateFormButtons
      toggleSchedule={toggleSchedule}
      isSchedule={isSchedule}
      handleDraft={handleDraft}
    />
  );
}
