import useMyWordList from '@/hooks/myWordList/useMyWordList';
import TutorialModal from '@/components/myWordList/TutorialModal';

export default function MyWordList() {
  const { showTutorial, setShowTutorial } = useMyWordList();

  return (
    <section>
      <TutorialModal showTutorial={showTutorial} setShowTutorial={setShowTutorial} />
    </section>
  );
}
