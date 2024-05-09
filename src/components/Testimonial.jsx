import styles from '../css/Testimonial.module.css'
export default function Testimonial() {
  return (
    <div className="container mb-5">
        <div className="text-center">
            <img src="/sisyphus.png" />
        </div>
        <p className={styles.quote}>
            We’ve been using Untitled to kick start every new project and can’t imagine working without it.
        </p>
        <img alt='avatar' src='/avatar.png' />
        <div className='text-center'>
            <p>Candice Wu</p>
            <p>Product Manager, Sisyphus</p>
        </div>
    </div>
  )
}
