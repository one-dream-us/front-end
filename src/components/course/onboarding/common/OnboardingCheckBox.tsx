import { Dispatch, SetStateAction } from 'react';

export default function OnboardingCheckBox({
  showOnboarding,
  setShowOnboarding,
}: {
  showOnboarding: string;
  setShowOnboarding: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className='flex items-center justify-center'>
      <input
        id='link-checkbox'
        type='checkbox'
        className={`focus:ring-main-lime h-5 w-5 cursor-pointer rounded-sm border border-white bg-center bg-no-repeat checked:border-none checked:bg-[url('@/assets/icons/check.svg')]`}
        onChange={(e) => {
          if (e.target.checked) {
            setShowOnboarding('false');
          } else {
            setShowOnboarding('true');
          }
        }}
        checked={showOnboarding === 'false'}
      />
      <label
        htmlFor='link-checkbox'
        className='ms-2 cursor-pointer text-[14px] font-medium text-custom-gray-lighter'
      >
        다시 보지 않기
      </label>
    </div>
  );
}
