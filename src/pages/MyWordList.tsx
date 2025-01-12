import useMyWordList from '@/hooks/myWordList/useMyWordList';
import TutorialModal from '@/components/myWordList/Tutorial/TutorialModal';
import ProfileSection from '@/components/myWordList/ProfileSection';
import ScoreBoard from '@/components/myWordList/ScoreBoard';
import MyWordListNavBar from '@/components/myWordList/MyWordListNavBar';
import WordList from '@/components/myWordList/WordList';
import useScoreBoardLogic from '@/hooks/myWordList/useScoreBoardLogic';

export default function MyWordList() {
  const { showTutorial, setShowTutorial, activeMenu, setActiveMenu } = useMyWordList();
  const { username, totalScrap, totalGraduation, totalKeyNote, accuracyRate } =
    useScoreBoardLogic();

  return (
    <section className='px-4 pt-10'>
      <TutorialModal showTutorial={showTutorial} setShowTutorial={setShowTutorial} />
      <div className='relative mx-auto min-w-[343px] max-w-[353px] desktop:max-w-[812px]'>
        <div className='mx-auto w-full max-w-[353px] pb-[22px] desktop:pb-6'>
          <ProfileSection username={username} totalKeyNote={totalKeyNote} />
          <ScoreBoard
            totalScrap={totalScrap}
            totalGraduation={totalGraduation}
            accuracyRate={accuracyRate}
          />
        </div>
        <div className='absolute -left-4 h-[10px] w-full bg-custom-gray-lighter' />
        <MyWordListNavBar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isTutorial={false}
        />
        <WordList activeMenu={activeMenu} />
      </div>
    </section>
  );
}
