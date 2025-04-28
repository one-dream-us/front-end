import { useState, useRef, useEffect, MouseEvent } from 'react';
import hsh from '@/assets/mp3/G-DRAGON - HOME SWEET HOME (feat. TAEYANG DAESUNG).mp3';
import bebe from '@/assets/mp3/baebae.mp3';
import ifyou from '@/assets/mp3/ifYou.mp3';
import lie from '@/assets/mp3/lie.mp3';
import flowerroad from '@/assets/mp3/flowerRoad.mp3';
import lastfarewell from '@/assets/mp3/lastFarewell.mp3';
import sunset from '@/assets/mp3/sunset.mp3';
import zutter from '@/assets/mp3/zutter.mp3';
import ibeing2you from '@/assets/mp3/G-DRAGON - IBELONGIIU.mp3';
import power from '@/assets/mp3/G-DRAGON - POWER.mp3';
import toobad from '@/assets/mp3/G-DRAGON - TOO BAD (feat. Anderson .Paak).mp3';
import blueSong from '@/assets/mp3/blue.mp3';
import fourseason from '@/assets/mp3/stillLife.mp3';
import goodboy from '@/assets/mp3/goodboy.mp3';
import fxxkit from '@/assets/mp3/fxxkit.mp3';
import haruharu from '@/assets/mp3/haruharu.mp3';
import lalala from '@/assets/mp3/lalala.mp3';
import universe from '@/assets/mp3/universe.mp3';
import usbefore from '@/assets/mp3/usbefore.mp3';
import bangabangbang from '@/assets/mp3/bangbangbang.mp3';
import heartbreaker from '@/assets/mp3/Heartbreaker.mp3';
import goodDay from '@/assets/mp3/goodDay.mp3';
import whoyou from '@/assets/mp3/whoyou.mp3';
import drama from '@/assets/mp3/drama.mp3';
import middleFingersUp from '@/assets/mp3/MiddleFingersUp.mp3';

import { motion } from 'framer-motion';

const Player = () => {
  const songs = [
    { title: '굿 데이', file: goodDay },
    { title: 'Heartbreaker', file: heartbreaker },
    { title: '네가 뭔데', file: whoyou },
    { title: 'Drama', file: drama },
    { title: 'Middle Fingers-Up', file: middleFingersUp },
    { title: 'Universe', file: universe },
    { title: '그 시절의 우리', file: usbefore },
    { title: 'La La La', file: lalala },
    { title: '거짓말', file: lie },
    { title: '마지막 인사', file: lastfarewell },
    { title: '하루하루', file: haruharu },
    { title: '붉은 노을', file: sunset },
    { title: 'BLUE', file: blueSong },
    { title: 'GOOD BOY', file: goodboy },
    { title: 'BAE BAE', file: bebe },
    { title: 'IF YOU', file: ifyou },
    { title: '뱅뱅뱅', file: bangabangbang },
    { title: '쩔어', file: zutter },
    { title: '에라 모르겠다', file: fxxkit },
    { title: '꽃길', file: flowerroad },
    { title: '봄여가겨', file: fourseason },
    { title: 'POWER', file: power },
    { title: 'HOME SWEET HOME', file: hsh },
    { title: 'TOO BAD', file: toobad },
    { title: 'IBELONGIIU', file: ibeing2you },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0); // 진행 상황
  const [showList, setShowList] = useState(false);
  const listRef = useRef<HTMLLIElement>(null);

  // 노래 재생/정지
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 다음 곡
  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  // 이전 곡
  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
  };

  // 반복 모드
  const toggleLoop = () => {
    if (!audioRef.current) return;
    setIsLooping(!isLooping);
    audioRef.current.loop = !audioRef.current.loop;
  };

  // 진행률 바 업데이트
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    if (audioRef.current.duration) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  // 클릭해서 진행률 변경
  const handleProgressClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const newTime =
      (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  // `audio`의 `onTimeUpdate` 이벤트를 활용하여 진행 상태 업데이트
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  useEffect(() => {
    if (!listRef.current) return;

    listRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [showList]);

  return (
    <>
      <motion.div
        layout
        layoutId='music-player'
        className='music-player relative ml-auto hidden items-center gap-x-3 md:flex'
      >
        <button onClick={() => setShowList((prev) => !prev)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'
            />
          </svg>
        </button>
        {showList && (
          <ul
            onClick={() => setShowList((prev) => !prev)}
            className='absolute -bottom-40 left-0 max-h-40 w-full overflow-y-auto border bg-white'
          >
            {songs.map((item, index) => (
              <li
                ref={index === currentSongIndex ? listRef : null}
                data-index={index}
                onClick={() => setCurrentSongIndex(index)}
                className={`mb-2 line-clamp-1 cursor-pointer p-1 hover:bg-black hover:bg-opacity-25 ${index === currentSongIndex && 'bg-hover-30'}`}
                key={item.title}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
        <div>
          <h2>
            {songs[currentSongIndex].title} ({currentSongIndex + 1}/{songs.length})
          </h2>
          <div className='progress-bar' onClick={handleProgressClick}>
            <progress className='h-[5px] cursor-pointer' value={progress} max={100}></progress>
          </div>
          <audio
            ref={audioRef}
            src={songs[currentSongIndex].file}
            onEnded={nextSong}
            autoPlay={isPlaying}
          />
          <div>
            {' '}
            <div className='controls flex items-center justify-between'>
              <button onClick={prevSong}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z'
                  />
                </svg>
              </button>
              <button onClick={togglePlayPause}>
                {/* {isPlaying ? 'Pause' : 'Play'} */}

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d={
                      isPlaying
                        ? 'M15.75 5.25v13.5m-7.5-13.5v13.5'
                        : 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                    }
                  />
                </svg>
              </button>
              <button onClick={nextSong}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z'
                  />
                </svg>
              </button>
              <button onClick={toggleLoop}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d={
                      isLooping
                        ? 'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
                        : 'M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3'
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Player;

// const PlayerModal = ({
//   closeModal,
//   songs,
//   setCurrentSongIndex,
//   currentSongIndex,
// }: {
//   closeModal: () => void;
//   songs: { title: string; file: string }[];
//   setCurrentSongIndex: Dispatch<SetStateAction<number>>;
//   currentSongIndex: number;
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className='fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,.5)]'
//     >
//       <motion.ul
//         layout
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         layoutId='music-player'
//         className='relative flex h-[450px] w-[450px] flex-col gap-y-5 overflow-auto rounded-xl bg-white p-5'
//       >
//         <button onClick={closeModal} className='sticky top-2 ml-auto'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={1.5}
//             stroke='currentColor'
//             className='size-6'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               d='M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25'
//             />
//           </svg>
//         </button>

//         {songs.map((item, index) => (
//           <li
//             onClick={() => setCurrentSongIndex(index)}
//             className={`cursor-pointer rounded-lg p-2 hover:bg-[rgba(0,0,0,.3)] ${currentSongIndex === index ? 'bg-[rgba(0,0,0,.3)]' : ''}`}
//             key={item.title}
//           >
//             {item.title}
//           </li>
//         ))}
//       </motion.ul>
//     </motion.div>
//   );
// };
