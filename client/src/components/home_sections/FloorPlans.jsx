import { useState } from 'react';

const FloorPlans = ({ content }) => {
    const [activeWing, setActiveWing] = useState('East Wing');
    const [activeBHK, setActiveBHK] = useState('2 BHK');

    // Configuration for each wing
    const wings = ['East Wing', 'West Wing', 'North Wing', 'South Wing'];
    const bhkOptions = ['1 BHK', '2 BHK', '5,6 BHK'];

    // Data mapper for Top Section (Unit Plan)
    // Fallback to placeholder if not set in content
    const unitPlanImage = content?.floorPlans?.unitPlan || '/images/uploads/overview_interior.jpg';

    // Data mapper for Bottom Section (View)
    const getWingViewImage = (wing) => {
        // Normalize key to match simple "East", "West" keys in content object or fallback
        const wingKey = wing.split(' ')[0]; // "East" from "East Wing"
        return content?.floorPlans?.wings?.[wingKey] ||
            // Fallbacks if dynamic content is missing
            (wing === 'East Wing' ? '/images/uploads/township_1.jpg' :
                wing === 'West Wing' ? '/images/uploads/view_west.jpg' :
                    wing === 'North Wing' ? '/images/uploads/view_north.jpg' :
                        wing === 'South Wing' ? '/images/uploads/view_south.jpg' :
                            '/images/uploads/township_2.jpg');
    };

    return (
        <>
            {/* TOP SECTION: FLOOR PLANS & DETAILS */}
            <section id="floorplans" className="py-20 bg-mint-100 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">

                    {/* WING TABS (Top Right) */}
                    <div className="flex justify-end mb-12">
                        <div className="flex flex-wrap gap-8 text-sm md:text-base font-medium text-gray-500 border-b border-gray-300/50 pb-2">
                            {wings.map((wing) => (
                                <button
                                    key={wing}
                                    onClick={() => setActiveWing(wing)}
                                    className={`relative pb-2 transition-colors duration-300 ${activeWing === wing ? 'text-secondary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary' : 'hover:text-secondary'}`}
                                >
                                    {wing}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* LEFT: UNIT PLAN IMAGE */}
                        <div className="w-full lg:w-1/2">
                            <div className="bg-white p-4 rounded-[2.5rem] shadow-xl transform transition-transform hover:scale-105 duration-500">
                                <div className="h-[400px] w-full rounded-[2rem] overflow-hidden border border-gray-100 relative bg-gray-50">
                                    <img
                                        src={unitPlanImage}
                                        alt="Unit Plan"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: DETAILS CARD */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
                            <div className="bg-white rounded-[2rem] shadow-xl p-8 max-w-md w-full border border-white/50 relative">
                                {/* BHK Buttons */}
                                <div className="flex justify-between gap-2 mb-8 bg-gray-50 p-1 rounded-lg">
                                    {bhkOptions.map((bhk) => (
                                        <button
                                            key={bhk}
                                            onClick={() => setActiveBHK(bhk)}
                                            className={`flex-1 py-2 px-2 rounded-md font-bold text-xs md:text-sm uppercase transition-all shadow-sm ${activeBHK === bhk
                                                ? 'bg-teal-500 text-white'
                                                : 'bg-white text-gray-500 hover:text-teal-600'
                                                }`}
                                        >
                                            {bhk}
                                        </button>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="text-center space-y-4 mb-8">
                                    <h3 className="text-2xl font-serif font-bold text-secondary">
                                        Type - {activeBHK}
                                    </h3>
                                    <p className="text-gray-600 font-medium">
                                        Area - <span className="text-secondary font-bold">380-411 RCA Sq.ft</span>
                                    </p>
                                    <p className="text-gray-600 font-medium">
                                        Price - <span className="text-primary font-bold cursor-pointer hover:underline">Click for price</span>
                                    </p>
                                </div>

                                <button className="w-full bg-lime-400 text-secondary font-bold py-3 rounded-xl shadow-lg shadow-lime-400/30 hover:bg-lime-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wide text-sm">
                                    Download Floor Plan
                                </button>
                            </div>

                            {/* Thumbnails below card */}
                            <div className="flex justify-center lg:justify-end gap-4 mt-8">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-20 h-20 bg-white rounded-xl shadow p-1 cursor-pointer hover:ring-2 ring-primary transition-all opacity-80 hover:opacity-100">
                                        {/* Placeholder thumbnail - just simplified view of plan */}
                                        <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                            <img src="/images/uploads/overview_interior.jpg" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM SECTION: CITYSCAPE VIEW (Static Image) */}
            <section className="h-[60vh] relative overflow-hidden">
                <img
                    src={getWingViewImage(activeWing)}
                    alt={`${activeWing} View`}
                    className="w-full h-full object-cover fixed-background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                {/* Optional: Label for the view */}
                <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 text-white cursor-default">
                    <p className="text-sm font-bold tracking-[0.2em] uppercase mb-2 opacity-80">Panoramic View</p>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold">{activeWing}</h2>
                </div>
            </section>
        </>
    );
};

export default FloorPlans;
