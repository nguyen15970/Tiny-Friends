import React from 'react';

const WidgetLeft = (list) => {
    return (
            <div className="widget-left" key={list.key}>
            <img src={list.img}></img>
            <div className="content">
                {list.content}
            </div>
        </div>
    );
}

export default WidgetLeft;
