import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div className="flex flex-row justify-center items-center text-white">
      <Link to="/profile" className="mx-5">
        <u>Profile</u>
      </Link>
      <Link to="/leaderboards" className="mx-5">
        Leaderboards
      </Link>
      <Link to="/searchTicket" className="mx-5">
        Search Ticket
      </Link>
      <Link to="/discord" className="mx-5">
        Discord
      </Link>
      <Link to="/twitter" className="mx-5">
        Twitter
      </Link>
      <button className="border-2 border-white ml-5 py-1 px-3">
        Connect Wallet
      </button>
    </div>
  );
};

export default HeaderMenu;
