import notFoundImg from '@/assets/icons/not_found.svg';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className='mx-auto mb-10 mt-10 flex flex-col items-center px-4 text-custom-black md:mb-[129px] md:px-6 desktop:mb-[177px] desktop:px-[128px]'>
      <h1 className='self-start text-[22px] font-medium'>404: 이런!</h1>
      <div className='mb-[70px] mt-[72px] flex flex-col items-center md:mt-[130px] desktop:mt-[103px]'>
        <h2 className='mb-[18px] text-lg font-medium'>페이지를 찾지 못했어요!</h2>
        <img src={notFoundImg} alt='페이지를 찾지 못한다는 이미지' className='mb-7' />
        <p className='text-center text-custom-gray-dark md:text-sm'>
          하지만 재밌고 유익한 투자 콘텐츠가 있죠!
          <br />
          모니가 안내해 드릴게요!
        </p>
      </div>
      <Button text='홈으로 돌아가기' onClick={() => navigate('/')} />
    </section>
  );
}
