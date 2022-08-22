import PieChart from "../chart/pieChart";
import Select from "../UI/select";

const ReviewByQuestion = () => {
  return (
    <div className='h-[50%]'>
      <div className='px-5 h-[20%] bg-[#fff] flex items-center justify-between'>
        <span className='mr-5'>Depth2</span>

        <Select />
      </div>

      <div className='h-[80%]'>
        <PieChart />
      </div>
    </div>
  );
};

export default ReviewByQuestion;
