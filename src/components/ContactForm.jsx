import { useState } from 'react';
import styles from './ContactForm.module.css';
import polygonImg from '../public/backgoung-icon.png';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        file: null,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setFormData((prev) => ({
            ...prev,
            file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage('');

        try {
            const submitData = new FormData();

            submitData.append('name', formData.name);
            submitData.append('email', formData.email);
            submitData.append('message', formData.message);

            if (formData.file) {
                submitData.append('file', formData.file);
            }

            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                body: submitData,
            });

            const data = await response.json();

            if (data.success) {
                setMessage(data.message);
                setMessageType('success');

                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    file: null,
                });

                setTimeout(() => setMessage(''), 5000);
            } else {
                setMessage(data.message || 'Failed to send message');
                setMessageType('error');
            }
        } catch (error) {

            setMessage('Error: Unable to connect to server');
            setMessageType('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.topSection}>
                <div className={styles.titleBlock}>
                    <span className={styles.label}>Contact Me</span>

                    <h1 className={styles.title}>
                        Let me know if you want to talk
                        about a potential collaboration.
                        I'm available for freelance work.
                    </h1>
                </div>

                <a
                    href="mailto:infoname@mail.com"
                    className={styles.emailLink}
                >
                    infoname@mail.com
                </a>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                {message && (
                    <div className={`${styles.message} ${styles[messageType]}`}>
                        {message}
                    </div>
                )}

                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        name="name"
                        placeholder="What’s your name?"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        name="message"
                        placeholder="Tell me about your project"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={styles.textarea}
                    />
                </div>

                <input
                    type="file"
                    id="fileUpload"
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={handleFileChange}
                    hidden
                />

                <div className={styles.bottomRow}>
                    <button
                        type="submit"
                        disabled={loading}
                        className={styles.submitBtn}
                    >
                        {loading ? 'Sending...' : 'Get a Quote'}
                    </button>

                    <div className={styles.actions}>
                        {formData.file && (
                            <p className={styles.fileName}>
                                {formData.file.name}
                            </p>
                        )}

                        <label
                            htmlFor="fileUpload"
                            className={styles.iconBtn}
                        >
                            <svg
                                className={`${styles.icon} ${styles.iconteenyicons}`}
                            >
                                <use href="/src/public/sprite.svg#icon-teenyicons" />
                            </svg>
                        </label>

                        <button
                            type="submit"
                            className={styles.iconBtn}
                        >
                            <svg
                                className={`${styles.icon} ${styles.iconarrowright}`}
                            >
                                <use href="/src/public/sprite.svg#icon-arrow-right" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>

            <div className={styles.socialSection}>
                <p className={styles.socialTitle}>Let’s be Friends</p>

                <div className={styles.socialIcons}>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialButton}
                        style={{ backgroundImage: `url(${polygonImg})` }}
                    >
                        <svg aria-hidden="true">
                            <use href="/src/public/sprite.svg#icon-instagram" />
                        </svg>
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialButton}
                        style={{ backgroundImage: `url(${polygonImg})` }}
                    >
                        <svg aria-hidden="true">
                            <use href="/src/public/sprite.svg#icon-instagram" />
                        </svg>
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialButton}
                        style={{ backgroundImage: `url(${polygonImg})` }}
                    >
                        <svg aria-hidden="true">
                            <use href="/src/public/sprite.svg#icon-instagram" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}