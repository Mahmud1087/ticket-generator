import { Link, useLocation } from 'react-router-dom';
import { ABOUT_PAGE, EVENTS_PAGE, TICKET_PAGE } from '../../config/routes';
import Logo from '../common/logo';
import { ArrowRightIcon } from '../icons';
import { Button, Dropdown, MenuProps } from 'antd';
import useNavigation from '../../hooks/use-navigate';

const navList = [
  {
    label: 'Events',
    href: EVENTS_PAGE,
  },
  {
    label: 'My Tickets',
    href: TICKET_PAGE,
  },
  {
    label: 'About',
    href: ABOUT_PAGE,
  },
];

const items: MenuProps['items'] = [
  {
    label: <Link to={EVENTS_PAGE}>Events</Link>,
    key: '0',
  },
  {
    label: <Link to={TICKET_PAGE}>My Tickets</Link>,
    key: '1',
  },
  {
    label: <Link to={ABOUT_PAGE}>About</Link>,
    key: '3',
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const { navigate } = useNavigation();

  return (
    <div className='w-[inherit] [backdrop-filter:blur(4px)] rounded-3xl bg-gray-200/[0.4] border-teal border flex items-center justify-between py-3 px-4 text-lg text-darkgray fixed top-10 z-50'>
      <div className='hidden md:block'>
        <Logo />
      </div>
      <Dropdown menu={{ items }} trigger={['click']} className='md:hidden'>
        <a onClick={(e) => e.preventDefault()}>
          <Logo />
        </a>
      </Dropdown>
      <div className='items-center gap-9 hidden md:flex'>
        {navList.map((nav, i) => {
          return (
            <Link
              key={i}
              to={nav.href}
              className={`${
                nav.href === pathname
                  ? 'text-white'
                  : 'text-darkgray hover:text-white'
              } transition-all`}
            >
              {nav.label}
            </Link>
          );
        })}
      </div>
      <Button
        type='default'
        size='large'
        className='flex gap-2 items-center justify-start text-base text-gray-100'
        onClick={() => {
          navigate(TICKET_PAGE);
        }}
      >
        <p className='uppercase font-jeju'>My Tickets</p>
        <ArrowRightIcon className='text-base' />
      </Button>
    </div>
  );
};
export default Navbar;
