import { CurrentTabType, UploadedListContent } from '@/types/interface';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

function ContentTableItem({
  id,
  thumbnailUrl,
  title,
  newsAgency,
  link,
  createdAt,
  currentTab,
}: UploadedListContent & { currentTab: CurrentTabType }) {
  // 실제 UploadedListContent 데이터 x, 타입만 맞춰줌
  const navigate = useNavigate();
  const navigateUrl =
    currentTab === 'draft'
      ? `/admin/update/${id}?status=draft`
      : `/admin/content/
            ${id}?status=${currentTab}`;
  return (
    <tr onClick={() => navigate(navigateUrl)} key={id} className='cursor-pointer hover:bg-gray-50'>
      <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900'>
        {thumbnailUrl ? (
          <img className='h-12 min-w-20 rounded object-cover' src={thumbnailUrl} alt='thumbnail' />
        ) : (
          <div className='flex h-12 w-20 items-center justify-center rounded bg-gray-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6 text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
              />
            </svg>
          </div>
        )}
      </td>
      <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900'>{title}</td>
      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>{newsAgency}</td>
      <td className='whitespace-nowrap px-6 py-4 text-sm text-blue-700 hover:text-red-700'>
        <a onClick={(e) => e.stopPropagation()} target='_blank' href={link}>
          Click
        </a>
      </td>
      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
        {createdAt?.split('T')[0]}
      </td>
    </tr>
  );
}

export default memo(ContentTableItem);
