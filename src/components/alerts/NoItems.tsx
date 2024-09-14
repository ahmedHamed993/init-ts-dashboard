import React from "react";

type Props = {};

const NoItems = (props: Props) => {
  return (
    <div>
      <img
        src="/images/empty.svg"
        width="128px"
        height="128px"
        alt="no items"
        style={{
          transform: "scale(-1,1)",
          margin: "auto",
          display: "block",
        }}
      />
      <h3 style={{ textAlign: "center", marginTop: "1rem" }}>لا يوجد عناصر</h3>
    </div>
  );
};

export default NoItems;
