"use client";
export default function LearningPaths() {
  const paths = [
    {
      number: 1,
      title: "Online USMLE Step 1 and Step 2 CK Courses",
    },
    {
      number: 2,
      title: "Comprehensive OET Preparation Course",
    },
    {
      number: 3,
      title: "Intensive Exam Preparation Courses",
    },
    {
      number: 4,
      title: "Research Paper Writing Courses",
    },
    {
      number: 5,
      title: "Data Analysis with SPSS Course",
    },
  ];

  return (
    <section className="bg-[#FCFCFC] px-4 md:px-8 md:py-[100px] py-[50px]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[28px] sm:text-[30px] font-bold text-center text-dark mb-[10px]">
          Explore StudySmart's Diverse Learning Paths
        </h2>
        <p className="text-center text-[18px] sm:text-[20px] font-[300] text-middle mb-[56px] md:mb-[80px]">
          Navigate Your Educational Journey with Confidence
        </p>

        <div className="relative flex md:flex-row flex-col justify-between items-start gap-[2rem]">
          {/* Dashed line connecting all points */}
          <div className="absolute md:top-[46px] top-0 md:left-[70px] sm:left-[46px] left-[41px] md:right-[70px] md:h-[2px] h-full md:w-auto w-[2px] md:border-t md:border-r-0 border-r border-dashed border-[#00000033]" />

          {paths.map((path, index) => (
            <div
              key={index}
              className="relative flex md:flex-col flex-row items-center w-full md:max-w-[300px] mx-auto z-10 gap-4 md:gap-2"
            >
              <div className="flex items-center justify-center sm:w-[95px] w-[85px] sm:min-w-[95px] min-w-[85px] sm:h-[95px] h-[85px] rounded-full sm:border-[10px] border-[8px] border-secondary bg-white">
                <span className="text-[30px] font-bold text-dark">
                  {path.number}
                </span>
              </div>
              <p className="text-center font-[400] text-dark">{path.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
