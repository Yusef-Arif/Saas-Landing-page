import PricePlane from "../price-plane";
import SectionHeader from "../section-header";

const Prices = () => {
  const plans = [
    {
      plane: "Free",
      price: 0,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
      ],
    },
    {
      plane: "Pro",
      price: 9,
      features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced analytics",
        "Export capabilities",
      ],
      bg: "black",
    },
    {
      plane: "Business",
      price: 19,
      features: [
        "Unlimited project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
    },
  ];
  return (
    <section className="section-space">
      <SectionHeader
        badge={"Flexible plans"}
        h={"Pricing"}
        p={
          "Free forever. Upgrade for unlimited tasks, better security, and exclusive features."
        }
      />
      <div className="container flex justify-evenly gap-10 items-end">
        {plans.map((plane) => (
          <PricePlane
            key={plane}
            features={plane.features}
            plane={plane.plane}
            price={plane.price}
            bg={plane.bg}
          />
        ))}
      </div>
    </section>
  );
};

export default Prices;
