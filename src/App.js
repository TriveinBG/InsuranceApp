import React from 'react';
import TopBar from './components/TopBar';
import MainBar from './components/MainBar';
import Footer from './components/Footer';
import Login from './components/Login';
import AddInsurance from './components/AddInsurance'
import RegForm from './components/subcomponents/RegForm'
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends React.Component {

        render() {
            return(
                <Router>
                    <div>
                        <TopBar />
                        <hr/>
                        <Switch>
                            <Route path='/list' component={MainBar} />
                            <Route exact path='/' component={Login} />
                            <Route path='/addnew' component={AddInsurance} />
                            <Route path='/register' component={RegForm} history={this.props.history} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            )   
        }
}



export default (App);