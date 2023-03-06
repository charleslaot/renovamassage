import "./App.css";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import SectionFooter from "./components/SectionFooter/SectionFooter";
import SectionPricing from "./components/SectionPricing/SectionPricing";
import SectionContact from "./components/SectionContact/SectionContact";
import SectionServices from "./components/SectionServices/SectionServices";
import SectionTestimonial from "./components/SectionTestimonial/SectionTestimonial";
import SectionAppointment from "./components/SectionAppointment/SectionAppointment";

function App() {
  return (
    <main className="Main">
      <SectionHeader />
      <SectionServices />
      <SectionPricing />
      <SectionTestimonial />
      <SectionAppointment />
      <SectionContact />
      <SectionFooter />
    </main>
  );
}

export default App;
