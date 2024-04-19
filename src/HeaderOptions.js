import { useSelector } from "react-redux";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/userSlice";


function  HeaderOptions({avatar, title, Icon, onClick})
{
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="header-options">
            {Icon && <Icon className="headerOption-icon"/>}
            { avatar && (<Avatar className="headerOptions-icon" src={user?.photoURL}> {user?.email[0].toUpperCase()} </Avatar>)}
            <h3 className="headerOption-title">{title}</h3>
        </div>
    )
}

export default HeaderOptions;