import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
  
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
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
    subNav: [
      {
        title: "github",
        path: "/Contact/github",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Twitter",
        path: "/Contact/twitter",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "G-mail",
        path: "/Contact/gmail",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "search Song",
    path: "/search",
    icon: <FaIcons.FaEnvelopeOpenText />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: " Song ",
    path: "/song",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];