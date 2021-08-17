import React from 'react';
import Checkbox from './Checkbox';

const Designing = () => {
    return (
        <div className="designing">
            <h3 className="ui dividing header">
                Designing
                <button className="button">
                    <i className="ellipsis horizontal icon"></i>
                </button>
            </h3>

            <Checkbox text="Project page" />
            <Checkbox text="Today page" />
            <Checkbox text="End of day page" />
            <Checkbox text="Notifications & Confirmations" />
            <Checkbox text="Modals" />
            <button className="btn">
                <i class="plus icon"></i>
                Add item
            </button>

        </div>
    )
}
export default Designing