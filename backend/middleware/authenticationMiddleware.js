// Middleware untuk mengotentikasi token JWT
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Format token tidak valid. Harap gunakan "Bearer <token>".' });
  }

  const token = authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token kedaluwarsa. Harap login kembali.' });
    }
    res.status(401).json({ error: 'Token tidak valid.' });
  }
};
