import React from 'react';
import ReactDom from 'react-dom';
// import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import './index.css'
class NameList extends React.Component{
    render(){
        return (
            <ul className="tabs">
                <li>{this.props.name}-{this.props.age}-{this.props.sex}</li>
                <li>{this.props.name}-{this.props.age}-{this.props.sex}</li>
                <li>{this.props.name}-{this.props.age}-{this.props.sex}</li>
            </ul>
        )
    }
}
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {ages:0,name:props.name}
    }
    timer(){
        this.setState({
            ages:this.state.ages+1000
        })
    }
    componentDidMount(){
        this.timerId = setInterval(()=>this.timer(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render(){
        var ages = this.state.ages.toLocaleString();
        return (
            <div>
                <h1>{ages}</h1>
            </div>
        )
    }
}
class Main extends React.Component{
    clickTest(){
        alert('点击了main')
    }
    componentWillMount(){
        console.log(this)
    }
    render(){
        return(
            <div className="main" onClick={this.clickTest}>
                <NameList {...this.props}/>,
                <div className="content">
                   <Content {...this.props}/>
                </div>
            </div>
        )
            
    }
}
// ReactDom.render(
//     <Main name="小猴" age="30" sex="男"/>
//     ,
//     document.getElementById('root')
// )
export default Main
