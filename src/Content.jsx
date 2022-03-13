import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Dede", "Eka", "Deeva", "Runna", "Zeeta"];
    const int = Math.floor(Math.random() * 5);
    return names[int];
  };

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
    </main>
  );
};

export default Content;
