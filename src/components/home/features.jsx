import SectionHeader from "../section-header";
import { cube, cubeHelix1 } from "../../assets/images";

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
    <section className="section-space">
      <SectionHeader
        badge={"Everything you need"}
        h={"Streamlined for easy management"}
        p={
          "Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
        }
      />
      <div className="container center gap-7 mt-10">
        {cards.map((card, index) => (
          <div key={index} className="center space-y-2 p-4 rounded-2xl shadow-lg flex-col text-center text-secondary">
            <img src={card.img} alt={card.title} />
            <h3 className="font-bold text-3xl">{card.title}</h3>
            <p className="max-w-lg">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};