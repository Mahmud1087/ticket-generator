import { BAR_CODE, BG } from '../../config/static';
import useLocalStorage from '../../hooks/use-local-storage';

const Ticket = () => {
  const { value } = useLocalStorage('userData', { type: 'object' });

  return (
    <div>
      <div className='relative'>
        <img
          src={BG}
          alt='ticket image'
          className='w-full h-full lg:w-[60%] mx-auto'
        />
        <img
          src={BAR_CODE}
          alt='Bar Code'
          className='absolute bottom-5 w-[80%] left-[10%] lg:w-[50%] lg:left-[25%]'
        />
        <aside className='h-[26rem] w-[80%] left-[10%] absolute border top-[4%] bg-[#031E21]/[0.1] border-[#24A0B5] p-3.5 rounded-2xl md:h-[42rem] lg:h-[33rem] lg:w-[50%] lg:left-[25%]'>
          <section className='text-center'>
            <h1 className='text-[2rem] font-road-rage md:text-5xl'>
              Techember Fest ”25
            </h1>
            <div className='flex font-roboto flex-col max-w-[21.25rem] mx-auto md:flex-row'>
              <p className='text-sm flex flex-col md:flex-row'>
                <span>📍 Lagos, Nigeria </span>
                <span className='hidden mx-1.5 md:block'>||</span>
              </p>
              <p className='text-sm'>📆 March 15, 2025 | 7:00 PM</p>
            </div>
          </section>
          <aside className='mt-5 w-full h-32'>
            <img
              src={value.image}
              alt='User profile image'
              className='h-full w-full rounded-2xl'
            />
          </aside>
        </aside>
      </div>
    </div>
  );
};
export default Ticket;
