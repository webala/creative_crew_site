import React, { Component } from 'react';
import Video from './video';

class VideosPage extends Component {
    state ={

    links: [
    {
        link: "https://youtu.be/ahvI5FyEyHw",
        desc: "KUZOEA KUCHEZEA OFFSIDE😂😂😂"
    },
    {
        link: "https://youtu.be/7WIBP5wWVnI",
        desc: "KAMA HAUNA HELA HUNA CHAKO!!!!😂😂😂😂😂😂"
    },
    {
        link: "https://youtu.be/XZSrr1LHquk",
        desc: "SITUWEISHEN PALE CHOO ZA KANJO🤣🤣😆‼️🥵💀🤒😆💯💥"
    },
    {
        link: "https://youtu.be/icAIZwTEa5k",
        desc: "WOI WATOTO WA TOWN😂😂😂😂😂😂💯💥Pizzah ulizia kwa hardware pale chini😂😂😂💥💯‼️‼️"
    }


    ]
     }
    render() { 

        const videos = this.state.links.map(link => <Video link={link.link} desc={link.desc} />)
        return ( <div>
            {videos}
        </div> );
    }
}
 
export default VideosPage;