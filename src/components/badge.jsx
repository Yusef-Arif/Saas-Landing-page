const Badge = ({ children, border }) => {
  return (
    <div
      className={` ${
        border ? "border-white/30" : "border-black/15"
      }  py-1 px-3 border rounded-xl w-fit h-fit`}
    >
      <p>{children}</p>
    </div>
  );
};

export default Badge;
