import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md"
export const sideBarData=[
    {
        title:"Home",
        path:"/",
        cname:"nav-text",
        icon:<AiIcons.AiFillHome/>
    },
    {
        title:"History",
        path:"/history",
        cname:"nav-text",
        icon:<AiIcons.AiOutlineHistory/>
    },
    {
        title:"Liked",
        path:"/liked",
        cname:"nav-text",
        icon:<AiIcons.AiFillLike/>
    },
    {
        title:"Saved",
        path:"/saved",
        cname:"nav-text",
        icon:<HiIcons.HiSaveAs/>
    },
    {
        title:"Playlist",
        path:"/playlist-videos",
        cname:"nav-text",
        icon:<MdIcons.MdPlaylistAdd/>
    },
]