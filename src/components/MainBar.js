import React from 'react';
import SideBar from './subcomponents/SideBar';
import Content from './subcomponents/Content';

class MainBar extends React.Component {
    render() {
        return(
                <div style={{display: "flex"}}>
                    <SideBar />
                    <Content />
                </div>
        )
    }
}

export default (MainBar);