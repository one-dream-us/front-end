import useMyWordList from '@/hooks/myWordList/useMyWordList';
import TutorialModal from '@/components/myWordList/Tutorial/TutorialModal';
import ProfileSection from '@/components/myWordList/ProfileSection';
import ScoreBoard from '@/components/myWordList/ScoreBoard';
import MyWordListNavBar from '@/components/myWordList/MyWordListNavBar';
import WordList from '@/components/myWordList/WordList';
import useLearningStatus from '@/hooks/myWordList/api/useLearningStatus';
import { useQuery } from '@tanstack/react-query';
import newsApi from '@/services/newsApi';

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

  const { data, isLoading: isDaysLearning } = useQuery({
    queryKey: ['learningDays'],
    queryFn: newsApi.getLearningDays,
  });

  const {
    username,
    totalScrap,
    totalGraduation,
    totalKeyNote,
    isLoading: isStatusLearning,
  } = useLearningStatus();

  if (isStatusLearning || isDaysLearning) return <div />;

  return (
    <section className='mx-auto mt-10 flex flex-col items-center'>
      <TutorialModal
        showTutorial={showTutorial}
        setShowTutorial={setShowTutorial}
        setShowTooltip={setShowTooltip}
      />
      <div className='mx-auto box-content w-[343px] px-4 pb-6 md:w-[353px] desktop:max-w-[812px] desktop:pb-6'>
        <ProfileSection username={username} totalKeyNote={totalKeyNote} />
        <ScoreBoard totalScrap={totalScrap} totalGraduation={totalGraduation} learningDays={data} />
      </div>
      <div className='h-2.5 w-[343px] bg-custom-gray-lighter md:w-[353px] desktop:w-[812px]' />
      <MyWordListNavBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} isTutorial={false} />
      <WordList
        activeMenu={activeMenu}
        showTooltip={showTooltip}
        setShowTooltip={setShowTooltip}
        setShowModal={setShowModal}
        showModal={showModal}
        showTutorial={showTutorial}
      />
    </section>
  );
}
