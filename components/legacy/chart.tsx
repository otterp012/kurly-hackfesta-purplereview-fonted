import { Line } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  // maintainAspectRatio: false,
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
      },
    },
  },
};

// const labels = ["January", "February", "March"];
const data = {
  img: "https://img-cf.kurly.com/shop/data/goodsview/20210429/gv10000178056_1.jpg",
  title: "시카블라스트밤 B5",
  price: "26,520원",
  question: [
    {
      q: "피부타입이 어떻게 되시나요?",
      a: ["건성", "지성", "복합성"],
    },
    {
      q: "피부타입에, 잘 맞았나요?",
      a: ["잘맞았어요.", "보통", "맞지 않았어요."],
    },
  ],
};

function Chart() {
  const labels = data.question[1].a;
  const reviewData = {
    labels,
    datasets: [
      {
        label: "피부타입별 만족도",
        data: labels.map(() => Math.random() * 100),
        backgroundColor: "rgb(95,5,128)",
      },
    ],
  };
  return (
    <div className='w-full h-screen px-10'>
      <div className='flex py-5 items-center'>
        <div className='text-2xl font-bold'>{data.title}</div>
        <div className='w-[240px] ml-5'>
          <select className='select select-ghost w-[50%] max-w-xs'>
            <option disabled selected>
              피부타입
            </option>
            <option>건성</option>
            <option>지성</option>
            <option>복합성</option>
          </select>
          <select className='select select-ghost w-[50%] max-w-xs'>
            <option disabled selected>
              REVIEW
            </option>
            <option>발림성</option>
            <option>자극</option>
          </select>
        </div>
      </div>
      <div className='space-x-2'>
        <span className='text-lg font-semibold'>제품 만족도: 4.7</span>
        <span className='text-lg font-semibold'>배송 만족도: 4.5</span>
      </div>
      <div className='w-[550px] mt-10'>
        <Bar options={options} data={reviewData} width={300} height={300} />
      </div>
    </div>
  );
}

export default Chart;
