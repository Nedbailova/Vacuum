import React from 'react';
import './Main.css'

type Props = {
    children?: React.ReactNode;
}

const Main = ({ children }: Props) => (
  <div className="main">
    {children}
  </div>
);

export default Main;