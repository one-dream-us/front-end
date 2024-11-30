export default function ContentCard() {
  return (
    <div className='h-96 w-96 px-4'>
      <img
        className='mb-5 h-48 w-full rounded-lg bg-custom-gray-light'
        src=''
        alt='content thumbnail'
      />

      <div className='flex w-full flex-col items-start justify-start gap-y-2'>
        {/* tag */}
        <div className='line-clamp-1 flex items-center justify-normal gap-x-1'>
          {['주식', '폰지사기', 'NAV_프리미엄'].map((item) => (
            <span key={item} className='rounded-lg border px-2 py-1 text-xs'>
              #{item}
            </span>
          ))}
        </div>

        {/* content title */}
        <h1 className='line-clamp-2 text-xl font-extrabold'>
          올해만 뜨거운 544% 상승한 지구상에서 가장 뜨거운 주식
        </h1>

        {/* content desc */}
        <span className='line-clamp-2 text-sm'>
          마이크로스트레티지는 올해 주가가 516% 오르면서 비트코인 투자와 혁신적인 채권 활용 전략으로
          주목받고 있어요
        </span>

        {/* date */}
        <span className='text-xs text-custom-gray-400'>2024.11.27, 스크랩 N</span>
      </div>
    </div>
  );
}
