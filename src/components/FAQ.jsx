import styles from '../css/Features.module.css'
import styles1 from '../css/FAQ.module.css'
import Accordion from 'react-bootstrap/Accordion';
export default function FAQ() {
    const question = [
        {
            'qn': 'Is there a free trial available?',
            'ans': 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
        {
            'qn': 'Can I change my plan later?',
            'ans': ''
        },
        {
            'qn': 'What is your cancellation policy?',
            'ans': ''
        },
        {
            'qn': 'Can other info be added to an invoice?',
            'ans': ''
        },
        {
            'qn': 'How does billing work?',
            'ans': ''
        },
        {
            'qn': 'How do I change my account email?',
            'ans': ''
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
                {question.map((item, index) => (
                    <div key={item.qn}>
                        <Accordion className='accordion'>
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>{item.qn}</Accordion.Header>
                                <Accordion.Body>
                                    {item.ans}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                ))}
            </div>
            <div className={styles1.box}>
                <img alt='avatar' src='/avatar-grp.png' />
                <p>
                    Still have questions?
                </p>
                <p>
                    Can’t find the answer you’re looking for? Please chat to our friendly team.
                </p>
                <button className={styles1.button}>
                    Get in touch
                </button>
            </div>
        </div>
    )
}
