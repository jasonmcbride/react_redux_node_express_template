import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'
import { Provider } from 'react-redux'
import ApplicationStore from './store'
import MainComponent from './MainComponent'
import AnotherComponent from './AnotherComponent'
import { Router, Route, IndexRoute } from 'react-router'

render( <
    Provider store = { ApplicationStore.store } >
    <
    Router history = { ApplicationStore.history } >
    <
    Route path = "/"
    component = { MainComponent } > < IndexRoute component = { Counter }
    /><Route path="test" component={AnotherComponent} / > < /Route></Router >
    <
    /Provider>,
    document.getElementById("app")
)