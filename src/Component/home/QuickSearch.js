import React, {Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "https://nodeapi-ix88.onrender.com/Users";

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            tripType:''
        }

    }
    render(){
        return(
            <QuickDisplay tripdata={this.state.tripType}/>

            )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({tripType:data})
        })
    }
}

export default QuickSearch;