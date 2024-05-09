//Author: Mohammed Noor ul Hasan Kothaliya

import bcrypt from 'bcryptjs';
import { User, Token } from "../../../../models/index.js";
import { signAccessToken, signRefreshToken } from "../../../../utils/index.js";

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email, isVerified: true });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials or user not verified' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const accessToken = signAccessToken(user._id);
        const refreshToken = signRefreshToken(user._id);

        await Token.deleteMany({ userId: user._id });

        const refreshTokenExpiry = new Date();
        refreshTokenExpiry.setDate(refreshTokenExpiry.getDate() + 7);

        const newToken = new Token({
            userId: user._id,
            refreshToken,
            expiresIn: refreshTokenExpiry,
            createdByIp: req.ip
        });
        await newToken.save();

        res.json({
            message: 'Login successful',
            accessToken,
            refreshToken,
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default login;
