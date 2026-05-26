"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="  bg-[#0d0d0d] ">
            <div className="max-w-[1320px] w-full mx-auto px-8 md:px-0  py-4 flex items-center justify-between text-white font-sans relative z-50">
            <div className="flex items-center gap-2 cursor-pointer ">
                <div className="flex items-center gap-3 cursor-pointer select-none">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-[#7928CA] to-[#FF0080] shadow-lg">
              <span className="text-white font-bold text-xl">P</span>
            </div>

            <div className=" text-white font-bold text-lg tracking-tight leading-snug">
              <span>Hiring Loop</span>
            </div>
          </div>
            </div>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-white focus:outline-none z-50"
                aria-label="Toggle Menu"
            >
                <span className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <div className="hidden md:flex items-center gap-4 bg-[#18181b]/80 border border-neutral-800/50 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl">
                <div className="flex items-center gap-6 text-sm font-medium text-gray-300 mr-2">
                    <Link href="/browse-jobs" className="hover:text-white transition-colors duration-200">Browse Jobs</Link>
                    <Link href="/company" className="hover:text-white transition-colors duration-200">Company</Link>
                    <Link href="/pricing" className="hover:text-white transition-colors duration-200">Pricing</Link>
                </div>

                <div className="h-4 w-[1px] bg-neutral-700 mx-1"></div>

                <div className="flex items-center gap-3">
                    <Link href="/login" className="text-sm font-medium text-[#6366f1] hover:text-[#4f46e5] transition-colors duration-200 px-3 py-1.5">
                        Sign In
                    </Link>
                    <Link href="/get-started" className="bg-white text-black font-semibold text-sm px-4 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-md">
                        Get Started
                    </Link>
                </div>
            </div>

            <div className={`fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-xl font-medium transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link href="/browse-jobs" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">Browse Jobs</Link>
                <Link href="/company" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">Company</Link>
                <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
                
                {/* Divider for Mobile */}
                <div className="w-16 h-[1px] bg-neutral-800"></div>

                <Link href="/login" onClick={() => setIsOpen(false)} className="text-[#6366f1] hover:text-[#4f46e5] transition-colors">
                    Sign In
                </Link>
                <Link href="/get-started" onClick={() => setIsOpen(false)} className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-md">
                    Get Started
                </Link>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;