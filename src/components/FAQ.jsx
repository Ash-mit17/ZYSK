import styles from '../css/Features.module.css'
import styles1 from '../css/FAQ.module.css'
import Accordion from '../utils/Accordian'
import styles2 from '../utils/Accordian.module.css'
export default function FAQ() {
    const question = [
        {
            'title': 'Is there a free trial available?',
            'content': 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
        {
            'title': 'Can I change my plan later?',
            'content': ''
        },
        {
            'title': 'What is your cancellation policy?',
            'content': ''
        },
        {
            'title': 'Can other info be added to an invoice?',
            'content': ''
        },
        {
            'title': 'How does billing work?',
            'content': ''
        },
        {
            'title': 'How do I change my account email?',
            'content': ''
        }
    ]
    return (
        <div className="container">
            <div>
                <p className={styles.heading}>
                    Frequently asked questions
                </p>
                <p className={styles.supportingText}>
                    Everything you need to know about the product and billing.
                </p>
            </div>
            <div>
                <div className={styles2.accordion}>
                    {question.map(({ title, content }) => (
                        <><hr /><Accordion key={title} title={title} content={content} /></>
                    ))}
                </div>
            </div>
            <div className={styles1.box}>
                <img alt='avatar' src='/avatar-grp.png' />
                <p className='fw-bold'>
                    Still have questions?
                </p>
                <p className='fw-400' style={{color : '#475467'}}>
                    Can’t find the contentwer you’re looking for? Please chat to our friendly team.
                </p>
                <button className={styles1.button}>
                    Get in touch
                </button>
            </div>
        </div>
    )
}
