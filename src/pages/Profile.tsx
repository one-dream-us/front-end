export default function Profile() {
  return (
    <div className='desktop:px-[128px] m-auto mt-[40px] w-full px-4'>
      <h1 className='mb-6 text-[22px] font-bold'>프로필</h1>

      <div className='desktop:flex desktop:items-center desktop:justify-center desktop:gap-x-[58px] block'>
        <div>
          <div className='desktop:h-[177px] desktop:w-[254px] m-auto mb-2 flex h-[385px] w-[201px] flex-col items-center justify-between'>
            <div className='h-[127px]'>
              <div className='mb-3 h-[88px] w-[88px] rounded-full bg-custom-gray-medium'></div>
              <h3 className='text-center text-lg font-bold text-custom-gray-medium'>Money</h3>
            </div>

            <div className='text-xs'>
              스크랩 178 | 본 콘텐츠 <span className='text-custom-gray-medium'>124</span>
            </div>

            <div className='desktop:hidden flex h-[198px] w-full flex-col items-center justify-between rounded-lg border p-4'>
              <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-xs'>
                <span>이메일</span>
                <span className='text-custom-gray-dark'>money@kakao.com</span>
              </div>

              <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-xs'>
                <span>가입일자</span>
                <span className='text-custom-gray-dark'>2024.12.09</span>
              </div>

              <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-xs'>
                <span>가입경로</span>
                <span className='text-custom-gray-dark'>카카오 소셜 회원가입</span>
              </div>
            </div>
          </div>

          <div
            role='button'
            className='desktop:mt-[32px] m-auto flex h-[30px] w-[200px] items-center justify-center rounded-lg bg-custom-gray text-xs'
          >
            로그아웃
          </div>
        </div>
        <div className='desktop:flex desktop:h-[241px] desktop:w-[811px] desktop:flex-col desktop:items-start desktop:justify-between hidden rounded-lg border-2 p-8'>
          <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-xs'>
            <span>이메일</span>
            <span className='text-custom-gray-dark'>money@kakao.com</span>
          </div>

          <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-xs'>
            <span>가입일자</span>
            <span className='text-custom-gray-dark'>2024.12.09</span>
          </div>

          <div className='flex h-[42px] w-[169px] flex-col items-start justify-between text-xs'>
            <span>가입경로</span>
            <span className='text-custom-gray-dark'>카카오 소셜 회원가입</span>
          </div>
        </div>
      </div>

      <div
        role='button'
        className='desktop:absolute desktop:bottom-[180px] desktop:right-[128px] m-auto mb-[60px] mt-[130px] h-[18px] w-[44px] text-xs text-custom-gray-medium underline underline-offset-2'
      >
        회원탈퇴
      </div>
    </div>
  );
}
