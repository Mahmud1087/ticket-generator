/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import useLocalStorage from '../../hooks/use-local-storage';
import TicketHeader from '../common/ticket-header';
import { Flex } from 'antd';
import Ticket from '../common/ticket';
import { UserDataType } from '../../store/contexts/app/provider';
import { EVENTS_PAGE } from '../../config/routes';
import useNavigation from '../../hooks/use-navigate';
import { useAppContext } from '../../store';

const TicketReady = () => {
  const { value } = useLocalStorage<UserDataType>('userData', {
    type: 'object',
  });
  const { value: tickets, setValue: setTickets } = useLocalStorage<
    UserDataType[]
  >('myTickets', { type: 'array' });
  const { navigate } = useNavigation();
  const { setCurrentStep } = useAppContext();

  useEffect(() => {
    if (
      value &&
      tickets &&
      value.fullName !== '' &&
      value.email !== '' &&
      value.image !== ''
    ) {
      const newTicket = tickets.some(
        (item) => item.fullName === value.fullName
      );
      if (!newTicket) {
        setTickets([...tickets, value]);
      }
    } else {
      return;
    }
  }, []);

  return (
    <div className='relative top-40 w-[90vw] mx-auto p-6 flex flex-col gap-8 rounded-4xl bg-darkslategray-300 border border-darkslategray-100 md:p-12 md:w-[35rem] lg:w-[43.75rem] text-light-gray'>
      <TicketHeader title='Ready' />

      {/* <section className='bg-[#08252B] p-4 rounded-4xl flex flex-col md:p-6'> */}
      <Flex vertical gap={12} align='center'>
        <h1 className='text-light-gray text-center font-roboto text-2xl font-semibold'>
          Your Ticket is Booked!
        </h1>
        <p className='text-light-gray font-roboto text-base'>
          You can download or Check your email for a copy
        </p>
      </Flex>

      <Ticket
        email={value?.email}
        fullName={value?.fullName}
        image={value?.image}
        noOfTickets={value?.noOfTickets}
        ticketType={value?.ticketType}
        specialRequest={value?.specialRequest}
      />

      <div className='flex flex-col gap-4 mt-2.5 md:flex-row-reverse'>
        <button className='block bg-primary-btn w-full border-none py-3 px-6 rounded-lg text-white text-base font-jeju disabled:bg-primary-btn/50 disabled:text-white hover:bg-primary-btn/50'>
          Download Ticket
        </button>
        <button
          className='block bg-transparent border border-primary-btn w-full py-3 px-6 rounded-lg text-primary-btn text-base font-jeju hover:bg-primary-btn/50'
          onClick={() => {
            navigate(EVENTS_PAGE);
            setCurrentStep(1);
          }}
        >
          Book Another Ticket
        </button>
      </div>
    </div>
  );
};
export default TicketReady;
