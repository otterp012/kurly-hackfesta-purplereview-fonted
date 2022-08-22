import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import LineChart from "../components/chart/LineChart";
import PieChart from "../components/chart/pieChart";
import BigLogo from "../components/layout/BigLogo";
import BarChart from "../components/chart/barChart";
import Select from "../components/UI/select";
import ReviewByQuestion from "../components/reviewByQuestion";

const Home: NextPage = () => {
  const router = useRouter();
  // const onChagneHandler = (e: React.ChangeEvent) => {
  //   router.push("/selected=id");
  // };

  return (
    <div className='min-h-screen w-[1140px] bg-main py-3 px-5 space-y-5 flex flex-col items-center justify-center'>
      <div className='min-h-[80vh] bg-gray flex flex-col space-y-5'>
        <div>
          <BigLogo color='white' width='280px' height='240px' />
          <h1 className='text-4xl text-white'>리뷰 관리자페이지</h1>
        </div>
        <ul className='bg-white min-h-[50%]'>
          <li className='text-3xl'>123</li>
          <li className='text-3xl'>123</li>
          <li className='text-3xl'>123</li>
          <li className='text-3xl'>123</li>
          <li className='text-3xl'>123</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
