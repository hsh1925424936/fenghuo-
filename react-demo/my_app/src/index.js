import React from 'react';
import ReactDOM from 'react-dom';
// import Test from './pages/test/index'
import Route from './router/'
// ReactDom.render(<Test name="小猴" age="30"/>,document.getElementById('root'))
const render = Component =>{
    ReactDOM.render(
        <Component/>,
        document.getElementById('root')
    )
}
render(Route)