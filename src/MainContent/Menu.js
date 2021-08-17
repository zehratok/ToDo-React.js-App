import React from 'react';
import Checkbox from './Checkbox';


const Menu = () => {
    return (
        <div className="menu-bar">
            <div className="ui secondary pointing menu">
                <a className="active item">
                    <div className="ui circular labels">
                        <a className="ui blue label">10</a>
                    </div>
                    Todos
                </a>
                <a className="item">
                    <div className="ui circular labels">
                        <a className="ui blue label">3</a>
                    </div>
                    Notes
                </a>
                <a className="item">
                    Links
                </a>

                <a class="item">
                    Files
                </a>

            </div>
            <Checkbox text="Project page"/>
            <Checkbox text="Today page"/>

        </div>
    )
}
export default Menu;