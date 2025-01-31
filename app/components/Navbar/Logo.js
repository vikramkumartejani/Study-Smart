'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
                <Image
                    src="/assets/logo.svg"
                    alt="StudySmart"
                    width={260}
                    height={60}
                    priority
                    className='md:w-[260px] md:h-[60px] w-[200px] h-[48px]'
                />
            </Link>
        </div>
    );
} 