import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import firebase from 'firebase';

export default class Mafia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
    }

    componentWillMount() {
        var sessionId = this.props.match.params.id;
        var sessionDatabaseRef = firebase.database().ref("/session/" + sessionId);
        console.log(sessionDatabaseRef);
        var hostId = this.props.location.state.creator;
        var myId = firebase.auth().currentUser.uid;
        if (myId === hostId) {

            sessionDatabaseRef.child("time").set(30, (error) => {
                if (error) {
                    console.error("Error storing session metadata", error);
                }
            });
            var currentTime = 30;
            this.interval = setInterval(() => {
                sessionDatabaseRef.child("time").set(currentTime--, (error) => {
                    if (error) {
                        console.error("Error storing session metadata", error);
                    }
                });
            }, 1000);
        }
        
        sessionDatabaseRef.child("time").on("value", (snapshot) => {
            this.setState({time: snapshot.val()});
        });
    }
    //Add Buttons to set times, Server can't set the time 

    render() {
        return (
            <div>
      
        {this.state.time}
        
        </div>
        )
    }
}
