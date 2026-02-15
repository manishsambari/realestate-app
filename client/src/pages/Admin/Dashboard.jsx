import { useState, useEffect, useContext } from 'react';
import api from '../../api';
import AuthContext from '../../context/AuthContext';

const Dashboard = () => {
    const { logout } = useContext(AuthContext);
    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('hero');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const { data } = await api.get('/content');
                setContent(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching content', error);
            }
        };
        fetchContent();
    }, []);

    const handleChange = (section, field, value) => {
        setContent(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    // Helper to handle array changes (simplified for list of strings or simple objects)
    const handleArrayChange = (section, index, field, value) => {
        const newItems = [...content[section].items];
        if (field) {
            newItems[index] = { ...newItems[index], [field]: value };
        } else {
            newItems[index] = value;
        }
        setContent(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                items: newItems
            }
        }));
    };

    const handleSave = async () => {
        try {
            setMessage('');
            await api.put('/content', content);
            setMessage('Content updated successfully!');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Error updating content', error);
            setMessage('Failed to update content.');
        }
    };

    if (loading) return <div className="p-8">Loading...</div>;

    const tabs = [
        { id: 'hero', label: 'Hero Section' },
        { id: 'projectOverview', label: 'Overview' },
        { id: 'connectivity', label: 'Connectivity' },
        { id: 'amenities', label: 'Amenities' },
        { id: 'floorPlans', label: 'Floor Plans' },
        { id: 'developer', label: 'Developer' },
        { id: 'constructionUpdates', label: 'Updates' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact/Footer' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-secondary">Admin Dashboard</h1>
                <div className="flex items-center gap-4">
                    {message && <span className="text-green-600 font-medium">{message}</span>}
                    <button
                        onClick={handleSave}
                        className="bg-primary text-white px-6 py-2 rounded shadow hover:bg-green-600 transition"
                    >
                        Save Changes
                    </button>
                    <button onClick={logout} className="text-gray-500 hover:text-red-500">Logout</button>
                </div>
            </header>

            <div className="flex flex-1 container mx-auto p-6 gap-8">
                {/* Sidebar */}
                <aside className="w-64 bg-white rounded-lg shadow h-[calc(100vh-140px)] overflow-y-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full text-left p-4 hover:bg-gray-50 transition-colors border-l-4 ${activeTab === tab.id ? 'border-primary bg-primary/5 text-primary font-medium' : 'border-transparent text-gray-600'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </aside>

                {/* Content Area */}
                <main className="flex-1 bg-white p-6 rounded-lg shadow overflow-y-auto h-[calc(100vh-140px)]">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 capitalize">{tabs.find(t => t.id === activeTab)?.label}</h2>

                    <div className="space-y-6">
                        {/* HERO FORM */}
                        {activeTab === 'hero' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.hero?.title || ''}
                                        onChange={e => handleChange('hero', 'title', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.hero?.subtitle || ''}
                                        onChange={e => handleChange('hero', 'subtitle', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Price 1</label>
                                        <input
                                            className="w-full border p-2 rounded mt-1"
                                            value={content.hero?.price1 || ''}
                                            onChange={e => handleChange('hero', 'price1', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Price 2</label>
                                        <input
                                            className="w-full border p-2 rounded mt-1"
                                            value={content.hero?.price2 || ''}
                                            onChange={e => handleChange('hero', 'price2', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Location</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.hero?.location || ''}
                                        onChange={e => handleChange('hero', 'location', e.target.value)}
                                    />
                                </div>
                            </>
                        )}

                        {/* OVERVIEW FORM */}
                        {activeTab === 'projectOverview' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.projectOverview?.title || ''}
                                        onChange={e => handleChange('projectOverview', 'title', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        rows="8"
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.projectOverview?.description || ''}
                                        onChange={e => handleChange('projectOverview', 'description', e.target.value)}
                                    />
                                </div>
                            </>
                        )}

                        {/* CONNECTIVITY FORM */}
                        {activeTab === 'connectivity' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.connectivity?.title || ''}
                                        onChange={e => handleChange('connectivity', 'title', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Items</label>
                                    {content.connectivity?.items?.map((item, index) => (
                                        <div key={index} className="flex gap-2">
                                            <input
                                                className="flex-1 border p-2 rounded"
                                                value={item.type || item} // adapt to schema
                                                onChange={e => handleArrayChange('connectivity', index, 'type', e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* AMENITIES FORM */}
                        {activeTab === 'amenities' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.amenities?.title || ''}
                                        onChange={e => handleChange('amenities', 'title', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                                    <textarea
                                        rows="2"
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.amenities?.subtitle || ''}
                                        onChange={e => handleChange('amenities', 'subtitle', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Township Overview Image</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        placeholder="/images/uploads/..."
                                        value={content.amenities?.townshipImage || ''}
                                        onChange={e => handleChange('amenities', 'townshipImage', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700">Explore More Cards</label>
                                    {/* Assuming 3 fixed cards for simplicity or map dynamic */}
                                    {[0, 1, 2].map((index) => (
                                        <div key={index} className="border p-3 rounded grid grid-cols-2 gap-2">
                                            <input
                                                className="border p-2 rounded col-span-2"
                                                placeholder="Title/Building Name"
                                                value={content.amenities?.exploreCards?.[index]?.title || ''}
                                                onChange={e => {
                                                    const newCards = [...(content.amenities?.exploreCards || [{}, {}, {}])];
                                                    newCards[index] = { ...newCards[index], title: e.target.value };
                                                    handleChange('amenities', 'exploreCards', newCards);
                                                }}
                                            />
                                            <input
                                                className="border p-2 rounded"
                                                placeholder="Image Path"
                                                value={content.amenities?.exploreCards?.[index]?.image || ''}
                                                onChange={e => {
                                                    const newCards = [...(content.amenities?.exploreCards || [{}, {}, {}])];
                                                    newCards[index] = { ...newCards[index], image: e.target.value };
                                                    handleChange('amenities', 'exploreCards', newCards);
                                                }}
                                            />
                                            <input
                                                className="border p-2 rounded"
                                                placeholder="Status (e.g. Newly Launched)"
                                                value={content.amenities?.exploreCards?.[index]?.status || ''}
                                                onChange={e => {
                                                    const newCards = [...(content.amenities?.exploreCards || [{}, {}, {}])];
                                                    newCards[index] = { ...newCards[index], status: e.target.value };
                                                    handleChange('amenities', 'exploreCards', newCards);
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Amenities List</label>
                                    {content.amenities?.items?.map((item, index) => (
                                        <div key={index} className="flex gap-2">
                                            <input
                                                className="flex-1 border p-2 rounded"
                                                placeholder="Title"
                                                value={item.title}
                                                onChange={e => handleArrayChange('amenities', index, 'title', e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* FLOOR PLANS FORM */}
                        {activeTab === 'floorPlans' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Unit Plan Image (Top Section)</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        placeholder="/images/uploads/..."
                                        value={content.floorPlans?.unitPlan || ''}
                                        onChange={e => {
                                            setContent(prev => ({
                                                ...prev,
                                                floorPlans: { ...prev.floorPlans, unitPlan: e.target.value }
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700">Wing Views (Bottom Section)</label>
                                    {['East', 'West', 'North', 'South'].map((wing) => (
                                        <div key={wing}>
                                            <label className="text-xs font-semibold text-gray-500 uppercase">{wing} Wing Image</label>
                                            <input
                                                className="w-full border p-2 rounded mt-1"
                                                placeholder={`/images/uploads/view_${wing.toLowerCase()}.jpg`}
                                                value={content.floorPlans?.wings?.[wing] || ''}
                                                onChange={e => {
                                                    setContent(prev => ({
                                                        ...prev,
                                                        floorPlans: {
                                                            ...prev.floorPlans,
                                                            wings: { ...prev.floorPlans?.wings, [wing]: e.target.value }
                                                        }
                                                    }));
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* DEVELOPER FORM */}
                        {activeTab === 'developer' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.developer?.title || ''}
                                        onChange={e => handleChange('developer', 'title', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        rows="4"
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.developer?.description || ''}
                                        onChange={e => handleChange('developer', 'description', e.target.value)}
                                    />
                                </div>
                            </>
                        )}

                        {/* CONSTRUCTION UPDATES FORM */}
                        {activeTab === 'constructionUpdates' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.constructionUpdates?.title || ''}
                                        onChange={e => handleChange('constructionUpdates', 'title', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700">Updates</label>
                                    {content.constructionUpdates?.items?.map((item, index) => (
                                        <div key={index} className="grid grid-cols-2 gap-2 border p-2 rounded">
                                            <input
                                                className="border p-2 rounded"
                                                placeholder="Label (e.g. Under Construction)"
                                                value={item.label}
                                                onChange={e => handleArrayChange('constructionUpdates', index, 'label', e.target.value)}
                                            />
                                            <input
                                                className="border p-2 rounded"
                                                placeholder="Status (e.g. Tower A)"
                                                value={item.status}
                                                onChange={e => handleArrayChange('constructionUpdates', index, 'status', e.target.value)}
                                            />
                                            {/* Add Image support if needed later */}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* FAQ FORM */}
                        {activeTab === 'faq' && (
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-700">Frequently Asked Questions</label>
                                {content.faq?.map((item, index) => (
                                    <div key={index} className="border p-4 rounded space-y-2">
                                        <input
                                            className="w-full border p-2 rounded"
                                            placeholder="Question"
                                            value={item.question}
                                            onChange={e => handleArrayChange('faq', index, 'question', e.target.value)}
                                        />
                                        <textarea
                                            rows="2"
                                            className="w-full border p-2 rounded"
                                            placeholder="Answer"
                                            value={item.answer}
                                            onChange={e => handleArrayChange('faq', index, 'answer', e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* CONTACT FORM */}
                        {activeTab === 'contact' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Address</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.footer?.address || ''}
                                        onChange={e => {
                                            setContent(prev => ({
                                                ...prev,
                                                footer: { ...prev.footer, address: e.target.value }
                                            }));
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.footer?.email || ''}
                                        onChange={e => {
                                            setContent(prev => ({
                                                ...prev,
                                                footer: { ...prev.footer, email: e.target.value }
                                            }));
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        className="w-full border p-2 rounded mt-1"
                                        value={content.footer?.phone || ''}
                                        onChange={e => {
                                            setContent(prev => ({
                                                ...prev,
                                                footer: { ...prev.footer, phone: e.target.value }
                                            }));
                                        }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    {/* CONNECTIVITY FORM */}
                    {/* ... existing code ... */}

                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                        <button
                            onClick={handleSave}
                            className="bg-primary text-secondary font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 hover:text-white transition-all transform hover:-translate-y-1"
                        >
                            Save Changes
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
