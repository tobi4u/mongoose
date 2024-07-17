import jwt from "jsonwebtoken";

export const verifyJWtoken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ status: "error", message: "Unauthorized :(" });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res
        .status(401)
        .json({ status: "error", message: "Unauthorized :("
        });
    }

req.user = decoded
next()
  } catch (error) {
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while trying to verify token",
      });
  }
};
