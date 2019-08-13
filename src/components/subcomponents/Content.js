import React from 'react';
import GenContent from './GenContent'

function Content() {

    let contentHeader = {
        padding: "5vh 5vw 2vh 0",
        fontSize: "2em"
    }

    return(
        <div className="content">
            <div style={contentHeader}>List of all insurances:</div>
            <div>
                <table className='table'>
                        <GenContent />
                </table>
            </div>
        </div>
    )
}

export default Content;