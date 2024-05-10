
export default function Footer() {
    const items = [
        {
            'title' : 'Product',
            't1' : 'Overview',
            't2' : 'Features',
            't3' : 'Solutions',
            't4' : 'Pricing',
            't5' : 'Tutorials',
            't6' : 'Releases',
        },
        {
            'title' : 'Company',
            't1' : 'About us',
            't2' : 'Carrers',
            't3' : 'Contact',
            't4' : 'News',
            't5' : 'Mediakit',
            't6' : 'Press',
        },
        {
            'title' : 'Resources',
            't1' : 'Blog',
            't2' : 'News',
            't3' : 'Events',
            't4' : 'Help center',
            't5' : 'Tutorials',
            't6' : 'Support',
        },
        {
            'title' : 'Use cases',
            't1' : 'Startups',
            't2' : 'Enterprise',
            't3' : 'Government',
            't4' : 'Saas centre',
            't5' : 'Marketplace',
            't6' : 'Ecommerce',
        },
        {
            'title' : 'Social',
            't1' : 'Twitter',
            't2' : 'LinkedIn',
            't3' : 'Github',
            't4' : 'AngoList',
            't5' : 'Dribbble',
            't6' : 'Facebook',
        },
        {
            'title' : 'Legal',
            't1' : 'Terms',
            't2' : 'Privacy',
            't3' : 'Cookies',
            't4' : 'License',
            't5' : 'Settings',
            't6' : 'Contact',
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
                        <p>
                            <span style={{fontWeight : '600'}}>{item.t3}</span>
                            {item.t3 === 'Solutions'? <img className="px-1" src="/new.png" alt="new" /> : null}
                        </p>
                        <p style={{fontWeight : '600'}}>{item.t4}</p>
                        <p style={{fontWeight : '600'}}>{item.t5}</p>
                        <p style={{fontWeight : '600'}}>{item.t6}</p>
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
