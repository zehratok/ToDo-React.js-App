import React from 'react';
import SideBarItems from './SideBarItems';
import SideBarGroups from './SideBarGroups';
import SideBarTitles from './SideBarTitles';
import { SideBarLowerPart } from './SideBarLowerPart';
import "./SideBar.css";


const SideBarItemsList = () => {
    return (
        <div className="side-bar" >
            <SideBarItems name="Inbox" iconName="inbox" />
            <SideBarItems name="Today" iconName="star" />
            <SideBarItems name="Upcoming" iconName="calendar minus outline" />
            <SideBarItems name="Completed" iconName="check" />
            <SideBarItems name="Trash" iconName="trash alternate outline" />
            <br/>
            <SideBarTitles title="PROJECTS" />
        
            <SideBarGroups name="EverDo" />
            <SideBarGroups name="Gemshark" />
            <SideBarGroups name="Rubicon" />
            <br/>
            <SideBarTitles title="PERSONAL" />
            <SideBarGroups name="Shopping" />
            <SideBarGroups name="Health" />
            <SideBarGroups name="Entertainment" />
            <br/>
            <SideBarTitles title="LEARNING" />
            <SideBarGroups name="Electron" />
            <SideBarGroups name="Flexbox" />
            <SideBarLowerPart />


        </div>
    )
}
export default SideBarItemsList;