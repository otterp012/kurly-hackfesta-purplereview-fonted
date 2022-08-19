import Layout from "./layout/layout";
import Product from "./product";

const ProduceByReview = ({ data }) => {
  return (
    <div className='flex'>
      <Layout isReview={false}>
        <div className='h-[70%]'>
          <div className='text-md font-semibold mb-5 text-center mt-5'>
            피부타입이 건성이신 분들에게 추천드려요
          </div>
          <div className='w-full px-5 h-[70%]'>
            <Product Img={data.img} title={data.title} price={data.price} />
          </div>
        </div>
      </Layout>

      <Layout isReview={false}>
        <div className='w-full px-5 h-[70%]'>
          <Product Img={data.img} title={data.title} price={data.price} />
          <p className='mt-5 text-gray-500 font-bold'>
            데일리 진정 및 보습 케어 시카 크림
          </p>

          <div className='flex flex-col h-[100px] mt-5'>
            <div className='flex justify-between'>
              <span className='badge'>발림성</span>
              <span className='text-xs ml-5 text-primary font-bold'>
                보통이에요. 78%
              </span>
            </div>
            <div className='flex w-full items-center mt-2 justify-between'>
              <span className='text-xs mr-1 w-14'>만족해요.</span>
              <div className='flex items-center w-40'>
                <progress className='progress w-40' value='56' max='100' />
              </div>
              <span className='text-xs'>56%</span>
            </div>
            <div className='flex w-full items-center mt-2 justify-between'>
              <span className='text-xs mr-1 w-14 text-primary font-semibold'>
                보통이에요.
              </span>
              <div className='flex items-center w-40'>
                <progress
                  className='progress progress-primary w-40'
                  value='78'
                  max='100'
                />
              </div>
              <span className='text-xs text-primary font-semibold'>78%</span>
            </div>
            <div className='flex w-full items-center mt-2 justify-between'>
              <span className='text-xs mr-1 w-14'>아쉬워요.</span>
              <div className='flex items-center w-40'>
                <progress className='progress w-40' value='23' max='100' />
              </div>
              <span className='text-xs'>23%</span>
            </div>

            {/* divide */}
            <div className='flex flex-col h-[100px] mt-5'>
              <div className='flex justify-between'>
                <span className='badge w-14 text-xs'>자극</span>
                <span className='text-xs ml-5 text-primary font-bold'>
                  만족해요. 98%
                </span>
              </div>
              <div className='flex w-full items-center mt-2 justify-between'>
                <span className='text-xs mr-1 w-14 text-primary font-semibold'>
                  만족해요.
                </span>
                <div className='flex items-center w-40'>
                  <progress
                    className='progress progress-primary w-40'
                    value='98'
                    max='100'
                  />
                </div>
                <span className='text-xs text-primary font-semibold'>98%</span>
              </div>
              <div className='flex w-full items-center mt-2 justify-between'>
                <span className='text-xs mr-1 w-14'>보통이에요.</span>
                <div className='flex items-center w-40'>
                  <progress className='progress w-40' value='32' max='100' />
                </div>
                <span className='text-xs'>78%</span>
              </div>
              <div className='flex w-full items-center mt-2 justify-between'>
                <span className='text-xs mr-1 w-14'>아쉬워요.</span>
                <div className='flex items-center w-40'>
                  <progress className='progress w-40' value='13' max='100' />
                </div>
                <span className='text-xs'>13%</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProduceByReview;
