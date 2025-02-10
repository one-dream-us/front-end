import useInput from '@/hooks/admin/useInput';

export default function NewsContentForm() {
  const word = useInput();
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div key={item} className='rounded-md border bg-gray-50 p-4'>
          <h3 className='mb-3 flex items-center gap-2 font-medium'>
            <span className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white'>
              {item}
            </span>
            <span>문장, 용어, 해설 입력</span>
          </h3>
          <div className='space-y-4'>
            <div>
              <label className='mb-1 block text-sm font-medium text-gray-700'>문장</label>
              <input
                type='text'
                className='w-full rounded-md border p-2'
                placeholder={`문장 ${item}을 입력하세요`}
              />
            </div>
            <div>
              <label className='mb-1 block text-sm font-medium text-gray-700'>용어</label>
              <input
                value={word.value}
                onChange={word.handleInputChange}
                type='text'
                className='w-full rounded-md border p-2'
                placeholder={`용어 ${item}을 입력하세요`}
              />
            </div>
            <div>
              <label className='mb-1 block text-sm font-medium text-gray-700'>해설</label>
              <textarea
                className='w-full resize-none rounded-md border p-2'
                rows={3}
                placeholder={`해설 ${item}을 입력하세요`}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
