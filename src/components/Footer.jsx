
export default function Footer() {
    const items = [
        {
            'title' : 'Company',
            't1' : 'q',
            't2' : 'w',
            't3' : 'e',
        },
        {
            'title' : 'Company',
            't1' : 'q',
            't2' : 'w',
            't3' : 'e',
        },
        {
            'title' : 'Company',
            't1' : 'q',
            't2' : 'w',
            't3' : 'e',
        },
        {
            'title' : 'Company',
            't1' : 'q',
            't2' : 'w',
            't3' : 'e',
        },
        {
            'title' : 'Company',
            't1' : 'q',
            't2' : 'w',
            't3' : 'e',
        },
        {
            'title' : 'Company',
            't1' : 'q',
            't2' : 'w',
            't3' : 'e',
        }
    ]
  return (
    <div className='container'>
        <footer>
            <div className="d-flex justify-content-between">
                {items.map((item) => (
                    <div className="mx-2" key={item.title}>
                        <p>{item.title}</p>
                        <p>{item.t1}</p>
                        <p>{item.t2}</p>
                        <p>{item.t3}</p>
                    </div>
                ))}
            </div>
            <hr />
            <div className="d-flex my-3 justify-content-between">
                <div>
                    <img className='p-1 h-32 w-32' src="/icon.png" />
                    <span>Untitled Ui</span>
                </div>
                <p>© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}
