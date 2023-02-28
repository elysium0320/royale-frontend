import { useState, useEffect } from "react";

import { FaDiscord } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FaLock, FaShoppingCart } from "react-icons/fa";

import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";
import icon4 from "../assets/images/icon4.svg";
import hat from "../assets/images/hat.png";
import cup from "../assets/images/cup.png";
import ticket from "../assets/images/ticket1.png";

const Profile = () => {
  const [featuredProfileItems, setFeaturedProfileItems] = useState([
    {
      image_url: icon1,
      image_bg: "yellow",
      name: "@13runoooo",
      address: "0x3aAf47f53886DB6655E777ab2b752172Cfe5a4c5",
    },
    {
      image_url: icon2,
      image_bg: "pink",
      name: "@EasyEatsBodega",
      address: "0x3aAf47f53886DB6655E777ab2b752172Cfe5a4c5",
    },
    {
      image_url: icon3,
      image_bg: "cyan",
      name: "@kurry_licious",
      address: "0x3aAf47f53886DB6655E777ab2b752172Cfe5a4c5",
    },
    {
      image_url: icon4,
      image_bg: "red",
      name: "@jpeggler",
      address: "0x3aAf47f53886DB6655E777ab2b752172Cfe5a4c5",
    },
  ]);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] flex flex-row justify-start items-start place-items-baseline">
        {/* side left start */}
        <div className="w-[70%] border-x-[1px] border-x-[gray] border-b-[1px] border-b-[gray] p-5">
          <div className="w-full flex flex-row justify-between items-center">
            <p className="text-[30px]">
              <b>Profile</b>
            </p>
            <FaDiscord className="w-[25px] h-[25px]" />
          </div>
          <div className="w-full relative py-10 border-b-[1px] border-b-[gray]">
            <input
              className="w-full bg-inherit border border-[gray] p-2 pl-10"
              placeholder="Search a username, SOL or ETH wallet"
            />
            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-[25px] w-[25px]" />
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="text-[18px] my-10">
              <b>Search a username or wallet address to get started</b>
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <p className="text-[20px]">
              <b>Featured Profiles</b>
            </p>
            <div className="w-full flex flex-row flex-wrap justify-between items-center">
              {featuredProfileItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[49%] flex flex-row justify-start items-center border border-[gray] my-2 p-2"
                  >
                    <div
                      className={`w-[50px] h-[50px] flex justify-center items-start rounded-[50%] m-2 bg-[yellow]`}
                    >
                      <img
                        src={item.image_url}
                        className="w-[50px] h-[50px]"
                        alt="Featured icons"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p>
                        <b>{item.name}</b>
                      </p>
                      <p>{`${item.address.slice(0, 5)}...${item.address.slice(
                        item.address.length - 5,
                        item.address.length
                      )}`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* side left end */}
        {/* side right start */}
        <div className="w-[30%] border-x-[1px] border-x-[gray] border-b-[1px] border-b-[gray] p-5">
          <div className="w-full flex flex-row justify-between items-center border-b-[1px] border-b-[gray] pb-5">
            <div className="flex flex-row justify-center items-center">
              <div className="p-3 bg-[#2c2b2b] rounded-[50%] m-2">
                <FiUser className="w-[30px] h-[30px]" />
              </div>
              <p>
                <b>Guest</b>
              </p>
            </div>
            <p className="text-[#297e7e]">Connect Wallet</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 border-b-[1px] pb-10 border-b-[gray]">
            <div className="relative w-[100px] h-[100px] bg-[yellow] rounded-[50%]">
              <img src={icon1} alt="user top feature icon" />
              <img
                src={hat}
                className="absolute -top-[15%] -left-[3%] w-[40%] h-[40%]"
                alt="hat"
              />
            </div>
            <p className="text-[#309999] text-[17px] my-2">
              <b>Seb Monty</b>
            </p>
            <p>3GyVe...DfqVe</p>
            <img src={cup} className="w-[40px] my-3" alt="cup" />
            <p className="text-[13px]">is the winnder of Royale 2!</p>
          </div>
          <div className="w-full flex flex-col py-5 border-b-[1px] border-b-[gray]">
            <p>Prize Pool</p>
            <p>
              <b>$25000</b>
            </p>
          </div>
          <div className="w-full flex flex-col py-5 border-b-[1px] border-b-[gray]">
            <p>Alive</p>
            <p>
              <b>1</b>
            </p>
          </div>
          <div className="w-full flex flex-col py-5 border-b-[1px] border-b-[gray]">
            <p>Eliminated</p>
            <p>
              <b>106667</b>
            </p>
          </div>
          <div className="w-full flex flex-col py-5 border-b-[1px] border-b-[gray]">
            <p>Listed for sale</p>
            <p>
              <b>6781</b>
            </p>
          </div>
          <div className="w-full flex flex-col py-5 border-b-[1px] border-b-[gray]">
            <p>Trade Volume</p>
            <p>
              <b>3156</b>
            </p>
          </div>
          <div className="w-full flex flex-col py-5">
            <p className="text-[20px]">
              <b>Collect'em all!</b>
            </p>
            <div className="w-full flex flex-row flex-wrap">
              <div className="relative w-[30%] flex justify-center items-center p-1">
                <img src={ticket} className="blur-sm" alt="ticket" />
                <FaLock className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-none text-black opacity-70" />
              </div>
              <div className="relative w-[30%] flex justify-center items-center p-1">
                <img src={ticket} className="blur-sm" alt="ticket" />
                <FaLock className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-none text-black opacity-70" />
              </div>
              <div className="relative w-[30%] flex justify-center items-center p-1">
                <img src={ticket} className="blur-sm" alt="ticket" />
                <FaLock className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-none text-black opacity-70" />
              </div>
              <div className="relative w-[30%] flex justify-center items-center p-1">
                <img src={ticket} className="blur-sm" alt="ticket" />
                <FaLock className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-none text-black opacity-70" />
              </div>
              <div className="relative w-[30%] flex justify-center items-center p-1">
                <img src={ticket} className="blur-sm" alt="ticket" />
                <FaLock className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-none text-black opacity-70" />
              </div>
              <div className="relative w-[30%] flex justify-center items-center p-1">
                <img src={ticket} className="blur-sm" alt="ticket" />
                <FaLock className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-none text-black opacity-70" />
              </div>
              <div className="relative w-[30%] flex justify-center items-center p-1">
                <img src={ticket} className="blur-sm" alt="ticket" />
                <FaLock className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-none text-black opacity-70" />
              </div>
              <div className="relative w-[30%] flex justify-center items-center p-1">
                <img src={ticket} className="blur-sm" alt="ticket" />
                <FaLock className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-none text-black opacity-70" />
              </div>
              <div className="relative w-[30%] flex justify-center items-center p-1 border-2 border-[cyan]">
                <FaShoppingCart className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-none text-[cyan] opacity-70" />
              </div>
            </div>
          </div>
        </div>

        {/* side right end */}
      </div>
    </div>
  );
};

export default Profile;
