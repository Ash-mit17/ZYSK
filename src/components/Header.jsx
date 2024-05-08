import styles from '../css/Header.module.css'
export default function Header() {
    return (
        <div className={styles.headerBox}>
            <div>
                <div>
                    <div>
                        <badge className={styles.btn}><badge className={styles.btn1}>New feature</badge>Checkout the team dashboard<img className='pb-1' height={16} width={16} src='/arrow-right.png' /></badge>
                    </div>
                    <div>
                        <p className={styles.headingText}>Beautiful analytics to grow smarter</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p className={styles.supportingText}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <button type='button' className={styles.button1}><img height={24} width={24} className='px-1 pb-1' src='/play-circle.png' />Demo</button>
                        <button type='button' className={styles.button2}>Sign up</button>
                    </div>
                </div>
            </div>
            <div style={{ margin: '32px 0', border: '8px solid black', borderRadius: '12px' }}>
                <img height={810} width={1216} src="/screenmockup.png"></img>
            </div>
        </div>
    )
}
