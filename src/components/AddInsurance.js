import React from 'react';
import SideBar from './subcomponents/SideBar';
import FormComp from './subcomponents/FormComp';

function AddNew (props) {
    return(
        <div style={{display: "flex"}}>
            <SideBar />
            <FormComp history={props.history}/>
        </div>
    )
}

export default AddNew