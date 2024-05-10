import styles from '../css/Header.module.css'
export default function Header() {
    return (
        <div className={styles.headerBox}>
            <div>
                <div>
                    <div className='py-2'>
                        <span className={styles.btn}><span className={styles.btn1}>New feature</span>Checkout the team dashboard<img className='pb-1' height={16} width={16} src='/arrow-right.png' /></span>
                    </div>
                    <div>
                        <p className={styles.headingText}>Beautiful analytics to grow smarter</p>
                    </div>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <span className={styles.supportingText}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</span>
                    </div>
                </div>
                <div>
                    <div className='py-3'>
                        <button type='button' className={styles.button1}><img height={24} width={24} className='px-1 pb-1' src='/play-circle.png' />Demo</button>
                        <button type='button' className={styles.button2}>Sign up</button>
                    </div>
                </div>
            </div>
            <div style={{ margin: '32px 0', border: '8px solid black', borderRadius: '12px' }}>
                <div className={styles.imgContainer}>
                    <img className={styles.img} alt='banner' src="/screenmockup.png" />
                </div>
            </div>
        </div>
    )
}
