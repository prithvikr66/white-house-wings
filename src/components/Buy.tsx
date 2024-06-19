const Buy = () => {
  return (
    <div className=" lg:mt-[100px]">
      <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-[20px] xl:gap-[22px] 2xl:gap-[25px]">
        <p className=" font-darumadrop text-[24px] text-white uppercase text-center">
          Contract address: <span>0xe8b...8a18</span>
        </p>
        <div className=" bg-white h-[40px] w-[2px] hidden lg:block" />
        <p className=" font-darumadrop text-[24px] text-white uppercase text-center">
          tax: <span>0%</span>
        </p>
        <div className=" bg-white h-[40px] w-[2px] hidden lg:block " />

        <p className=" font-darumadrop text-[24px] text-white uppercase text-center">
          Network: <span>eth</span>
        </p>
      </div>
      <div className=" bg-gradient-to-br from-[#F9F871] via-[#FEB0FE] to-[#5DF7A4] lg:h-[480px] h-[300px] w-[350px] lg:w-[740px] lg:rounded-[20px] rounded-[10px] mx-auto mt-10 p-[5px] opacity-60 sm:h-[300px] sm:w-[500px] md:h-[400px] md:w-[700px] xl:h-[520px] xl:w-[800px]">
        <div className=" bg-white opacity-100 h-full w-full lg:rounded-[20px] rounded-[10px] flex items-center justify-center p-5">
          <iframe
            src="https://app.uniswap.org/#/swap?outputCurrency=0xe8b1e79d937c648ce1fe96e6739ddb2714058a18"
            className="w-full h-full rounded-[10px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Buy;
