import React, { Component } from 'react';

class NotFound extends Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://kit.fontawesome.com/4b9ba14b0f.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
        return (
            <div class="mainbox">
                <div class="err">4</div>
                <i class="far fa-question-circle fa-spin"></i>
                <div class="err2">4</div>
                <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
                    <p>Let's go <a href="http://localhost:3000/">home</a> and try from there.</p>
                </div>
            </div>
        );
    }
}

export default NotFound;