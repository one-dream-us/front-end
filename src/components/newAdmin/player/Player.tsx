import { useState, useRef, useEffect, MouseEvent } from 'react';
import hsh from '@/assets/mp3/G-DRAGON - HOME SWEET HOME (feat. TAEYANG DAESUNG).mp3';
import bebe from '@/assets/mp3/BIGBANG - BAE BAE.mp3';
import ifyou from '@/assets/mp3/BIGBANG - IF YOU.mp3';
import lie from '@/assets/mp3/BIGBANG - Lie (거짓말).mp3';
import flowerroad from '@/assets/mp3/BIGBANG - 꽃 길 (FLOWER ROAD).mp3';
import lastfarewell from '@/assets/mp3/BIGBANG - 마지막 인사 (LAST FAREWELL).mp3';
import sunset from '@/assets/mp3/BIGBANG - 붉은 노을 (Sunset Glow).mp3';
import zutter from '@/assets/mp3/BIGBANG - 쩔어 (ZUTTER) (GD & T.O.P).mp3';
import ibeing2you from '@/assets/mp3/G-DRAGON - IBELONGIIU.mp3';
import power from '@/assets/mp3/G-DRAGON - POWER.mp3';
import toobad from '@/assets/mp3/G-DRAGON - TOO BAD (feat. Anderson .Paak).mp3';
import blueSong from '@/assets/mp3/BIGBANG - BLUE.mp3';
import fourseason from '@/assets/mp3/BIGBANG - 봄여름가을겨울 (Still Life).mp3';

const Player = () => {
  const songs = [
    { title: 'BAE BAE(ㄹㅈㄷ1)', file: bebe },
    { title: '꽃길', file: flowerroad },
    { title: '마지막 인사', file: lastfarewell },
    { title: '거짓말', file: lie },
    { title: 'BLUE(ㄹㅈㄷ2)', file: blueSong },
    { title: 'POWER', file: power },
    { title: 'IF YOU', file: ifyou },
    { title: 'TOO BAD', file: toobad },
    { title: '봄여가겨(ㄹㅈㄷ3)', file: fourseason },
    { title: '붉은 노을', file: sunset },
    { title: 'IBELONGIIU', file: ibeing2you },
    { title: '쩔어', file: zutter },
    { title: 'HOME SWEET HOME', file: hsh },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0); // 진행 상황
  const [showList, setShowList] = useState(false);

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

  return (
    <div className='music-player relative ml-auto hidden items-center gap-x-3 opacity-50 md:flex'>
      <button onClick={() => setShowList((prev) => !prev)}>
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
            d={showList ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5'}
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
              onClick={() => setCurrentSongIndex(index)}
              className='mb-2 line-clamp-1 cursor-pointer p-1 hover:bg-black hover:bg-opacity-25'
              key={item.title}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
      <div>
        <h2>{songs[currentSongIndex].title}</h2>
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
    </div>
  );
};

export default Player;
