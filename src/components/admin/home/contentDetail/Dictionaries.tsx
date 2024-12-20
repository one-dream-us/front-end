export default function Dictionaries() {
  return (
    <div>
      <h1 className='mb-[12px] text-[16px] font-bold text-custom-black-light'>제공단어</h1>
      <div className='h-[240px] max-w-[1182px] overflow-y-auto rounded-[4px] border border-custom-gray-300 bg-view p-[20px]'>
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className='m-auto mb-[11px] h-[92px] max-w-[1144px] rounded-[10px] border border-custom-gray-200 bg-white px-[20px] py-[12px]'
          >
            <h1 className='mb-[8px] text-[14px] font-bold leading-170'>title</h1>
            <p className='text-[12px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae alias illum iure, eius
              non optio officia ducimus eligendi praesentium sunt, neque distinctio, nulla
              reiciendis rerum iste nam aspernatur enim voluptas. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quaerat minus at enim a voluptatem ducimus voluptatibus
              impedit sapiente perferendis tempora iste dolorem, unde exercitationem porro aut id
              est amet blanditiis!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
