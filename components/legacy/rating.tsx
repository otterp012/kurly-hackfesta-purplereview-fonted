import React from "react";

function Rating({
  question,
  checknum,
}: {
  question: string;
  checknum: number;
}) {
  return (
    <div className='mt-5'>
      <div className='text-lg font-semibold'>{question}</div>
      <div className='w-full flex items-center justify-center'>
        <div className='rating mt-2'>
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-[#5f0580]'
            checked={checknum === 1}
          />
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-[#5f0580]'
            checked={checknum === 2}
          />
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-[#5f0580]'
            checked={checknum === 3}
          />
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-[#5f0580]'
            checked={checknum === 4}
          />
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-[#5f0580]'
            checked={checknum === 5}
          />
        </div>
      </div>
    </div>
  );
}

export default Rating;
