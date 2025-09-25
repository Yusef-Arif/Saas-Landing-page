import SectionHeader from "../section-header";
import { cube, cubeHelix1 } from "../../assets/images";
import { motion } from "motion/react";

export const Features = () => {
  const cards = [
    {
      img: cubeHelix1,
      title: "Integration ecosystem",
      desc: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
    },
    {
      img: cube,
      title: "Goal setting and tracking",
      desc: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    },
  ];

  return (
    <section className="section-space space-y-7">
      <SectionHeader
        badge={"Everything you need"}
        h={"Streamlined for easy management"}
        p={
          "Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
        }
      />
      <div className="container center gap-7 mt-10 max-md:flex-col max-md:p-10 max-md:m-5">
        {cards.map((card, index) => (
          <motion.div
            whileHover={{ scale: 1.05 ,transition:{duration:0.3}}}
            key={index}
            className="center space-y-2 p-7 rounded-2xl shadow-lg flex-col text-center text-secondary"
          >
            <motion.img
              animate={{
                y: [30, -15],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              src={card.img}
              alt={card.title}
            />
            <h3 className="font-bold text-3xl">{card.title}</h3>
            <p className="max-w-lg">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
