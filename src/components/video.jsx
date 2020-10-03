import React, { Component } from 'react';
import ReactPlayer from 'react-player';




class Video extends Component {
    constructor(props){
        super(props);
        this.handleLikes = this.handleLikes.bind(this);
        this.handleComentChange = this.handleComentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    state = { 
        comment: "",
        comments: [
            {id:1,body:"wow, nice",name:"Daniel Webala"},
            {id:2,body:"funny", name:"Ian Njoroge"},
        ],
        name:""

     }
    
    handleLikes() {
        this.setState(state => ({
            liked: !state.liked
        }))
        if (this.state.liked){
        this.setState(state => ({
            likes: state.likes + 1
        }))
    }else{
        this.setState(state => ({
            likes: state.likes - 1
        }))
    }
    }
    
    handleComentChange(event) {
        this.setState({
            comment: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = this.state.comments.length +1;
        const newComment = {
            id: id,
            body: this.state.comment,
            name: this.state.name
        };
        this.setState(state => ({
            comments: state.comments.push(newComment)
        }))
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() { 
        
        const descStyle = {
            fontFamily: "Alatsi",
            width: "700px"

        }

        return ( 
            <div style={{borderColor: "pink",borderWidth: "thick"}}>
                <div style={{ display:"flex"}} className="row">
                    <ReactPlayer width='480px' height='240px' controls url={this.props.link} />
                    <div style={descStyle} className="m-4">
                        <h3>{this.props.desc}</h3>
                        <br/><br/><br/><br/><br/>
                        <p style={{fontSize:25, color:"#A7039A"}}>View video in <a href={this.props.link} target="_blank">youtube</a>
                        </p>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Video;