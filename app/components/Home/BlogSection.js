import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const blogPosts = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s ...",
    image: "/assets/blog-img.png",
    link: "#",
  },
  {
    id: 2,
    title: "Contrary to popular belief",
    content:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ...",
    image: "/assets/blog-img.png",
    link: "#",
  },
  {
    id: 3,
    title: "The standard Lorem Ipsum passage",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ...",
    image: "/assets/blog-img.png",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-primary">
      <div className="bg-[#FCFCFC] px-4 md:px-8 py-[75px] rounded-tl-[64px]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[30px] font-bold text-center md:mb-[70px] mb-[40px]">
            Stay Updated with the Latest Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col hover:cursor-pointer p-[24px] bg-white rounded-[16px]"
              >
                <div className="relative w-[80px] h-[80px] mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[18px] text-dark font-bold mb-[6px]">
                  {post.title}
                </h3>
                <p className="text-light mb-4 flex-grow">{post.content}</p>
                <BsArrowRight className="ms-auto text-dark w-[20px] h-[20px] group-hover:translate-x-1 transition-all transition-transform" />
              </article>
            ))}
          </div>

          <div className="text-center">
            <p className="text-middle mb-6">
              Explore our blog for the latest news, tips, and strategies in the
              medical field
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-dark font-medium hover:bg-primary/5 transition-colors duration-400 ease-in-out">
              Explore Now
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
