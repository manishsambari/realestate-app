import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif font-bold text-xl text-secondary leading-none tracking-wide">LIME</span>
                        <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">Realty</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <Link to="/" className="relative py-1 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                        Home
                    </Link>
                    <Link to="/amenities" className="relative py-1 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                        Amenities
                    </Link>
                    <Link to="/floor-plans" className="relative py-1 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                        Floor Plans
                    </Link>
                    <Link to="/contact" className="relative py-1 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">
                        Contact
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-primary text-white font-semibold px-8 py-2.5 rounded-full shadow-lg shadow-primary/30 hover:bg-lime-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 transform">
                        Enquiry Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-secondary" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-6 flex flex-col gap-4">
                    <Link to="/" className="text-gray-600 font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/amenities" className="text-gray-600 font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Amenities</Link>
                    <Link to="/floor-plans" className="text-gray-600 font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Floor Plans</Link>
                    <Link to="/contact" className="text-gray-600 font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
                    <button className="bg-primary text-white font-semibold px-6 py-2 rounded-full w-full">
                        Enquiry Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
