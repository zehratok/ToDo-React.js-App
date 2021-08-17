import React from 'react';

const PageTitle = () => {
    return (
        <div className="page-title">
            <div class="ui horizontal bulleted list">
                <a class="item">
                    EverDo
                </a>
                <a class="item">
                    MVP
                </a>
            </div>
            <div className="title">
                <h2 class="ui header">Design</h2>
                <div className="title-menu">
                    <div class="ui pagination menu">
                        <a class="active item">
                            All
                        </a>
                        <div class="item">
                            1h
                        </div>
                        <a class="item">
                            2h
                        </a>
                        <a class="item">
                            Work
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageTitle;