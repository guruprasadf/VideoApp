import React from 'react';
import  MovieCard from './MovieCard';
import data from './Assets/data.json'
class VideoGrid extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            initialItems: data.shows,
            items: data.shows
        }
    }
    filterList = (event) =>{
        let updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
          return item.title.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }
    render() { 
        return (
            <div className="app-container"> 
              <div className="topnav">
                <a href="">Svideo</a>
                <input type="text" placeholder="Search.." onChange={this.filterList}/>
              </div>
                { this.state.items.length > 0 &&
                <div className="movie-grid">
                    <div className="img"></div>
                    {this.state.items.map((data,i)=>{
                        return <MovieCard key ={i} data={data} {...this.props} />
                    })}
                </div>}   
               { this.state.items.length == 0 &&
                   <div className="noMatch">
                         No Match Found
                  </div>
               } 
            </div>
        )
    }
}

export default VideoGrid;