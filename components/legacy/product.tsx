const Product = ({
  Img,
  title,
  price,
}: {
  Img: string;
  title: string;
  price: string;
}) => {
  return (
    <div className='mt-5 flex'>
      <div className='mr-5'>
        <img src={Img} alt='test' className='w-[110px]' />
      </div>

      <div className='flex flex-col justify-around'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <div>
          <span className='text-xl text-[#f5794e] font-bold'>22%</span>
          <span className='text-xl font-bold ml-2'>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
