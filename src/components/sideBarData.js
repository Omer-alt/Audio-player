import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md"
import { GiYinYang } from "react-icons/gi";

export const SidebarData = [
  {
    title: "About Us",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Our Aim",
        path: "/about-us/aim",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Our Vision",
        path: "/about-us/vision",
        icon: <GiYinYang />,
      },
    ],
  }, 
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "github",
        path: "/Contact/github",
        icon: <FaIcons.FaGithub />,
      },
      {
        title: "G-mail",
        path: "/Contact/gmail",
        icon: <MdOutgoingMail />,
      },
      {
        title: "Twitter",
        path: "/Contact/twitter",
        icon: <BsIcons.BsTwitter />,
      }, 
    ],
  },
  {
    title: "search Song",
    path: "/search",
    icon: <IoIcons.IoMdSearch />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: " Tracks list ",
    path: "/song",
    icon: <IoIcons.IoMdMusicalNotes/>,
  },
];