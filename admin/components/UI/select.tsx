import { useRouter } from "next/router";
import type { FetchedProductData } from "../../types/types";

type SelectProps = {
  query: string;
  data: FetchedProductData;
};

const Select: React.FC<SelectProps> = ({ query, data }) => {
  const router = useRouter();

  //   const onChangeHandler = (e: React.ChangeEvent) => {
  //     const queryObj: Record<string, string> = {};
  //     queryObj[`${query}`] = e.target.value;
  //     router.push({
  //       pathname: "/reviewByProduct",
  //       query: queryObj,
  //     });
  //   };
  return (
    <select
      className='w-80 form-select py-2 px-3 border-transparent focus:border-l-transparent focus:border-r-transparent  
    focus:border-t-transparent focus:ring-0 border-b-gray'
      //   onChange={onChangeHandler}
    >
      {/* {data &&
        data.map((v) => (
          <option id={v.id} key={v.id} value={v.id}>
            {v.name}
          </option>
        ))} */}
    </select>
  );
};

export default Select;
