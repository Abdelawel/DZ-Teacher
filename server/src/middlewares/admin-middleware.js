module.exports = (req, res, next) => {
    const { role } = req.user_id; 
    if (role !== 'admin') {
        return res.status(403).json({ error: 'Access denied' });
    }
    next();
};
