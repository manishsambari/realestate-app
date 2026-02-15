import { Link } from 'react-router-dom';

const Footer = ({ content }) => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10 rounded-t-[3rem] mt-20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-transparent opacity-50"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-2xl tracking-wide">LIME REALTY</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Crafting landmarks that redefine skyline and lifestyle. Innovation, sustainability, and excellence in every square foot.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons placeholders */}
                        {['fb', 'tw', 'in', 'ig'].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors cursor-pointer">
                                <span className="text-xs uppercase">{i}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-serif font-semibold mb-6 text-primary">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>
                            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/amenities" className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span> Amenities
                            </Link>
                        </li>
                        <li>
                            <Link to="/floor-plans" className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span> Floor Plans
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span> Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Policies/Links */}
                <div>
                    <h4 className="text-lg font-serif font-semibold mb-6 text-primary">Legal</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">RERA Info</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-serif font-semibold mb-6 text-primary">Get in Touch</h4>
                    <div className="space-y-4 text-sm text-gray-400">
                        <div className="flex items-start gap-4">
                            <span className="text-xl">📍</span>
                            <p className="leading-relaxed">{content?.footer?.address}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xl">📞</span>
                            <p>{content?.footer?.phone}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xl">✉️</span>
                            <p>{content?.footer?.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-xs">
                <p>&copy; {new Date().getFullYear()} Lime Realty Group. All rights reserved. Designed with precision.</p>
            </div>
        </footer>
    );
};

export default Footer;
