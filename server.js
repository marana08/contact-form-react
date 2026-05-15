import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/api/contact", async (req, res) => {
    console.log("REQUEST:", req.body);

    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // 587 = false
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        console.log("FROM (SMTP_USER):", process.env.SMTP_USER);

        const info = await transporter.sendMail({
            from: `"Contact Form" <a77c34001@smtp-brevo.com>`,
             to: email,
            bcc: process.env.SMTP_FROM,
            replyTo: email,
            subject: `New message from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `,
        });

        console.log("📨EMAIL SENT:", info.messageId);
        console.log("Accepted:", info.accepted);
        console.log(" Rejected:", info.rejected);

        return res.json({
            success: true,
            message: "Email sent successfully!",
        });

    } catch (error) {
        console.error("EMAIL ERROR:", error);

        return res.json({
            success: false,
            message: "Failed to send email",
        });
    }
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});