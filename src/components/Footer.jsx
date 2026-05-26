import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-[#0d0d0d] ">
      <div className="max-w-[1320px] mx-auto w-full text-gray-400 font-sans px-8 md:px-0  pt-16 pb-8 border-t ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 mb-12">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="flex items-center gap-3 cursor-pointer select-none">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-[#7928CA] to-[#FF0080] shadow-lg">
              <span className="text-white font-bold text-xl">P</span>
            </div>

            <div className="text-white font-bold text-lg tracking-tight leading-snug">
              <span>Hiring Loop</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-neutral-500">
            The AI-native career platform. Built for people who take their work
            seriously.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[#6366f1] font-semibold text-sm tracking-wider">
            Product
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href="/job-discovery"
                className="hover:text-white transition-colors"
              >
                Job discovery
              </Link>
            </li>
            <li>
              <Link
                href="/worker-ai"
                className="hover:text-white transition-colors"
              >
                Worker AI
              </Link>
            </li>
            <li>
              <Link
                href="/companies"
                className="hover:text-white transition-colors"
              >
                Companies
              </Link>
            </li>
            <li>
              <Link
                href="/salary-data"
                className="hover:text-white transition-colors"
              >
                Salary data
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[#6366f1] font-semibold text-sm tracking-wider">
            Navigations
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href="/help-center"
                className="hover:text-white transition-colors"
              >
                Help center
              </Link>
            </li>
            <li>
              <Link
                href="/career-library"
                className="hover:text-white transition-colors"
              >
                Career library
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[#6366f1] font-semibold text-sm tracking-wider">
            Resources
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href="/brand-guideline"
                className="hover:text-white transition-colors"
              >
                Brand Guideline
              </Link>
            </li>
            <li>
              <Link
                href="/newsroom"
                className="hover:text-white transition-colors"
              >
                Newsroom
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-900 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-[#18181b] hover:bg-neutral-800 rounded-lg text-white transition-colors"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-[#6366f1] hover:bg-[#4f46e5] rounded-lg text-white transition-colors shadow-lg shadow-[#6366f1]/20"
          >
            <FaPinterestP size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-[#18181b] hover:bg-neutral-800 rounded-lg text-white transition-colors"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-neutral-500 text-center md:text-right">
          <span>Copyright 2024 — HeroLoop</span>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Policy
            </Link>
            <span>-</span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
