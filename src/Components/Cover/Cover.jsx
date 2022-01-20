import React from "react";
import "./Cover.scss";

export default function Cover(props) {

  return (
    <div className="cover">
      <div className="image"></div>
      <div className="text">
        <div className="invited">You Are Invited To The Wedding Of</div>
        <div className="name">Shafila &amp; Elthon</div>
        <div className="button" onClick={() => props.onChange(true)}>
          OPEN INVITATION
        </div>
      </div>
    </div>
  );
}
