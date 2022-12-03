import React from "react";
import "./SideBar.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";

function SideBar() {
  const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon}title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br/>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name}/>
      ))}
    </div>
  );
}

export default SideBar;
