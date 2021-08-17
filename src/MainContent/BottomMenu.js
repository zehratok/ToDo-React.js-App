import React from 'react';
import Buttons from './Buttons';


function BottomMenu() {
    return (
        <div className="bottomMenu">
            <Buttons iconName="check" colorName="green" color="green" />
            <Buttons iconName=" x" colorName="pink" color="pink" />
            <Buttons iconName="angle right" colorName="orange" color="orange" />
            <Buttons iconName="calendar outline" colorName="purple" color="purple" />
            <Buttons iconName="tag " colorName="teal" color="blue1" />
            <Buttons iconName="search" colorName="violet" color="blue2" />
            <Buttons iconName="caret square down outline" colorName="red" color="red" />
            <Buttons iconName="plus" colorName="blue" color="blue3" />



        </div>

    );
}
export default BottomMenu;