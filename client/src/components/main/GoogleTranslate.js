import React, { Component } from 'react';

import './googleElement.css';

class GoogleTranslate extends Component {
    
    googleTranslateElementInit () {
        new window.google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,es,vi,zh-CN,ar', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element')
     }

    componentDidMount() {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');        
        document.body.appendChild(addScript);  
        window.googleTranslateElementInit = this.googleTranslateElementInit;


        
    }

    componentDidUpdate() {
        // Set up listener
        console.log("running component did mount")
        let translationDiv = document.getElementById("google_translate_element")
        console.log(translationDiv);

        if(translationDiv) {
            let selector = translationDiv.getElementsByClassName("goog-te-combo")[0]
            if(selector) {
            console.log("Adding listener")
            selector.addEventListener("change", (e) => console.log(e), false)
            }
            
        }
    }

    render() {
        return (
            <div id="google_translate_element"></div>
          );
     }
}

export default GoogleTranslate;