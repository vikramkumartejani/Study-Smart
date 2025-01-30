export default function Banner({ imgSrc, title, para, objectPos }) {
  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[64px]">
      <div className="max-w-[1280px] mx-auto relative rounded-[40px] overflow-hidden md:h-[492px] flex items-center justify-center md:px-[40px]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: objectPos,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0A1E4766]"></div>
        </div>

        {/* Content Box (Text) */}
        <div className="relative bg-[#1848AD] md:bg-[#0A1E47CC] md:rounded-[24px] rounded-[40px] p-[35px] sm:p-[40px] text-center md:h-fit h-full w-full my-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-[24px] md:text-[48px] md:leading-[61.54px] font-[600] text-white mb-6">
            {title}
          </h2>
          <p className="text-white text-base md:text-[18px] font-[300]">
            {para}
          </p>
        </div>
      </div>
    </section>
  );
}
