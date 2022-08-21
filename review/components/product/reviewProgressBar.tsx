type ReviewProgressBarProps = {
  description: string;
  ratio: number;
};

const ReviewProgressBar: React.FC<ReviewProgressBarProps> = ({
  description,
  ratio,
}) => {
  return (
    <div className='flex w-full items-center mt-1'>
      <span className='text-md mr-1 w-24 font-semibold'>{description}</span>
      <div className='flex items-center w-48 mr-5'>
        <progress
          className='daisy-progress daisy-progress-primary fill-main w-full'
          value={ratio}
          max='100'
        />
      </div>
      <span className='text-md font-semibold'>{ratio}%</span>
    </div>
  );
};

export default ReviewProgressBar;
