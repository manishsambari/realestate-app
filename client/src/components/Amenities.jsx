const Amenities = ({ content }) => {
    return (
        <section id="amenities" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-secondary mb-4">{content?.amenities?.title || 'Amenities'}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {content?.amenities?.subtitle || 'Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                        <img
                            src="https://placehold.co/600x400?text=Amenities+Render"
                            alt="Amenities"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* List */}
                    <div className="grid grid-cols-2 gap-8">
                        {content?.amenities?.items?.map((item, index) => (
                            <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3 text-3xl text-primary">
                                    {/* Icons placeholder - could be dynamic if needed, using generic mapping for now */}
                                    {index % 4 === 0 ? '🏋️' : index % 4 === 1 ? '🤸' : index % 4 === 2 ? '🏃' : '🧘'}
                                </div>
                                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-10">
                    <button className="bg-primary/20 text-primary-dark font-semibold px-6 py-2 rounded hover:bg-primary/30 transition-colors">
                        View more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Amenities;
