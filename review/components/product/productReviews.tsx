import ReviewProgressBar from "./reviewProgressBar";

const ProductReview = () => {
  return (
    <div className='flex flex-col pt-1 px-2'>
      <div className='flex flex-col h-[120px]'>
        <div className='flex justify-between items-end'>
          <span className='w-40 text-lg text-start font-bold'>단단한가요?</span>
          <span className='text-lg ml-5 text-primary font-bold'>
            만족해요. 98%
          </span>
        </div>
        <ReviewProgressBar description='만족해요' ratio={94} />
        <ReviewProgressBar description='보통이에요' ratio={34} />
        <ReviewProgressBar description='별로에요' ratio={24} />
      </div>
    </div>
  );
};

export default ProductReview;
