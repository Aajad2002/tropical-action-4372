import { BookingDetails } from "./TravelAddOn/BookingDetails";
import { ContactForm } from "./TravelAddOn/Contact";
import { Form } from "./TravelAddOn/ContactForm";
import { TravelAndAddOnn } from "./TravelAddOn/TravelAndAddonn";

export const FlightTicketData = () => {
    return (
      <div>
        <TravelAndAddOnn/>
        <ContactForm />
        <Form/>
        <BookingDetails/>
      </div>
    );
  };