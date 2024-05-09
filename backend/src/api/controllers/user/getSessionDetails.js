//Author: Mohammed Noor ul Hasan Kothaliya

import { User } from "../../../models/index.js";
import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../../../config/index.js";
import { isEmpty } from "../../../utils/index.js";

const getSessionDetails = async (req, res) => {
    
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(200).json({ isAuthenticated: false, user: {}});
    }

    try {
        const decoded = jwt.verify(token, jwtSecretKey);
        const user = await User.findById(decoded._id, '-password'); 

        if (isEmpty(user)) {
            return res.status(401).json({ isAuthenticated: false, message: "User not found" });
        }

        
        res.json({ isAuthenticated: true, user });

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            console.error("Token has expired:", error);
            return res.status(401).json({ isAuthenticated: false, message: "Token has expired" });
        } else {
            console.error("Error verifying token:", error);
            return res.status(500).json({ isAuthenticated: false, message: "Internal server error" });
        }
    }
};

export default getSessionDetails;
