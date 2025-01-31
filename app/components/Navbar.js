'use client';

import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to avoid hydration issues
const Navbar = dynamic(() => import('./Navbar/index'), {
    ssr: false
});

export default Navbar;