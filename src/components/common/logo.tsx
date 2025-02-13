import { LOGO_IMG } from '../../config/static';

const Logo = () => {
  return (
    <div className='w-[91.8px] h-9'>
      <img src={LOGO_IMG} alt='Logo Image' className='w-full h-full' />
    </div>
  );
};
export default Logo;
