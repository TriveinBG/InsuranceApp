import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class FormComp extends React.Component {

    

    render() {

        let contentHeader = {
            padding: "5vh 5vw 2vh 0",
            fontSize: "2em",
            margin: 0
        };
        
        let day = [];
        for (let i=1; i<32; i++){
            day.push(i);
        };
        let dayOption = day.map((data, index) => {
            return (
                <option key={index}>{data}</option>
            )
        });

        let month = [];
        for (let i=1; i<13; i++){
            month.push(i);
        };
        let monthOption = month.map((data, index) => {
            return (
                <option key={index}>{data}</option>
            )
        });

        let year = [];
            let d = new Date();
            let n = d.getFullYear();
        for (let i = n; i > 1900; i--){
            year.push(i);
        };
        let yearOption = year.map((data, index) => {
            return (
                <option key={index}>{data}</option>
            )
        });
        

        return(
            <div className="content">
                <p style={contentHeader}>Fill In For New Insurance:</p>
                <form className="form">
                    <div className="formDate">
                        <label className="label">Product name: </label>
                        <div className='input'>
                            <input type="text"
                                   required 
                                   name="productName"
                                   onChange={this.props.handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className="formDate">
                        <label className="label">Purchase date: </label>
                        <div className='input'>
                            <div className="date">
                                <div>Day</div>
                                <select onChange={this.props.handleChange}
                                        name="purchaseDay">
                                    {dayOption}
                                </select>
                            </div>
                            <div className="date">
                                <div>Month</div>
                                <select onChange={this.props.handleChange}
                                        name="purchaseMonth">
                                    {monthOption}
                                </select>
                            </div>
                            <div className="date">
                                <div>Year</div>
                                <select onChange={this.props.handleChange}
                                        name="purchaseYear">
                                    {yearOption}
                                </select>
                            </div>
                        </div>         
                    </div>
                    <div className="formDate">
                        <label className="label">Waranty lenght(months): </label>
                        <div className='input'>
                            <input type="number" 
                                   required
                                   onChange={this.props.handleChange}
                                   name="warantyLength">
                            </input>
                        </div>
                    </div>
                         <button onClick={(ev) => {
                                    ev.preventDefault()
                                    this.props.handleSubmit({
                                        productName: this.props.name,
                                        purchaseDay: this.props.day,
                                        purchaseMonth: this.props.month,
                                        purchaseYear: this.props.year,
                                        warantyLength: this.props.length
                                    });
                                    this.props.history.push("/list");
                                    console.log(this.state);
                            }}>Submit</button>
                                        </form>
                                    </div>
                                )
                            }
                        }
    

    
const mapStateToProps = state => {
    console.log(state);
    return {
        
        name: state.productName,
        day: state.purchaseDay,
        month: state.purchaseMonth,
        year: state.purchaseYear,
        length: state.warantyLength,
        submited: state.submited
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => {
            dispatch({
                type:"UPDATE_FORM",
                payload: {[event.target.name]: event.target.value}
            })
        },
        handleSubmit: (payload) => {
            dispatch({
                type:"SUBMIT_FORM",
                payload,
                form: true
            })
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormComp));