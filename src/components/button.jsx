import { cva } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "h-8  px-3 text-sm !px-0",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-8 text-base",
        full: 'h-10 px-4 text-sm w-full'
      },
      color: {
        primary: "bg-black text-white hover:bg-gray-800 focus:ring-gray-300",
        secondary:
          "bg-white text-black hover:bg-white/90 focus:ring-white-300",
        ghost:
          "bg-transparent hover:text-gray-800 group",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  }
);

function Button({ children, size, color, ...props }) {
  return (
    <button className={buttonVariants({ size, color })} {...props}>
      {children} {color === "ghost" && <ArrowRight className=" group-[&:hover]:translate-x-1 transition-transform" />}
    </button>
  );
}
export default Button;
