import Select from "../UI/select";
import BigLogo from "./BigLogo";
import type { FetchedProductData } from "../../types/types";
const Layout = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: FetchedProductData;
}) => {
  return (
    <div className='min-h-screen w-[1140px] bg-main py-3 px-5 space-y-5'>
      <header className='w-full bg-gray h-24 flex items-center justify-between'>
        <div className='flex items-center'>
          <BigLogo color='white' />
          <h1 className='text-4xl ml-10 font-bold'>리뷰 관리</h1>
        </div>
        <Select query='item' data={data} />
      </header>
      <main className='w-full min-h-[80vh] bg-gray flex'>{children}</main>
    </div>
  );
};

export default Layout;
