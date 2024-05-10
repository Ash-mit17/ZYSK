import styles from '../css/Blog.module.css'
import useWindowSize from '../hooks/useWindowSize'
export default function Blog() {
    const [windowWidth] = useWindowSize();
    const blog = [
        {
            'img': '/blog/blog (1).png',
            'type': 'Design',
            'title': 'UX review presentations',
            'content': 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            'avatar': '/user.png',
            'name': 'Olivia Rhye',
            'date': '20 Jan 2024',
        },
        {
            'img': '/blog/blog (2).png',
            'type': 'Product',
            'title': 'Migrating to Linear 101',
            'content': 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
            'avatar': '/a2.png',
            'name': 'Phoenix Baker',
            'date': '19 Jan 2024',
        },
        {
            'img': '/blog/blog (3).png',
            'type': 'Software Engineering',
            'title': 'Building your API stack',
            'content': 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
            'avatar': '/a3.png',
            'name': 'Lana Steiner',
            'date': '18 Jan 2024',
        }
    ]
    return (
        <div className="container text-start mb-3">
            <div>
                <div className="d-flex justify-content-between">
                    <p className={styles.txt}>Our Blog</p>
                    {windowWidth > 500 ? <div className='d-flex justify-content-center'><button className={styles.button}>View all posts</button></div> : null}
                </div>
                <p className='fs-2 fw-bold'>
                    Lastest blog posts
                </p>
                <p>
                    Tool and strategies modern teams need to help their companies grow.
                </p>
            </div>
            <div className={styles.card}>
                {blog.map((item, index) => (
                    <div key={index}>
                        <div className={styles.imgContainer}>
                            <img className={styles.img} src={item.img} alt='blog' />
                        </div>

                        <p className={styles.txt}>{item.type}</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bolder'>{item.title}</p>
                            <img alt='icon' width={24} height={28} src='/wrap.png' />
                        </div>
                        <p className='fw-normal'>{item.content}</p>
                        <div className='d-flex justify-content-start'>
                            <div className='d-inline my-1'>
                                <img src={item.avatar} alt='avatar' />
                            </div>
                            <div className='d-inline mx-2'>
                                <span>{item.name}</span>
                                <p>{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {windowWidth < 500 ? <div className='d-flex justify-content-center'><button className={styles.button}>View all posts</button></div> : null}
        </div>
    )
}
