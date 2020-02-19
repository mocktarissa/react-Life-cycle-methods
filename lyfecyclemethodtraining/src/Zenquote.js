import React from 'react'
import axios from 'axios';

class Zenquote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quote:""
        }
    }
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(res=>{
            console.log(res.data);
            this.setState({quote:res.data})
        })

    }

    render(){
        return <div>
           <h1>Hey dev always remember,</h1>
           
           <p>
           "{this.state.quote}"    
           </p>
           

        </div>
    }
}

export default Zenquote;