import AttendeeDetails from '../components/events/attendee-detail';
import TicketReady from '../components/events/ticket-ready';
import TicketSelection from '../components/events/ticket-selection';
import { useAppContext } from '../store';

const EventsPage = () => {
  const { currentStep } = useAppContext();
  return currentStep === 1 ? (
    <TicketSelection />
  ) : currentStep === 2 ? (
    <AttendeeDetails />
  ) : (
    <TicketReady />
  );
};
export default EventsPage;
