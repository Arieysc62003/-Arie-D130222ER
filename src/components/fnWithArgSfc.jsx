import React, { Component } from "react";

const FnWithArgSfc = () => {
  return (
    <button onClick={() => callMe("you called!")} className="btn btn-info">
      Func w/arg Sfc
    </button>
  );
};

const callMe = (text) => console.log(text);
export default FnWithArgSfc;
