import React from "react"
import ContainerStyle from "./container.module.scss"

export default function Container({ children }) {
  return (
    <div className={ContainerStyle.container}>
      {children}
    </div>
  );
}