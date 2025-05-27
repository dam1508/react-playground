import React from "react";
import "./Canvas.css";

const Canvas = ({ children }: { children: React.ReactNode }) => {
   return <div className="Canvas">{children}</div>;
};

export default Canvas;
