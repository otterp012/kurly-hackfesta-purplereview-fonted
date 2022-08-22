import type { NextPage } from "next";
import Link from "next/link";
import BigLogo from "../components/layout/bigLogo";
import Layout from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='mt-[50%] md:mt-[30%] flex flex-col items-center justify-end space-y-2'>
        <BigLogo color='white' />
        <h1 className='text-3xl font-bold max-w-full break-words text-center text-white'>
          컬리만을 위한, <br />
          키워드 리뷰 시스템
        </h1>
      </div>

      <div className='w-full text-center mt-5 space-y-5'>
        <Link href={"/ordered"}>
          <a className='w-[70%] bg-[#d1d5db] text-main font-bold py-5 text-2xl inline-block rounded-lg hover:bg-white'>
            리뷰 시작하기
          </a>
        </Link>
        <Link href={"/ordered"}>
          <a className='w-[70%] bg-[#d1d5db] text-main py-5 font-bold text-2xl inline-block rounded-lg hover:bg-white'>
            관리자 페이지 둘러보기
          </a>
        </Link>
      </div>

      <div className='w-full text-center'>
        <span className='inline-block text-md text-lightGray font-semibold mt-5'>
          컬리가 컬컬컬
        </span>
        <div className='w-full space-x-3 text-lightGray text-sm text-gray-600'>
          <span>유진</span>
          <span>재현</span>
          <span>정호</span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
