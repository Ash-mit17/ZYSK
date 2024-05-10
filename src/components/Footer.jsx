
export default function Footer() {
    const items = [
        {
            'title' : 'Product',
            't1' : 'Overview',
            't2' : 'Features',
            't3' : 'Solutions',
        },
        {
            'title' : 'Company',
            't1' : 'About us',
            't2' : 'Carrers',
            't3' : 'Contact',
        },
        {
            'title' : 'Resources',
            't1' : 'Blog',
            't2' : 'News',
            't3' : 'Events',
        },
        {
            'title' : 'Use cases',
            't1' : 'Startups',
            't2' : 'Enterprise',
            't3' : 'Government',
        },
        {
            'title' : 'Social',
            't1' : 'Twitter',
            't2' : 'LinkedIn',
            't3' : 'Github',
        },
        {
            'title' : 'Legal',
            't1' : 'Terms',
            't2' : 'Privacy',
            't3' : 'Cookies',
        },
    ]
  return (
    <div className='container'>
        <footer>
            <div className="d-flex flex-wrap justify-content-between">
                {items.map((item) => (
                    <div className="mx-4 " key={item.title}>
                        <p style={{color : '#667085'}}>{item.title}</p>
                        <p style={{fontWeight : '600'}}>{item.t1}</p>
                        <p style={{fontWeight : '600'}}>{item.t2}</p>
                        <p style={{fontWeight : '600'}}>{item.t3}</p>
                    </div>
                ))}
            </div>
            <hr />
            <div className="d-flex flex-wrap my-3 justify-content-between">
                <div>
                    <img alt="icon" className='p-1 h-32 w-32' src="/icon.png" />
                    <span className="fw-bolder">Untitled Ui</span>
                </div>
                <p>© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}
