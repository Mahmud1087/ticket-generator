import TicketHeader from '../common/ticket-header';

const TicketReady = () => {
  return (
    <div className='relative top-40 w-[90vw] mx-auto p-6 flex flex-col gap-8 rounded-4xl bg-darkslategray-300 border border-darkslategray-100 md:p-12 md:w-[35rem] lg:w-[43.75rem] text-light-gray'>
      <TicketHeader title='Ready' />

      <section className='bg-[#08252B] p-4 rounded-4xl flex flex-col md:p-6'>
        <div className='flex flex-col gap-4 mt-2.5 md:flex-row-reverse'>
          <button
            className='block bg-primary-btn w-full border-none py-3 px-6 rounded-lg text-white text-base font-jeju disabled:bg-primary-btn/50 disabled:text-white hover:bg-primary-btn/50'
            type='submit'
            form='step-one-form'
          >
            Download Ticket
          </button>
          <button
            className='block bg-transparent border border-primary-btn w-full py-3 px-6 rounded-lg text-primary-btn text-base font-jeju hover:bg-primary-btn/50'
            // onClick={() => {
            // }}
          >
            Book Another Ticket
          </button>
        </div>
      </section>
    </div>
  );
};
export default TicketReady;
