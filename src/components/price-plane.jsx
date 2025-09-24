import Badge from "./badge";
import Button from "./button";
import { Check } from "lucide-react";

const PricePlane = ({ plane, price, features, bg }) => {
  return (
    <div
      className={`${
        bg ? "bg-black text-white" : "text-secondary"
      } p-10 border-black/5 border shadow-lg rounded-2xl  space-y-5`}
    >
      <div className="flex justify-between">
        <h2 className="font-bold mb-5 text-xl ">{plane}</h2>
        {bg && (
          <Badge border='white'>
            <span className="gradiant-text !text-md">Most Popular</span>
          </Badge>
        )}
      </div>
      <h1 className="text-5xl font-bold">
        ${price} <span className="font-semibold text-xl">/ monthly</span>
      </h1>
      <Button color={bg && "secondary"} size={"full"}>
        {price === 0 ? "Get started for free" : "Sign up now"}
      </Button>
      {features.map((feature) => (
        <p key={feature} className="flex items-center mb-3">
          <Check className="mr-2" />
          {feature}
        </p>
      ))}
    </div>
  );
};

export default PricePlane;
