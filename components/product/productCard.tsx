import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductCard = ({
  img,
  title,
  price,
}: {
  img: string;
  title: string;
  price: string;
}) => {
  const { pathname } = useRouter();
  return (
    <>
      <Link href={"/productDetail"} passHref>
        <a>
          <li
            className={`w-full h-28 flex space-x-2 mt-3 mb-5 ${
              pathname === "/review" && "border-[#d1d5db] border"
            }`}
          >
            <div className='w-[25%] h-full px-2 py-3'>
              <Image
                src={img}
                alt={title}
                width={300}
                height={350}
                objectFit='cover'
              />
            </div>
            <div className='flex flex-col py-3 w-[75%]'>
              <h3 className='text-md text-black'>[라로슈포제]{title}</h3>
              <div>
                <span className='text-md font-bold border-r pr-2 text-black'>
                  {price}
                </span>
                <span className='text-md ml-2 text-gray-500'>1개</span>
              </div>
              <div className='mt-3 flex justify-between'>
                <span className='text-sm'>배송완료</span>
                {pathname === "/ordered" && (
                  <Link href='/review' passHref>
                    <a className='bg-main py-2 px-3 rounded-sm text-sm text-white'>
                      후기쓰기
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </li>
        </a>
      </Link>
    </>
  );
};

export default ProductCard;
