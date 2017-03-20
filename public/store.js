import counterApp from './reducers'
import { createStore, combineReducers } from 'redux'
import { browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

const store = createStore(
    combineReducers({
        global: counterApp,
        routing: routerReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

const ApplicationStore = {
    store: store,
    history: history
}

export default ApplicationStore;