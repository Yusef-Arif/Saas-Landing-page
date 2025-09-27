import { motion } from "motion/react";
import { sliderVariants } from "../variants";
const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    username: "@alexinnovates",
    testimonial:
      "Our team's productivity has skyrocketed since we started using this tool.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    role: "Product Manager",
    company: "InnovateCorp",
  },
  {
    id: 2,
    name: "Morgan Lee",
    username: "@morganleewhiz",
    testimonial:
      "The ability to collaborate in real-time, combined with powerful project tracking features, has made it indispensable for our daily operations.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    role: "Engineering Lead",
    company: "TechWiz Solutions",
  },
  {
    id: 3,
    name: "Jamie Teller",
    username: "@jamietechguru00",
    testimonial:
      "This app has completely transformed how I manage my projects and deadlines.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    role: "Tech Consultant",
    company: "Freelancer",
  },
  {
    id: 4,
    name: "Casey Jordan",
    username: "@caseyj",
    testimonial:
      "I was amazed at how quickly we were able to integrate this app into our workflow.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    role: "Operations Manager",
    company: "StreamFlow Inc",
  },
  {
    id: 5,
    name: "Taylor Kim",
    username: "@taykimm",
    testimonial:
      "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    role: "Event Coordinator",
    company: "EventMasters",
  },
  {
    id: 6,
    name: "Riley Smith",
    username: "@rileysmith1",
    testimonial:
      "The customizability and integration capabilities of this app are top-notch.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    role: "Software Developer",
    company: "CodeCraft Studios",
  },
  {
    id: 7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
    testimonial:
      "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    role: "Creative Director",
    company: "Design Hub",
  },
  {
    id: 8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
    testimonial:
      "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    role: "Tech Blogger",
    company: "Tech Tips Daily",
  },
  {
    id: 9,
    name: "Casey Harper",
    username: "@casey09",
    testimonial:
      "Its user-friendly interface and robust features support our diverse needs.",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    role: "UX Designer",
    company: "Harper Design Co",
  },
];

const TestimonialsSlider = () => {
  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      className="overflow-hidden w-full relative max-h-[90vh] flex justify-center gap-10"
    >
      <div className="absolute top-0 left-0 w-full h-[20%] py-10 z-10 bg-gradient-to-b from-white via-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[20%]  py-10 z-10 bg-gradient-to-t from-white via-white to-transparent" />
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.ul
          key={index}
          variants={sliderVariants(index * 1, testimonials.length)}
          className={`flex gap-10 whitespace-nowrap flex-col ${
            index === 0 || index === 2 ? "max-sm:hidden" : ""
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </motion.ul>
      ))}
    </motion.div>
  );
};

export default TestimonialsSlider;

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="shadow-xl p-10 space-y-3 w-fit max-w-sm text-wrap rounded-3xl">
      <p>{testimonial.testimonial}</p>
      <div className="flex gap-7">
        <img
          src={testimonial.avatar}
          alt="avatar"
          className="h-20 w-20 rounded-full"
        />
        <div>
          <h1>{testimonial.name}</h1>
          <h3>{testimonial.username}</h3>
        </div>
      </div>
    </div>
  );
};
