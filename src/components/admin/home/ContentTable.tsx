import { adminTableHeader } from '@/constants';
import DetailButton from './DetailButton';
import { Dispatch, SetStateAction } from 'react';

export default function ContentTable({
  data,
  handleButtonClick,
  detail,
}: {
  data: number[];
  handleButtonClick: Dispatch<SetStateAction<number | null>>;
  detail: number | null;
}) {
  return (
    <table className='mb-[20px] h-[210px] w-full text-[12px] text-custom-gray-dark'>
      <tr>
        {/* table header */}
        {adminTableHeader.map((item) => (
          <th
            className={`h-[40px] border border-[#CECECE] bg-custom-gray-lighter font-bold leading-none ${item.id === 1 && 'rounded-tl-[4px]'} ${item.id === 7 && 'rounded-tr-[4px]'}`}
            style={{ width: item.width }}
            key={item.id}
          >
            {item.title}
          </th>
        ))}
      </tr>
      {data.map((item) => (
        <tr key={item}>
          <td className='h-[35px] border text-center font-medium text-custom-gray-600 hover:text-custom-gray-dark'>
            {item}
          </td>
          <td className='h-[35px] border text-center font-medium text-custom-gray-600 hover:text-custom-gray-dark'>
            {item}
          </td>
          <td className='h-[35px] border text-center font-medium text-custom-gray-600 hover:text-custom-gray-dark'>
            {item}
          </td>
          <td className='h-[35px] border text-center font-medium text-custom-gray-600 hover:text-custom-gray-dark'>
            {item}
          </td>
          <td className='h-[35px] border text-center font-medium text-custom-gray-600 hover:text-custom-gray-dark'>
            {item}
          </td>
          <td className='h-[35px] border text-center font-medium text-custom-gray-600 hover:text-custom-gray-dark'>
            {item}
          </td>
          <td className='h-[35px] border text-center font-medium text-custom-gray-600 hover:text-custom-gray-dark'>
            <DetailButton
              detail={detail}
              item={item}
              handleButtonClick={() => {
                handleButtonClick(item);
              }}
            />
          </td>
        </tr>
      ))}
    </table>
  );
}
