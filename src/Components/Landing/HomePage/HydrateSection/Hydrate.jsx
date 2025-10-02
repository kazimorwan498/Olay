import product3 from '../../../../assets/img/product3.png';
import product4 from '../../../../assets/img/product4.png';

const Hydrate = () => {
  return (
    <section className="bg-CRose max-w-[1400px] mx-auto">
      <div
        className="py-7 sm:py-[50px] md:py-[102px] px-6 sm:px-[46px] max-w-[1400px] mx-auto grid place-items-center md:grid-cols-2 1160px:grid-cols-10 gap-[30px]"
        data-aos="fade-up"
        data-aos-mirror="true">
        <img
          className="border-3 border-CRed rounded-[14px] w-[300px] h-[213px] min-w-[270px] xs:min-w-[300px] min-h-[200px] xs:min-h-[213px] 1160px:col-span-3"
          src={product3}
          alt="product3"
        />
        <img
          className="border-3 border-CRed rounded-[13px] w-[300px] h-[213px] min-w-[270px] xs:min-w-[300px] min-h-[200px] xs:min-h-[213px] 1160px:col-span-3"
          src={product4}
          alt="product4"
        />

        <div className="flex flex-col justify-center items-center font-khula 1160px:col-span-2">
          <h5 className="font-bold text-[60px] text-CRed">75%</h5>
          <p className="text-base text-center leading-[20px]">
            Hydrates better then <br /> luxury creams
          </p>
        </div>
        <div className="flex flex-col justify-center items-center font-khula 1160px:col-span-2">
          <h5 className="font-bold text-[60px] text-CRed">80%</h5>
          <p className="text-base text-center leading-[20px]">
            Visible wrinkle reduction <br /> in 28 days
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hydrate;
