import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());

const upload = multer({
    dest: "uploads/",
});

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post(
    "/api/contact",
    upload.single("file"),
    async (req, res) => {

        const { name, email, message } = req.body;

        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            const mailOptions = {
                from: process.env.SMTP_FROM,
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
            };

            if (req.file) {
                mailOptions.attachments = [
                    {
                        filename: req.file.originalname,
                        path: req.file.path,
                    },
                ];
            }

            const info = await transporter.sendMail(mailOptions);

            return res.json({
                success: true,
                message: "Email sent successfully!",
            });

        } catch (error) {

            return res.json({
                success: false,
                message: "Failed to send email",
            });
        }
    }
);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});