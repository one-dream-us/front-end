import logo from '@/assets/imgs_v2/exit_modal.png';
import LinkForm from '@/components/admin/contentUpload/linkUpload/LinkForm';
export default function LinkUpload() {
  return (
    <div className='absolute left-0 top-0 flex h-screen w-full items-center justify-center'>
      <div className='h-[298px] w-[626px]'>
        <img src={logo} className='m-auto mb-[20px] h-[180px] w-[332px]' alt='logo' />
        <h1 className='mb-[16px] text-center text-[20px] font-medium leading-normal tracking-[-2%] text-custom-black-light'>
          URL을 입력해 주세요.
        </h1>
        <LinkForm />
      </div>
    </div>
  );
}
