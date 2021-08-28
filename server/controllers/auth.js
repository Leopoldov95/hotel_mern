import Auth from "../models/auth.js";

// bcrupt used to hash the password
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // store the user in the browser for a certain perios of time, allows the user to stay logged in for that determined period of time

export const signin = async (req, res) => {
  // need two things from the fronted - email and password
  const { username, password } = req.body;

  try {
    // check to see if user exists
    const existingUser = await Auth.findOne({ username }); // look for an existing user by using the email

    if (!existingUser)
      return res.status(404).json({ message: "User does not exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });
    // if user does exist by passing the above checks, then the user can proceed to logging in
    // send a json web token to the frontend
    // the 'test' string here is the secret key for the token
    const token = jwt.sign(
      { username: existingUser.username, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
