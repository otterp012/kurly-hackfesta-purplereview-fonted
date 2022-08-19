import { ReactComponent as LogoIcon } from "./assets/kurly.svg";
import Layout from "./layout/layout";
import Product from "./product";
import Question from "./question";
import Rating from "./rating";

const Research = ({ data }) => {
  const { question } = data;
  return (
    <div className='flex'>
      <Layout isReview={true}>
        <div className='w-full px-5 h-[75%]'>
          <Product Img={data.img} title={data.title} price={data.price} />
          <div className='mt-10 text-xl font-bold text-center'>
            DEFAULT QUESTION
          </div>
          <div className='h-[30%] flex flex-col mb-5'>
            <Rating question='제품이 만족스러우셨나요?' checknum={3} />
            <span className='mt-10 text-lg font-bold'>
              배송이 만족스러우셨나요?
            </span>
            <div className='flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 mr-5'
                fill='#5f0580'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5'
                />
              </svg>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
            <button className='mt-14 bg-gray-300 px-5 py-2 rounded-lg font-bold'>
              상세한 리뷰 작성하기
            </button>
          </div>
        </div>
      </Layout>

      <Layout isReview={true}>
        <div className='w-full px-5 h-[75%]'>
          <Product Img={data.img} title={data.title} price={data.price} />
          {question.map((v) => (
            <Question question={v.q} answers={v.a} />
          ))}
        </div>
      </Layout>

      <Layout isReview={true}>
        <div className='w-full px-5 h-[75%]'>
          <Question
            question='발림성은 어떠셨나요?'
            answers={["좋았어요", "보통", "아쉬웠어요"]}
          />
          <input
            type='text'
            className='w-full px-5 h-[40%] mt-5 py-5 border border-slate-400 placeholder:absolute rounded-md'
            placeholder='추가적인 리뷰를 입력해주세요.'
          />
          <div className='flex items-center justify-center'>
            <button className='mt-5 bg-gray-300 px-8 py-2 rounded-lg font-bold'>
              제출하기
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Research;
