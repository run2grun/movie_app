import React, {Component} from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title: 'Harry Potter',
    poster: 'https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg'
  },
  {
    title: 'Bugs',
    poster: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409'
  },
  {
    title: 'Toy Story',
    poster: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555429044/shape/mentalfloss/toy_story_primary.png'
  },
  {
    title: 'About Time',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
]

class App extends Component{ //component -> return -> render
  render(){
    return(
      <div className="App">
        {movies.map((movie, index)=>{
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    )
  }
}

export default App;
