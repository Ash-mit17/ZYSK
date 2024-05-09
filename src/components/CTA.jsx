import styles from '../css/CTA.module.css'
export default function CTA() {
  return (
    <div className='container'>
        <div className={styles.box}>
            <p className={styles.heading}>Start your free trial</p>
            <p className={styles.content}>Join over 4,000+ startups already growing with Untitled.</p>
            <div className={styles.btnbox}>
                <button type='button' className={styles.button1}>Learn more</button>
                <button type='button' className={styles.button2}>Get started</button>
            </div>
        </div>
    </div>
  )
}
