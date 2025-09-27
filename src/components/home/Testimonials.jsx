import SectionHeader from "../section-header";
import TestimonialsSlider from "../testimonials-slider";

const Testimonials = () => {
  return (
    <section className="section-space container" id="customers">
      <SectionHeader badge={"Testimonials"} h={"What our users say"} />
      <TestimonialsSlider />
    </section>
  );
};

export default Testimonials;
