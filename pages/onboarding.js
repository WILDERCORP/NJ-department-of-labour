import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Onboarding = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 2000); // 2 seconds
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img
                    src="/ASSET/njdol_logo_stamp.svg"
                    alt="NEW JERSEY LOGO"
                    className={styles.logo}
                />
            </div>
            <div className={styles.formSection} style={{ alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                <h2 className={styles.heading} style={{ color: '#254d73', marginBottom: '18px' }}>
                    Thank You for Your Submission
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: '#2a2f32',
                    fontSize: '1.1rem',
                    margin: '0 0 18px 0',
                    fontWeight: 500,
                    lineHeight: 1.6,
                    maxWidth: 500
                }}>
                    We are currently verifying your information.<br />
                    You will receive an update via email once the process is complete.<br /><br />
                    If you have any questions, please contact our support team.
                </p>
            </div>
            <footer className={styles.footer}>
                <p>© New Jersey Department of Labor and Workforce Development(NJLWD). All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Onboarding;