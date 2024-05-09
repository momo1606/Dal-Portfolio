//Author: Mohammed Noor ul Hasan Kothaliya

import { User } from "../../../models/index.js";
import Verification from "../../../models/verification.js";

const verifyEmail = async (req, res) => {
    console.log("Email Validating request...");
  const { username, verificationCode } = req.params;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const verification = await Verification.findOne({ userId: user._id, verificationCode });
    if (!verification) {
      return res.status(404).json({ message: "Verification code not found or expired." });
    }

    user.isVerified = true;
    await user.save();

    await Verification.findByIdAndDelete(verification._id);

    return res.status(200).json({ message: "Email verified successfully." });
  } catch (err) {
    console.error('Error during email verification:', err);
    return res.status(500).json({ message: "Server error during email verification." });
  }
};

export default verifyEmail;