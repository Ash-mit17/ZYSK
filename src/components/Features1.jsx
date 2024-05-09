import styles from '../css/Header.module.css'
import styles1 from '../css/Features.module.css'
import useWindowSize from '../hooks/useWindowSize'
export default function Features1() {
    const [windowWidth] = useWindowSize();
    const features = [
        {
            'image': 'featureicon/f (1).png',
            'title': 'Share team inboxes',
            'content': 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
        },
        {
            'image': 'featureicon/f (2).png',
            'title': 'Deliver instant answers',
            'content': 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
        },
        {
            'image': 'featureicon/f (3).png',
            'title': 'Manage your team with reports',
            'content': 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
        }
    ]
    return (
        <div className="container">
            <div>
                <badge className={styles.btn}>Features</badge>
                <p>
                    Cutting-edge features for advanced analytics
                </p>
                <p>
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>
            <div>
                <div className={styles.imgContainer}>
                    <img className={styles.img} alt='banner' src={windowWidth > 400 ? 'container.png' : 'container1.png'} />
                </div>
                <div className='d-flex flex-wrap justify-content-between mt-5'>
                    {features.map((feature) => (
                        <div style={{ width: '384px', margin: '0 10px' }} key={feature}>
                            <img alt='icon' height={48} width={48} className={styles1.icon} src={feature.image} />
                            <p className={styles1.title}>{feature.title}</p>
                            <p className={styles1.content}>{feature.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    )
}
