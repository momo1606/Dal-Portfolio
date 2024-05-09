//Author: Mohammed Noor ul Hasan Kothaliya

import { Token, User } from "../../../../models/index.js";
import { signAccessToken, signRefreshToken } from "../../../../utils/index.js";

const refreshTokenController = async (req, res) => {
    const { refreshToken: receivedRefreshToken } = req.body;

    if (!receivedRefreshToken) {
        return res.status(400).json({ message: "Refresh token is required" });
    }

    try {
        const tokenDoc = await Token.findOne({ refreshToken: receivedRefreshToken });
        if (!tokenDoc) {
            return res.status(401).json({ message: "Refresh token is invalid or expired" });
        }

        const user = await User.findById(tokenDoc.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newAccessToken = signAccessToken(user._id);
        const newRefreshToken = signRefreshToken(user._id);

        
        tokenDoc.refreshToken = newRefreshToken;
        tokenDoc.expiresIn = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // set the expiration date to 7 days from now
        await tokenDoc.save();

        res.json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        });
    } catch (error) {
        console.error("Error refreshing token:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default refreshTokenController;
