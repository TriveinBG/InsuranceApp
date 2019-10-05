import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';


const insuranceReducer = (state = {
    productName: "",
    purchaseDay:"",
    purchaseMonth:"",
    purchaseYear:"",
    warantyLength:"",
    text: [],
    sorted: "not yet",
    sortName:"not yet",
    fullList:[],
    newUser:"Ben",
    newPass:"",
    confirmPass:"",
    eMail:""
    
}, action) => {
    switch(action.type) {
        case "UPDATE_FORM":
            if(action.payload.productName){
                return state = {
                    ...state,
                    productName: action.payload.productName
                }
            } else 
            if(action.payload.purchaseDay) {
                return state = {
                    ...state,
                    purchaseDay: action.payload.purchaseDay
                }
            } else
            if(action.payload.purchaseMonth) {
                return state = {
                    ...state,
                    purchaseMonth: action.payload.purchaseMonth
                }
            } else
            if(action.payload.purchaseYear) {
                return state = {
                    ...state,
                    purchaseYear: action.payload.purchaseYear
                }
            } else
            if(action.payload.warantyLength) {
                return state = {
                    ...state,
                    warantyLength: action.payload.warantyLength
                }
            }
            break
        case "GET_STATS":
                return state = {
                    ...state,
                    text: action.payload
                }
        case "SORT_DOWN":
                return state = {
                    ...state,
                    sorted: action.payload,
                    sortName: ""
                }
        case "SORT_UP":
                return state = {
                    ...state,
                    sorted: action.payload,
                    sortName: ""
                }
        case "SORT_NAME_UP":
                return state = {
                    ...state,
                    sortName: action.payload,
                    sorted: ""
                }
        case "SORT_NAME_DOWN":
                return state = {
                    ...state,
                    sortName: action.payload,
                    sorted: ""
                }
        case "UPDATE_REG":
                if(action.payload.userName){
                    return state = {
                        ...state,
                        newUser: action.payload.userName
                    }
                } else if(action.payload.password){
                    return state = {
                        ...state,
                        newPass: action.payload.password
                    }
                } else if(action.payload.confirmPassword){
                    return state = {
                        ...state,
                        confirmPass: action.payload.confirmPassword
                    }
                } else if(action.payload.email){
                    return state = {
                        ...state,
                        eMail: action.payload.email
                    }
                }
            break;
        default:
        return state;
    }
}

const serverData = (store) => (next) => (action) => {
    if(action.url) {
        console.log("action logged", action);
        fetch('http://localhost:8000/insurance')
            .then(res => res.json())
            .then(res => store.dispatch({
                type: "GET_STATS",
                payload: res.product,
            }));
        }
    next(action);
};

const postForm = (store) => (next) => (action) => {
    if(action.form) {
        console.log("action logged", action.payload);
        fetch('http://localhost:8000/insurance', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(action.payload)
        })
        }
    next(action);
};

const newReg = (store) => (next) => (action) => {
    if(action.reg) {
        console.log("action logged", action.payload);
        fetch('http://localhost:8000/user', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(action.payload)
        })
    }
	next(action);
};

const myLogger = (store) => (next) => (action) => {
    console.log('action logged', action);
    next(action);
}

const devTools =
	window.devToolsExtension
		? window.devToolsExtension({
			serialize: true,
			actionSanitizer: action => {
				// Adding Symbol functionality to the dev tools.
				if (typeof action.type === 'symbol') {
					const actionCopy = Object.assign({}, action, {
						type: action.type.toString()
					});

					return actionCopy;
				}

				return action;
			}
		  })
        : f => f;
        
const store = createStore(insuranceReducer, compose(applyMiddleware(myLogger, postForm, serverData, newReg), devTools));

store.subscribe(() => {
    console.log("store updated", store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


    // Math.floor(Math.abs(new Date(action.payload.purchaseYear, action.payload.purchaseMonth + action.payload.warantyLength, action.payload.purchaseDay) - new Date())*0.00000000038)
