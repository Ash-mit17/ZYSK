import styles from '../css/Features.module.css'
export default function Features() {
  const features = [
    {
        'image' : 'featureicon/f (1).png',
        'title' : 'Share team inboxes',
        'content' : 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
    },
    {
        'image' : 'featureicon/f (2).png',
        'title' : 'Deliver instant answers',
        'content' : 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
    },
    {
        'image' : 'featureicon/f (3).png',
        'title' : 'Manage your team with reports',
        'content' : 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
    },
    {
        'image' : 'featureicon/f (4).png',
        'title' : 'Connect with customers',
        'content' : 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.'
    },
    {
        'image' : 'featureicon/f (5).png',
        'title' : 'Connect the tools you already use',
        'content' : 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.'
    },
    {
        'image' : 'featureicon/f (6).png',
        'title' : 'Our people make the difference',
        'content' : 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.'
    }
  ]
  return (
    <div className="container">
        <div>
                <p className={styles.subheading}>Features</p>
                <p className={styles.heading}>Analytics that feels like it’s from the future</p>
                <p className={styles.supportingText}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='d-flex flex-wrap justify-content-between'>
            {features.map((feature) => (
                <div style={{width: '384px', margin: '0 10px'}} key={feature}>
                    <img alt='icon' height={48} width={48} className={styles.icon} src={feature.image} />
                    <p className={styles.title}>{feature.title}</p>
                    <p className={styles.content}>{feature.content}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
