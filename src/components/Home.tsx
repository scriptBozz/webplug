import React from 'react'
import Test from './test';
import Downloadcv from './downloadcv';
import Showcv from './showcv';


export default function Home() {
   

  return (
    <div className="landingpage">
      <div className="header">
        <Test />
      </div>
      <div style={{}}>
        <Downloadcv />
        <Showcv />
      </div>
    </div>
  );
}
