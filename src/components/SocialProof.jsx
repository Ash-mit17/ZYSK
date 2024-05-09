import styles from '../css/SocialProof.module.css'
export default function SocialProof() {
  const icons = [
    {
        'image' : 'logo.png',
        'name' : 'Boltshift'
    },
    {
        'image' : 'logo1.png',
        'name' : 'Lightbox'
    },
    {
        'image' : 'logo2.png',
        'name' : 'FeatherDev'
    },
    {
        'image' : 'logo3.png',
        'name' : 'Spherule'
    },
    {
        'image' : 'logo4.png',
        'name' : 'GlobalBank'
    },
    {
        'image' : 'logo5.png',
        'name' : 'Nietzsche'
    }
  ]
  return (
    <div style={{height: '296px'}}>
      <div className='py-5 fw-bold'>
        Join 4,000+ companies already growing
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {icons.map((icon, index) => (
          (
            <div className={styles.box} key={index}>
                <img src={icon.image} alt={icon.name} />
                <p className='m-1'>{icon.name}</p>
            </div>
          )
        ))}
      </div>
      <hr />
    </div>
  )
}
