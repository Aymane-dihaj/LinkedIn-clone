import "./HeaderOptions.css";
import { Avatar } from "@mui/material";

function  HeaderOptions({avatar, title, Icon})
{
    return (<div className="header-options">
        {Icon && <Icon className="headerOption-icon"/>}
        {avatar && <Avatar className="headerOptions-icon" src={avatar}/>}
        <h3 className="headerOption-title">{title}</h3>
    </div>)
}

export default HeaderOptions;