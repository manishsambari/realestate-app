import { Link } from 'react-router-dom';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-left mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4 relative inline-block">
            {title}
        </h2>
        {subtitle && <p className="text-gray-500 mt-2 max-w-2xl font-light font-sans text-sm">{subtitle}</p>}
    </div>
);

const Amenities = ({ content }) => {
    return (
        <>
            <section id="amenities" className="py-24 bg-mint-50/30 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <SectionTitle
                        title={content?.amenities?.title || "Amenities"}
                        subtitle={content?.amenities?.subtitle || "Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach."}
                    />

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Left: Large Feature Image (Rooftop View) */}
                        <div className="w-full lg:w-[45%] h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                            <img
                                src="/images/uploads/overview_garden.jpg"
                                onError={(e) => { e.target.src = "/images/uploads/amenities_pool.jpg" }}
                                alt="Amenities Overview"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay if needed? Design shows clean image */}
                        </div>

                        {/* Right: Grid of Amenities */}
                        <div className="w-full lg:w-[55%] flex flex-col justify-between h-full">
                            <div className="grid grid-cols-3 gap-y-10 gap-x-4 text-center mb-12">
                                {[
                                    { name: "Gymnasium", icon: "gym" },
                                    { name: "Kids Play Area", icon: "play" },
                                    { name: "Kids Play Area", icon: "play" }, // Repeated in design? Or distinct? Design shows 2 play areas.
                                    { name: "Jogging Track", icon: "run" },
                                    { name: "Yoga Deck", icon: "yoga" },
                                    { name: "Yoga Deck", icon: "yoga" }   // Repeated in design?
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer">
                                        <div className="w-20 h-20 rounded-full border border-mint-200 bg-white flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg shadow-sm">
                                            {/* Icons */}
                                            {item.icon === 'gym' && (
                                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v1a3 3 0 100-6v1" /></svg>
                                            )}
                                            {item.icon === 'play' && (
                                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            )}
                                            {item.icon === 'run' && (
                                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            )}
                                            {item.icon === 'yoga' && (
                                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                            )}
                                        </div>
                                        <p className="text-gray-600 font-medium text-sm">{item.name}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center md:justify-end">
                                <button className="bg-lime-400 text-secondary font-bold px-8 py-2.5 rounded shadow-lg shadow-lime-400/30 hover:bg-lime-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 transform text-sm tracking-wide">
                                    View more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TOWNSHIP / EXPLORE MORE */}
            <section className="py-20 bg-gradient-to-b from-mint-100/50 to-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12">
                        Explore More Buildings in the Township
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Dynamic Cards Map */}
                        {(content?.amenities?.exploreCards || [
                            { title: 'Vighnaharta Aaradhya', image: '/images/uploads/view_south.jpg', status: '' },
                            { title: 'New Launch', image: '/images/uploads/tower_exterior.png', status: 'Newly Launched' },
                            { title: 'Vighnaharta Heights', image: '/images/uploads/view_north.jpg', status: '' }
                        ]).map((card, index) => (
                            <div key={index} className={`relative h-[450px] ${index === 1 ? 'md:h-[480px] md:-mt-4 z-10' : ''} rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer border-4 border-white transition-all duration-500 hover:-translate-y-2`}>
                                <img
                                    src={card.image || '/images/placeholder.jpg'}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    alt={card.title}
                                    onError={(e) => { e.target.src = '/images/uploads/hero_building.jpg' }}
                                />
                                <div className={`absolute bottom-0 left-0 w-full ${index === 1 ? 'bg-gradient-to-t from-lime-400/90 to-transparent h-1/2' : 'h-2/3 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent'} flex items-end justify-center pb-6 p-4`}>
                                    <p className={`${index === 1 ? 'font-bold text-secondary text-lg tracking-wide' : 'font-bold text-white text-lg tracking-wide border-b-2 border-lime-400 pb-1'}`}>
                                        {card.status ? `${card.status} - ` : ''}{card.title}
                                    </p>
                                </div>
                                {/* Navigation Arrows based on index */}
                                {index === 0 && (
                                    <div className="absolute top-1/2 left-0 w-10 h-10 bg-lime-400 flex items-center justify-center rounded-r-full shadow-lg transform -translate-y-1/2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                                        <span className="text-secondary font-bold">❮</span>
                                    </div>
                                )}
                                {index === 2 && (
                                    <div className="absolute top-1/2 right-0 w-10 h-10 bg-lime-400 flex items-center justify-center rounded-l-full shadow-lg transform -translate-y-1/2 translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                                        <span className="text-secondary font-bold">❯</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Amenities;
