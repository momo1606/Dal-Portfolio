
//Author: Mohammed Noor ul Hasan Kothaliya

import { User, ResetToken } from "../../../../models/index.js";
import { v4 as uuidv4 } from 'uuid';
import { sendResetPasswordEmail } from "../../../../utils/sendResetEmail.js";

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not found with this email address." });
        }

        const resetTokenString = uuidv4();
        const resetToken = new ResetToken({
            userId: user._id,
            resetToken: resetTokenString
        });

        await resetToken.save();

        const resetLink = `${process.env.FRONTEND_URL}/reset-password/${user.username}/${resetTokenString}`;
        await sendResetPasswordEmail(user.email, resetLink);

        res.status(200).json({ message: "Reset password link has been sent to your email address." });
    } catch (error) {
        console.error("Forgot Password error:", error);
        res.status(500).json({ message: "Error processing forgot password request." });
    }
};

export default forgotPassword;
