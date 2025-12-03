import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            console.log("⚠️  Duplicate signup attempt for:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(fullname, email, hashedPassword);

        console.log("--------------------------------------------------");
        console.log("🆕 NEW USER SIGNUP");
        console.log(`👤 Name: ${newUser.fullname}`);
        console.log(`📧 Email: ${newUser.email}`);
        console.log(`🕒 Time: ${new Date().toLocaleString()}`);
        console.log("--------------------------------------------------");

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: newUser.id,
                fullname: newUser.fullname,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error("❌ Signup Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret", {
            expiresIn: "1h",
        });

        console.log("--------------------------------------------------");
        console.log("🔓 USER LOGIN");
        console.log(`👤 Name: ${user.fullname}`);
        console.log(`📧 Email: ${user.email}`);
        console.log(`🕒 Time: ${new Date().toLocaleString()}`);
        console.log("--------------------------------------------------");

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.error("❌ Login Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
