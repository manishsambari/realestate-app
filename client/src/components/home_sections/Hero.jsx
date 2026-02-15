import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const Hero = ({ content }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-mint-100/50 to-transparent rounded-l-[5rem] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-mint-50 to-transparent rounded-tr-[5rem] -z-10"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    className="space-y-8"
                >
                    <div className="inline-block px-4 py-1 bg-white border border-secondary/10 rounded-full shadow-sm mb-4">
                        <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">Premium Living in Vikhroli</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-secondary leading-tight">
                        <span className="block text-primary">Thinking of a</span>
                        Fantastic Vicinity?
                    </h1>

                    <p className="text-gray-500 text-lg max-w-lg leading-relaxed font-light">
                        {content?.hero?.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/30 hover:bg-lime-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center">
                            Download Brochure
                        </button>
                        <button className="border border-gray-300 text-gray-600 font-medium px-8 py-4 rounded-full hover:border-secondary hover:text-secondary hover:bg-white transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group">
                            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">▶</span>
                            Watch Video
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50">
                        <div>
                            <p className="text-3xl font-serif font-bold text-secondary">2,500+</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Happy Families</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif font-bold text-secondary">15+</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Awards Won</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif font-bold text-secondary">25+</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years Experience</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image Composition */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="/images/uploads/hero_building.jpg"
                            alt="Luxury Building"
                            className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Floating Details Card */}
                        <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-lg max-w-xs border border-white/50">
                            <h3 className="font-serif font-bold text-xl text-secondary mb-1">Infinity Heights</h3>
                            <p className="text-sm text-gray-500 mb-3">Vikhroli East, Mumbai</p>
                            <div className="flex justify-between items-center">
                                <span className="text-primary font-bold text-lg">₹ 1.2 Cr*</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">Onwards</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
