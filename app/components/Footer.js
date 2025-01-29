import Image from "next/image";
import Link from "next/link";
import { IoMail, IoTime } from "react-icons/io5";
import {
  FaPhone,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const navigation = {
  column1: [
    { name: "Home", href: "/" },
    { name: "Mag", href: "/mag" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  column2: [
    { name: "Training", href: "/training" },
    { name: "Consulting", href: "/consulting" },
    { name: "Study Groups", href: "/study-groups" },
    { name: "Coaching", href: "/coaching" },
    { name: "Professional Services", href: "/services" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { name: "Twitter", href: "#", icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-[40px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] md:gap-8 gap-[80px] md:text-left text-center">
          {/* Contact Information */}
          <div className="space-y-[32px]">
            <h2 className="text-[18px] font-bold">Contact Information</h2>
            <div className="flex flex-col gap-[38px] md:items-start items-center">
              <div className="flex items-center space-x-[8px]">
                <Image
                  src="/assets/email.png"
                  width={32}
                  height={32}
                  alt="email"
                  className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]"
                />
                <div className="flex items-center gap-[8px]">
                  <span className="md:flex hidden font-[300]">Email: </span>
                  <a
                    href="mailto:contact@studysmart.com"
                    className="font-[500] hover:text-white/85"
                  >
                    contact@studysmart.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-[8px]">
                <Image
                  src="/assets/phone.png"
                  width={32}
                  height={32}
                  alt="phone"
                  className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]"
                />
                <div>
                  <span className="md:flex hidden font-[300]">Phone: </span>
                  <a
                    href="tel:+15551234567"
                    className="font-[500] hover:text-white/85"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-[8px] ">
                <Image
                  src="/assets/clock.png"
                  width={32}
                  height={32}
                  alt="clock"
                  className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]"
                />
                <div className="w-full flex gap-[8px] items-center">
                  <span className="md:flex hidden font-[300]">
                    Business Hours:
                  </span>
                  <span className="block font-[500]">
                    Monday to Friday, 9:00 AM - 6:00 PM EST
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              {navigation.column1.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-[300] hover:text-white/85"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="space-y-6">
              {navigation.column2.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-[300] hover:text-white/85"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-[75px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[24px]">
            <div className="flex md:flex-row flex-col items-center gap-[32px]">
              <div className="relative">
                <Image
                  src="/assets/footer-logo.svg"
                  alt="logo"
                  width={169.38}
                  height={40}
                />
              </div>
              <span className="text-base text-light font-[300] md:text-left text-center">
                © 2024 StudySmart. All Right Reserved.
              </span>
            </div>

            <div className="flex space-x-[32px]">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-white/85"
                    aria-label={item.name}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
