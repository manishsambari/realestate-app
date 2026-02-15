import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AmenitiesComponent from '../components/home_sections/Amenities';
import api from '../api';

const Amenities = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const { data } = await api.get('/content');
                setContent(data);
            } catch (error) {
                console.error('Error fetching content:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchContent();
    }, []);

    if (loading) return (
        <div className="h-screen flex items-center justify-center bg-mint-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
    );

    return (
        <div className="font-sans text-secondary bg-white overflow-x-hidden selection:bg-primary/30">
            <Navbar />
            <div className="pt-20">
                <AmenitiesComponent content={content} />
            </div>
            <Footer content={content} />
        </div>
    );
};

export default Amenities;
