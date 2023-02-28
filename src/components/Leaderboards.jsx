import { useState, useEffect } from "react";

const Leaderboards = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] flex flex-row">
        <div className="w-[70%] border-x-[1px] border-x-[gray] border-b-[1px] border-b-[gray] p-5">
          left
        </div>
        <div className="w-[30%] border-x-[1px] border-x-[gray] border-b-[1px] border-b-[gray] p-5">
          right
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;
