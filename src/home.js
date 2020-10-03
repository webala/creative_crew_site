import React, { Component } from 'react';
import Header from './components/Header';
import VideosPage from './components/videos';
import About from './components/about';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <About />
                <VideosPage />
            </div>
         );
    }
}
 
export default Home;