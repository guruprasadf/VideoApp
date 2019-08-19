import React from "react";
import './Style.css';

export default class List extends React.Component {

    render(){
        return (
            <React.Fragment>
               {
                   this.props.items.map(function(data,i){
                        return <Video key={i} item={data}/>
                   })
               }
               
            </React.Fragment>
            
        )
    }
}

function Video(props) {
    return (
        <div className="video">
            {props.item.title}
            
        </div>
    );
  }