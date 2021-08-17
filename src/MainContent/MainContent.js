import React from 'react';
import PageTitle from './PageTitle';
import Menu from './Menu';
import './MainContent.css';
import Checkbox from './Checkbox';
import Planning from './Planning';
import Designing from './Designing';
import BottomMenu  from './BottomMenu';


 const MainContent = () => {
    return (
        <div className="main-content">
            <PageTitle/>
            <Menu/>
            <Planning/>
            <Designing/>
            <BottomMenu/>
         
        </div>
    )
}
export default MainContent;