import Image from "next/image";

type ProductDetailProps = {
  img: string;
  title: string;
  price: string;
};

const Product = ({ img, title, price }: ProductDetailProps) => {
  return (
    <section className='w-full h-100'>
      <div className='w-full h-80 px-2 py-3'>
        <Image
          src={img}
          alt={title}
          width={400}
          height={350}
          objectFit='cover'
        />
      </div>

      <div className='flex flex-col w-full px-2 mt-2'>
        <span className='text-sm text-[#e1e1e1]'>샛별 배송</span>
        <h3 className='text-xl font-bold mb-2'>[라로슈포제] {title}</h3>
        <div>
          <span className='text-2xl font-bold'>{price.replace("원", "")}</span>{" "}
          <span>원</span>
        </div>
      </div>
    </section>
  );
};
export default Product;
