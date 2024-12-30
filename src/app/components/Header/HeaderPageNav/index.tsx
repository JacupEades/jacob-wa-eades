import Link from 'next/link';
import './HeaderPageNav.scss';
import cx from 'classnames';

export default function HeaderPageNav() {
  const linkClasses = cx(
    'HeaderPageNav-link',
    // TODO: @Jacob, Needs state set
    false && 'HeaderPageNav-link--isActive'
  );

  const linkObj = [
    { linkRef: '/faith', linkTitle: 'Faith', target: '' },
    { linkRef: '/About', linkTitle: 'About', target: '' },
    {
      linkRef: '/',
      // linkRef: 'https://calendly.com/daini-eades/meet',
      linkTitle: 'Contact',
      target: '_blank',
    },
  ];

  return (
    <nav id='header-page-nav' className='HeaderPageNav'>
      <div className='HeaderPageNav-inner'>
        <header className='HeaderPageNav-title'>
          <h1 className='HeaderPageNav-titleGold'>Jacob</h1>
          <h1 className='HeaderPageNav-titleGreen'>Eades</h1>
        </header>
        <div className='HeaderPageNav-linkMain'>
          {linkObj.map((obj, i) => (
            <Link
              key={i}
              href={obj.linkRef}
              target={obj.target}
              className={linkClasses}>
              {obj.linkTitle}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
