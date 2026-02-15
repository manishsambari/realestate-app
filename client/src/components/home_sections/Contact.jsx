import { useState } from 'react';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4 relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
        </h2>
        {subtitle && <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-light font-sans">{subtitle}</p>}
    </div>
);

const Contact = ({ content }) => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl font-serif font-bold text-secondary mb-6">About Developer</h2>
                    <p className="text-gray-600 leading-relaxed">
                        {content?.developer?.description || "Vighnaharta Developers is more than just a real estate company—we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we're transforming skylines and setting new standards in urban living."}
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="bg-mint-100/50 rounded-full py-8 px-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm mb-20">
                    {[
                        { number: '6', label: 'Projects' },
                        { number: '1.32 LAC', label: 'sq. ft. area developed' },
                        { number: '449+', label: 'Happy Families' },
                        { number: '3.77 LAC', label: 'sq. ft. ongoing' },
                        { number: '2.7 LAC', label: 'sq. ft. Area Upcoming' }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <h3 className="text-2xl font-bold text-secondary">{stat.number}</h3>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Image Banner */}
                <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] relative">
                    <img src="/images/uploads/developer_meeting.jpg" className="w-full h-full object-cover" alt="Developer Team" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-12">
                        <p className="text-white text-xl font-light tracking-widest uppercase">Building The Future</p>
                    </div>
                </div>
            </div>

            {/* CONSTRUCTION UPDATES */}
            <section id="construction" className="py-24 bg-mint-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold text-secondary text-center mb-16">Construction Updates</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-lg group">
                            <img src="/images/uploads/construction_aerial.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900/90 to-transparent flex flex-col justify-end p-8 text-center">
                                <p className="text-white/80 font-bold uppercase text-sm tracking-wider mb-1">Under Construction</p>
                                <h3 className="text-white text-2xl font-serif font-bold mb-4">Tower A</h3>
                                <button className="text-xs text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-widest mx-auto">Know More</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-lg group">
                            <img src="/images/uploads/construction_tower.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal-900/90 to-transparent flex flex-col justify-end p-8 text-center">
                                <p className="text-white/80 font-bold uppercase text-sm tracking-wider mb-1">Completed</p>
                                <h3 className="text-white text-2xl font-serif font-bold mb-4">Tower B</h3>
                                <button className="text-xs text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-widest mx-auto">Know More</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-lg group">
                            <img src="/images/uploads/construction_gate.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900/90 to-transparent flex flex-col justify-end p-8 text-center">
                                <p className="text-white/80 font-bold uppercase text-sm tracking-wider mb-1">Completed</p>
                                <h3 className="text-white text-2xl font-serif font-bold mb-4">Tower C</h3>
                                <button className="text-xs text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-widest mx-auto">Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <FAQSection content={content} />
        </section>
    );
};

const FAQSection = ({ content }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = content?.faq || [
        { question: "What makes Swastik Group a trusted name in real estate in Vikhroli?", answer: "Swastik Group is known for its commitment to quality, timely delivery, and customer satisfaction." },
        { question: "What types of residential projects does Swastik Group offer in Vikhroli?", answer: "We offer a range of residential projects including 1 BHK, 2 BHK, and luxury apartments." },
        { question: "Why should I invest in Swastik Group's new projects in Vikhroli?", answer: "Vikhroli is a rapidly developing area with excellent connectivity and appreciation potential." },
        { question: "How does Swastik Group ensure quality and sustainability in its real estate projects?", answer: "We use high-quality materials and eco-friendly construction practices." },
        { question: "How can I learn more about upcoming residential projects by Swastik Group in Vikhroli?", answer: "You can visit our website or contact our sales team for more information." }
    ];

    return (
        <section id="faq" className="py-24 bg-mint-50/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-serif font-bold text-secondary text-center mb-16">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="bg-green-100/50 rounded-xl overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => toggleAccordion(idx)}
                                className="w-full text-left p-6 flex justify-between items-center cursor-pointer hover:bg-green-200/50 transition-colors focus:outline-none"
                            >
                                <span className="font-medium text-gray-800 text-sm md:text-base pr-8">{item.question}</span>
                                <span className={`text-2xl text-secondary transition-transform duration-300 ${activeIndex === idx ? 'rotate-45' : ''}`}>+</span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-green-200/30">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Contact;
