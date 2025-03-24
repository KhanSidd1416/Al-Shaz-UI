import React from "react";
import { ca } from "../utils/ca";
import { Spinner } from "./Spinner";

const Button = ({
  variant = "primary",
  className,
  children,
  loading,
  disabled,
  ...props
}) => {
  const baseStyles =
    "w-full p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:drop-shadow-none";
  const variants = {
    primary: "bg-gradient-white text-white hover:drop-shadow-white",
    secondary: "bg-gradient-purple text-white hover:drop-shadow-white",
  };

  return (
    <button disabled={disabled} className={ca(baseStyles, variants[variant], className)} {...props}>
      {loading ? (
        <div className="flex flex-row items-center justify-center gap-x-2">
          Loading... <Spinner styleSize="size-4" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
