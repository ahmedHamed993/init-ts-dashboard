import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: Props) => {
  return (
    <p
      style={{
        color: "#d32f2f",
        marginLeft: "1em",
        marginRight: "14px",
        fontSize: ".75rem",
      }}
    >
      {children}
    </p>
  );
};

export default ErrorMessage;
