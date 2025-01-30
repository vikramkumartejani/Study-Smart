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
    <section className="py-16 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[32px] font-bold text-center mb-4">
          Explore StudySmart's Diverse Learning Paths
        </h2>
        <p className="text-gray-600 text-center text-lg mb-16">
          Navigate Your Educational Journey with Confidence
        </p>

        <div className="relative flex md:flex-row flex-col justify-between items-start gap-[2rem]">
          {/* Dashed line connecting all points */}
          <div className="absolute top-[40px] left-[70px] right-[70px] h-[2px] border-t-2 border-dashed border-gray-300" />

          {paths.map((path, index) => (
            <div
              key={index}
              className="relative flex md:flex-col flex-row items-center w-full max-w-[300px] mx-auto z-10 gap-4"
            >
              <div className="flex items-center justify-center w-20 min-w-[80px] h-20 rounded-full border-4 border-[#FF5917] bg-white mb-4">
                <span className="text-2xl font-bold">{path.number}</span>
              </div>
              <p className="text-center text-sm font-medium">{path.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
