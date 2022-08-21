import { useState } from "react";

const Question = ({
  question,
  answers,
}: {
  question: string;
  answers: string[];
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const onChangeHandler = (e: React.ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    setSelectedValue(e.target.value);
  };
  return (
    <>
      <p className='text-2xl font-semibold pt-3'>{question}</p>
      <div className='space-y-2 px-4 mt-3'>
        {answers.map((v) => (
          <div key={v} className='w-full'>
            <input
              type='radio'
              id={v}
              className='form-radio mr-3 text-main focus:ring-0'
              onChange={onChangeHandler}
              value={v}
              checked={selectedValue === v}
            />
            <label htmlFor={v}>{v}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Question;
