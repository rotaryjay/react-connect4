import React, { useState } from "react";
import './Spots.scss';

const Spots = () => {
    const allTheSpots = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
    const [spotClicked, setSpotClicked] = useState(0);

  return (
    <div className="connectfour">
      <div className="spot spot1 col1" onClick={() => setSpotClicked(spotClicked)}></div>
      <div className="spot spot2 col2"></div>
      <div className="spot spot3 col3"></div>
      <div className="spot spot4 col4"></div>
      <div className="spot spot5 col5"></div>
      <div className="spot spot6 col6"></div>
      <div className="spot spot7 col7"></div>
      <div className="spot spot8 col1"></div>
      <div className="spot spot9 col2"></div>
      <div className="spot spot10 col3"></div>
      <div className="spot spot11 col4"></div>
      <div className="spot spot12 col5"></div>
      <div className="spot spot13 col6"></div>
      <div className="spot spot14 col7"></div>
      <div className="spot spot15 col1"></div>
      <div className="spot spot16 col2"></div>
      <div className="spot spot17 col3"></div>
      <div className="spot spot18 col4"></div>
      <div className="spot spot19 col5"></div>
      <div className="spot spot20 col6"></div>
      <div className="spot spot21 col7"></div>
      <div className="spot spot22 col1"></div>
      <div className="spot spot23 col2"></div>
      <div className="spot spot24 col3"></div>
      <div className="spot spot25 col4"></div>
      <div className="spot spot26 col5"></div>
      <div className="spot spot27 col6"></div>
      <div className="spot spot28 col7"></div>
      <div className="spot spot29 col1"></div>
      <div className="spot spot30 col2"></div>
      <div className="spot spot31 col3"></div>
      <div className="spot spot32 col4"></div>
      <div className="spot spot33 col5"></div>
      <div className="spot spot34 col6"></div>
      <div className="spot spot35 col7"></div>
      <div className="spot spot36 col1"></div>
      <div className="spot spot37 col2"></div>
      <div className="spot spot38 col3"></div>
      <div className="spot spot39 col4"></div>
      <div className="spot spot40 col5"></div>
      <div className="spot spot41 col6"></div>
      <div className="spot spot42 col7"></div>
    </div>
  );
};

export default Spots;
