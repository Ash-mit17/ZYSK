import styles from '../css/Testimonial.module.css'
export default function Testimonial() {
  return (
    <div style={{ backgroundColor: '#F9FAFB', textAlign: 'center' }} className="my-5 py-4">
      <div className="text-center">
        <img src="/sisyphus.png" />
      </div>
      <div className='d-flex justify-content-center'>
        <p className={styles.quote}>
          We’ve been using Untitled to kick start every new project and can’t imagine working without it.
        </p>
      </div>
      <img alt='avatar' src='/avatar.png' />
      <div className='text-center'>
        <p className='fw-bold'>Candice Wu</p>
        <p>Product Manager, Sisyphus</p>
      </div>
    </div>
  )
}
