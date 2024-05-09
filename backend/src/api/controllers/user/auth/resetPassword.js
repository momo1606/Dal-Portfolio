//Author: Mohammed Noor ul Hasan Kothaliya

import bcrypt from 'bcryptjs';
import { User, ResetToken } from "../../../../models/index.js";

const resetPassword = async (req, res) => {
    const { resetToken, newPassword, username } = req.body;

    try {
        const resetTokenDoc = await ResetToken.findOne({ resetToken });
        if (!resetTokenDoc) {
            return res.status(400).json({ message: "Invalid or expired reset token." });
        }

        const user = await User.findOne({ _id: resetTokenDoc.userId, username });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isSamePassword = await bcrypt.compare(newPassword, user.password);
        if (isSamePassword) {
            return res.status(400).json({ message: "New password must be different from the old password." });
        }

        
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await User.updateOne({ _id: user._id }, { password: hashedPassword });

        await ResetToken.deleteOne({ _id: resetTokenDoc._id });

        res.status(200).json({ message: "Password reset successfully." });
    } catch (error) {
        console.error("Reset Password error:", error);
        res.status(500).json({ message: "Error resetting password." });
    }
};

export default resetPassword;
