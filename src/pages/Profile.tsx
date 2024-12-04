export default function Profile() {
  return (
    <div className='m-auto mt-[40px] w-full px-4 lg:px-[128px]'>
      <h1 className='mb-6 text-[22px] font-bold'>프로필</h1>

      <div className='block lg:flex lg:items-center lg:justify-center lg:gap-x-[58px]'>
        <div>
          <div className='m-auto mb-2 flex h-[385px] w-[201px] flex-col items-center justify-between lg:h-[177px] lg:w-[254px]'>
            <div className='h-[127px]'>
              <div className='mb-3 h-[88px] w-[88px] rounded-full bg-custom-gray-medium'></div>
              <h3 className='text-center text-lg font-bold text-custom-gray-medium'>Money</h3>
            </div>

            <div className='text-xs'>
              스크랩 178 | 본 콘텐츠 <span className='text-custom-gray-medium'>124</span>
            </div>

            <div className='flex h-[198px] w-full flex-col items-center justify-between rounded-lg border p-4 lg:hidden'>
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
            className='m-auto flex h-[30px] w-[200px] items-center justify-center rounded-lg bg-custom-gray text-xs lg:mt-[32px]'
          >
            로그아웃
          </div>
        </div>
        <div className='hidden rounded-lg border-2 p-8 lg:flex lg:h-[241px] lg:w-[811px] lg:flex-col lg:items-start lg:justify-between'>
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
        className='m-auto mb-[60px] mt-[130px] h-[18px] w-[44px] text-xs text-custom-gray-medium underline underline-offset-2 lg:absolute lg:bottom-[180px] lg:right-[128px]'
      >
        회원탈퇴
      </div>
    </div>
  );
}
