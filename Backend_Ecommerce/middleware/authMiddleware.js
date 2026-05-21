import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.json({ message: "No Token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const admin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.json({ message: "Admin Only" });
  }

  next();
};