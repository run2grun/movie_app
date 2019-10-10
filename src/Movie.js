import React, {Component} from 'react';
import './Movie.css';
import propTypes from 'prop-types';

class Movie extends Component{
    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    static propTypes = {
        poster : propTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt="" width="300"/>
        )
    }
}

export default Movie //다른 js파일에서 movie 컴포넌트를 사용할 수 있도록 export
