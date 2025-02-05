import useMyWordList from '@/hooks/myWordList/useMyWordList';
import TutorialModal from '@/components/myWordList/Tutorial/TutorialModal';
import ProfileSection from '@/components/myWordList/ProfileSection';
import ScoreBoard from '@/components/myWordList/ScoreBoard';
import MyWordListNavBar from '@/components/myWordList/MyWordListNavBar';
import WordList from '@/components/myWordList/WordList';
import useLearningStatus from '@/hooks/myWordList/api/useLearningStatus';

export default function MyWordList() {
  const {
    showTutorial,
    setShowTutorial,
    activeMenu,
    setActiveMenu,
    showTooltip,
    setShowTooltip,
    showModal,
    setShowModal,
  } = useMyWordList();
  const { username, totalScrap, totalGraduation, totalKeyNote, accuracyRate, isLoading } =
    useLearningStatus();

  if (isLoading) return <div />;

  return (
    <section className='px-4 pt-10'>
      <TutorialModal
        showTutorial={showTutorial}
        setShowTutorial={setShowTutorial}
        setShowTooltip={setShowTooltip}
      />
      <div className='relative mx-auto min-w-[343px] max-w-[353px] desktop:max-w-[812px]'>
        <div className='mx-auto w-full max-w-[353px] pb-[22px] desktop:pb-6'>
          <ProfileSection username={username} totalKeyNote={totalKeyNote} />
          <ScoreBoard
            totalScrap={totalScrap}
            totalGraduation={totalGraduation}
            accuracyRate={accuracyRate}
          />
        </div>
        <div className='h-2.5 w-full bg-custom-gray-lighter' />
        <MyWordListNavBar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isTutorial={false}
        />
        <WordList
          activeMenu={activeMenu}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
          setShowModal={setShowModal}
          showModal={showModal}
          showTutorial={showTutorial}
        />
      </div>
    </section>
  );
}
