import React from "react";
import SideBarItem from "../SideBarItemComponent/SideBarItem";
import "./SideBar.css";
import SideBarHeader from '../SideBarHeaderComponent/SideBarHeader'
import { AiFillHome, AiFillFileImage, AiFillQuestionCircle, AiOutlineContacts} from "react-icons/ai";
import { RiPagesFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { HOME, ABOUT, PAGES, PORTFOLIO, FAQ, CONTACT } from '../../constants/actionTypes';

export default function SideBar({ onSideBarItemClick }) {
  return (
    <aside>
      <SideBarHeader text="Bootstrap SideBar" />

      <h1 className="sidebar-text">Dummy Heading</h1>
      <SideBarItem
        icon={<AiFillHome />}
        text="Home"
        onClick={() => onSideBarItemClick(HOME)}
      />
      <SideBarItem
        icon={<SiAboutdotme />}
        text="About"
        onClick={() => onSideBarItemClick(ABOUT)}
      />
      <SideBarItem
        icon={<RiPagesFill />}
        text="Pages"
        onClick={() => onSideBarItemClick(PAGES)}
      />
      <SideBarItem
        icon={<AiFillFileImage />}
        text="Portfolio"
        onClick={() => onSideBarItemClick(PORTFOLIO)}
      />
      <SideBarItem
        icon={<AiFillQuestionCircle />}
        text="FAQ"
        onClick={() => onSideBarItemClick(FAQ)}
      />
      <SideBarItem
        icon={<AiOutlineContacts />}
        text="Contact"
        onClick={() => onSideBarItemClick(CONTACT)}
      />
    </aside>
  );
}


