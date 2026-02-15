const Content = require('../models/Content');

// Get all content (create default if not exists)
const getContent = async (req, res) => {
    try {
        let content = await Content.findOne();
        if (!content) {
            content = new Content();
            await content.save();
        }
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update content
const updateContent = async (req, res) => {
    try {
        const content = await Content.findOne();
        if (!content) {
            return res.status(404).json({ message: 'Content not found' });
        }

        // Update fields
        Object.assign(content, req.body);
        await content.save();
        res.json(content);
    } catch (error) {
        console.error('Update Content Error:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getContent, updateContent };
