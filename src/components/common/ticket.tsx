import { Flex } from 'antd';
import { BAR_CODE, BG } from '../../config/static';
type TicketProps = {
  fullName: string | undefined;
  ticketType: string | undefined;
  noOfTickets: number | undefined;
  email: string | undefined;
  specialRequest?: string | undefined;
  image: string | undefined;
};

const Ticket = ({
  email,
  fullName,
  image,
  noOfTickets,
  ticketType,
  specialRequest,
}: TicketProps) => {
  return (
    <div>
      <div className='relative'>
        <img
          src={BG}
          alt='ticket image'
          className='w-full h-[42rem] md:w-full lg:w-[60%] mx-auto md:h-[55rem] lg:h-[49rem]'
        />
        <img
          src={BAR_CODE}
          alt='Bar Code'
          className='absolute bottom-5 w-[80%] left-[10%] lg:w-[50%] lg:left-[25%]'
        />
        <aside className='h-[31rem] w-[80%] left-[10%] absolute border top-[4%] bg-[#031E21]/[0.1] border-[#24A0B5] p-3.5 rounded-2xl md:h-[40rem] lg:h-[36.2rem] lg:w-[50%] lg:left-[25%]'>
          <section className='text-center'>
            <h1 className='text-[2rem] font-road-rage md:text-5xl'>
              Techember Fest ”25
            </h1>
            <div className='mt-2.5 flex font-roboto flex-col max-w-[21.25rem] mx-auto text-center items-center justify-center'>
              <p className='text-sm flex flex-col md:flex-row'>
                <span>📍 Lagos, Nigeria </span>
                <span className='hidden mx-1.5 md:block'>||</span>
              </p>
              <p className='text-sm'>📆 March 15, 2025 | 7:00 PM</p>
            </div>
          </section>
          <aside className='mt-5 w-40 mx-auto h-32 md:mt-9 md:h-60 md:w-3xs lg:w-[12rem] lg:mt-5 lg:h-48'>
            <img
              src={image}
              alt='User profile image'
              className='h-full w-full rounded-xl border-b-4 border-b-primary-btn/50 border-4 border-[#24A0B5] '
            />
          </aside>

          <section className='p-2.5 bg-[#08343C] border border-[#133d44] rounded-lg mt-5'>
            <Flex align='center' className=''>
              <Flex className='w-[40%]' vertical gap={4}>
                <p className='font-roboto text-[10px] text-white/35'>
                  Full Name
                </p>
                <p className='text-white font-roboto font-semibold text-xs text-wrap'>
                  {fullName}
                </p>
              </Flex>
              <div className='w-[10%]'>
                <hr className='border-none bg-[#12464E] h-10 w-[1px] mx-3' />
              </div>
              <Flex className='w-[40%]' vertical gap={4}>
                <p className='font-roboto text-[10px] text-white/35'>Email</p>
                <p className='text-white font-roboto font-semibold text-xs text-wrap'>
                  {email}
                </p>
              </Flex>
            </Flex>
            <hr className='border-none bg-[#12464E] h-[1px] w-full my-1.5' />
            <Flex align='center' className='w-full'>
              <Flex className='w-[40%]' vertical gap={4}>
                <p className='font-roboto text-[10px] text-white/35'>
                  Ticket Type
                </p>
                <p className='text-white font-roboto font-semibold text-xs text-wrap'>
                  {ticketType}
                </p>
              </Flex>
              <div className='w-[10%]'>
                <hr className='border-none bg-[#12464E] h-10 w-[1px] mx-3' />
              </div>
              <Flex className='w-[40%]' vertical gap={4}>
                <p className='font-roboto text-[10px] text-white/35'>
                  Ticket for
                </p>
                <p
                  className='text-white font-roboto font-semibold text-xs text-w
                rap'
                >
                  {noOfTickets}
                </p>
              </Flex>
            </Flex>
            <hr className='border-none bg-[#12464E] h-[1px] w-full my-1.5' />
            <aside className='h-16 md:h-20'>
              <p className='font-roboto text-[10px] text-white/35'>
                Special Request
              </p>
              <p
                className='text-white font-roboto font-semibold text-xs text-w
                rap mt-2'
              >
                {specialRequest || 'NIL'}
              </p>
            </aside>
          </section>
        </aside>
      </div>
    </div>
  );
};
export default Ticket;
