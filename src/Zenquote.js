import React from 'react'
import axios from 'axios';
import Loader from './Loader'
import './loader.css'

class Zenquote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quote:"",
            isLoading:true
        }
    }
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(res=>{
           
            setTimeout(
                function(){
                    this.setState({quote:res.data,isLoading:false})
    
                }.bind(this),3000
            );
    
            
        });
       
    }

    render(){
        

return(
    <div>
    {
    this.state.isLoading ? <Loader></Loader> :
     <div>Hey dev , remember : <br/> <div className="quote"> 
     " {this.state.quote}"
         </div></div>
    
    }
    </div>
) 

            
            
           

        
    }
}

export default Zenquote;