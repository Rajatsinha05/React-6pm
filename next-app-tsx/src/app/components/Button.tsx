import React, { FC } from "react";

interface ButtonProps {
  title: string;
  content?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ title, content, onClick }) => {
  return (
    <div>
      <button onClick={onClick}> {title}</button>
    </div>
  );
};

export default Button;
