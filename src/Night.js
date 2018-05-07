import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import firebase from 'firebase';

export default class Night extends Component {
    
    
    
    render() {
        
        var players = this.props.players;
        
        var content;
        
        if(this.props.currentPlayer.role.name === "Mafia") {
            
            var listItems = [];
            
            for(var i = 0; i < players.length; i++){
                listItems.push( (<li>{players[i].id}</li>) );
            }
            
            content = (
            <div>
                <ul>{listItems}</ul>
            </div>)
        }else{
            content = (
            <div>
                Sleep ._.
            </div>)
        }
        
        return ({content})
    }
    
}