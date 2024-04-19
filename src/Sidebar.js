import React from "react"
import "./Sidebar.css"
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar()
{

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
         <div className="sidebar-recentItem">
            <span className="sidebar-hash">
                #
            </span>
            <p>{topic}</p>
         </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://images.unsplash.com/photo-1620207418302-439b387441b0?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background profile img" />
                <Avatar src={user.photoUrl} className="sidebar-avatar">
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar-stat-number">1,209</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="sidebar-stat-number">2,998</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('Programming')}
                {recentItem('Software enginnering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>

        </div>

    )
}

export default Sidebar;