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
    id: 1,
    title: "About Us",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        id: 2,
        title: "Our Aim",
        path: "/about-us/aim",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        id: 3,
        title: "Our Vision",
        path: "/about-us/vision",
        icon: <GiYinYang />,
      },
    ],
  }, 
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        id: 5,
        title: "github",
        path: "/Contact/github",
        icon: <FaIcons.FaGithub />,
      },
      {
        id: 6,
        title: "G-mail",
        path: "/Contact/gmail",
        icon: <MdOutgoingMail />,
      },
      {
        id: 7,
        title: "Twitter",
        path: "/Contact/twitter",
        icon: <BsIcons.BsTwitter />,
      }, 
    ],
  },
  {
    id: 8,
    title: "search Song",
    path: "/search",
    icon: <IoIcons.IoMdSearch />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    id: 9,
    title: " Tracks list ",
    path: "/song",
    icon: <IoIcons.IoMdMusicalNotes/>,
  },
];