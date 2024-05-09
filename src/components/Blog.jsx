import styles1 from '../css/FAQ.module.css'
import styles from '../css/Blog.module.css'
export default function Blog() {
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
        <div className="container text-start">
            <div>
                <div className="d-flex justify-content-between">
                    <p className={styles.txt}>Our Blog</p>
                    <button className={styles1.button}>View all posts</button>
                </div>
                <p>
                    Lastest blog posts
                </p>
                <p>
                    Tool and strategies modern teams need to help their companies grow.
                </p>
            </div>
            <div className={styles.card}>
                {blog.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt='blog' />
                        <p>{item.type}</p>
                        <p>{item.title}</p>
                        <p>{item.content}</p>
                        <div className='d-flex justify-content-start'>
                            <div className='d-inline'>
                                <img src={item.avatar} alt='avatar' />
                            </div>
                            <div className='d-inline'>
                                <p>{item.name}</p>
                                <p>{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
