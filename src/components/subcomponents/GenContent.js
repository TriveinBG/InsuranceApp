import React from 'react';
import {connect} from 'react-redux';

class GenContent extends React.Component {

    componentWillMount(){
        this.props.fetchStats();
    }

    
    render() {

            const dataArray = this.props.insurance

            
            const testArray = dataArray.map (data => {
                
                const id = data._id
                const d1 = new Date(data.purchaseYear, data.purchaseMonth, data.purchaseDay).toDateString()
                const futuredate = data.purchaseMonth + data.warantyLength
                const end = new Date(data.purchaseYear, futuredate, data.purchaseDay).toDateString()
                const left = Math.floor(Math.abs(new Date(data.purchaseYear, futuredate, data.purchaseDay) - new Date())*0.00000000038)
                
                return {
                    id: id,
                    name: data.productName,
                    date: d1,
                    end: end,
                    length:data.warantyLength,
                    left: left
                }
            })
            console.log(testArray)
            
            if (this.props.sorted === "down") {
                console.log(dataArray)
                    testArray.sort((a, b) => {
                        console.log(a, b)
                        console.log(a.left - b.left)
                        return a.left - b.left  
                    })
                    console.log("sorting down")
                } else if(this.props.sorted === "up"){
                    testArray.sort((a, b) => {
                        console.log(a, b)
                        console.log(b.left - a.left)
                        return b.left - a.left   
                    })
                    console.log("sorting up")
                }
                console.log(testArray)

            if (this.props.sortName === "down") {
                console.log(dataArray)
                    testArray.sort((a,b) => {
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    })
                    console.log("sorting down")
                } else if(this.props.sortName === "up"){
                    testArray.sort((a,b) => {
                        if(a.name > b.name) { return -1; }
                        if(a.name < b.name) { return 1; }
                        return 0;
                    })
                    console.log("sorting up")
                }
                console.log(testArray)

            const fillTheTable = testArray.map((data, index) => {

            var rowStyle 
            if(data.left <= 0) {
                rowStyle = {backgroundColor: "rgba(255, 0, 0, 0.3)"}
            }
            
            return(
                <tr key={index} style={rowStyle}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.date}</td>
                            <td>{data.end}</td>
                            <td>{data.length}</td>
                            <td>{data.left}</td>
                        </tr>
                    )
                })
                
                console.log(fillTheTable)

                var stylesLeft
                
                    stylesLeft = {
                        position: "absolute",
                        top: "45%",
                        right: "2%"
                    }
                    if(this.props.sorted === "up"){
                        stylesLeft = {
                            ...stylesLeft,
                            transform: "rotate(180deg)",
                            transition: "1s"
                        }
                    } else if(this.props.sorted === "down"){
                        stylesLeft = {
                            ...stylesLeft, 
                            transform: "rotate(0deg)", 
                            transition: "1s"
                        } 
                    } else if(this.props.sorted === ""){
                        stylesLeft = {
                            ...stylesLeft, 
                            transform: "rotate(90deg)", 
                            transition: "1s"
                        } 
                    }

                var stylesNameSort
                    
                    stylesNameSort = {
                        position: "absolute",
                        top: "45%",
                        right: "2%"
                    }
                    if(this.props.sortName === "up"){
                        stylesNameSort = {
                            ...stylesNameSort,
                            transform: "rotate(180deg)",
                            transition: "1s"
                        }
                    } else if(this.props.sortName === "down"){
                        stylesNameSort = {
                            ...stylesNameSort, 
                            transform: "rotate(0deg)", 
                            transition: "1s"
                        } 
                    } else if(this.props.sortName === ""){
                        stylesNameSort = {
                            ...stylesNameSort, 
                            transform: "rotate(90deg)", 
                            transition: "1s"
                        } 
                    }

                
                return(
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th style={{display: "flex", position: "relative"}}>Name<div className="upArrow" style={stylesNameSort} onClick={() => { 
                            if (this.props.sortName === "down") {
                                this.props.sortNameDown()
                                console.log("sorting down")
                            } else {
                                this.props.sortNameUp()
                                console.log("sorting up")
                            }
                        }}></div></th>
                        <th>Date of purchase</th>
                        <th>End of waranty</th>
                        <th>Waranty Months</th>
                        <th style={{display: "flex", position: "relative"}}>Months left<div className="upArrow" style={stylesLeft} onClick={() => { 
                            if (this.props.sorted === "down") {
                                this.props.sortDown()
                                console.log("sorting down")
                            } else {
                                this.props.sortUp()
                                console.log("sorting up")
                            }
                        }}></div></th>
                    </tr>
                    {fillTheTable}
                </tbody>
            )
        }
    }



const mapStateToProps = (state) => {
    console.log(state)
    return {
        insurance: state.text,
        sorted: state.sorted,
        sortName: state.sortName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStats: () => {
            dispatch({
                type:"FETCH_STATS",
                url: true,
                payload: false
            });
        },
        sortDown: () => {
            dispatch({
                type: "SORT_DOWN",
                payload: "up"
            })
        },
        sortUp: () => {
            dispatch({
                type: "SORT_UP",
                payload: "down"
            })
        },
        sortNameUp: () => {
            dispatch({
                type: "SORT_NAME_UP",
                payload: "down"
            })
        },
        sortNameDown: () => {
            dispatch({
                type: "SORT_NAME_DOWN",
                payload: "up"
            })
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenContent);