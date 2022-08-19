const Question = ({
  question,
  answers,
}: {
  question: string;
  answers: string[];
}) => {
  return (
    <>
      <div className='mt-5 mb-3 text-xl font-bold text-[#5f0580]'>
        {question}
      </div>
      <div className='form-control px-5'>
        {answers.map((v) => (
          <label className='label cursor-pointer flex items-start justify-start space-x-2'>
            <input type='checkbox' className='checkbox-sm' />
            <span className='label-text'>{v}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Question;
