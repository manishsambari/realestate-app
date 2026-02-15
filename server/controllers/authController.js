const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;

    // Fixed credentials as per requirement
    if (email === 'admin@gmail.com' && password === '1234') {
        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1d' });
        return res.json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = { login };
