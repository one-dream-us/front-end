import { Link } from 'react-router-dom';

export default function WithDrawSuccess() {
  return (
    <div className='mt-[40px] px-4 md:px-6 lg:px-[129px]'>
      <h1 className='mb-[72px] text-[22px] font-bold'>회원 탈퇴</h1>

      <div className='m-auto mb-[72px] flex h-[241px] w-[164px] flex-col items-center justify-start md:h-[300px] md:w-[352px]'>
        <h2 className='mb-[18px] text-lg font-bold'>탈퇴가 완료됐어요 🥹</h2>
        <div className='mb-[28px] h-[120px] w-full bg-custom-gray-medium md:h-[180px]'></div>
        <span className='text-center text-sm text-custom-black'>
          이게머니가 그리워지면 <br /> 언제든지 다시 찾아와주세요!
        </span>
      </div>

      <Link to={'/'}>
        <div
          role='link'
          className='m-auto mb-[60px] flex h-[48px] max-w-[343px] items-center justify-center rounded-xl bg-custom-green-money text-sm font-bold'
        >
          홈으로 돌아가기
        </div>
      </Link>
    </div>
  );
}
