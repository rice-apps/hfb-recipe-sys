import React, { useEffect, useRef } from 'react';

import './googleElement.css';

/**
 * A component with a Google Translate dropdown that allows selecting a language for the page's HTML to be translated to
 */
function GoogleTranslate(props: {setLanguage: (lang: string) => void}) {

    /**
     * A reference to the div containing the google translate language-selection dropdown
     */
    const googleTranslateDiv = useRef<HTMLDivElement>(null);

    /**
     * Initializes the google translate element
     */
    function googleTranslateElementInit () {
        // Create google translate element
        new (window as any).google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,es,vi,zh-CN,ar', layout: (window as any).google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element')

        // Set up listener to capture language selection
        if(googleTranslateDiv.current) {
            let selector = googleTranslateDiv.current.getElementsByClassName("goog-te-combo")[0] as HTMLSelectElement
            if (selector) {
                console.log("Adding listener");
                selector.addEventListener("change", (e) => props.setLanguage(selector.value), false)
            } else {
                console.log("Selector not defined");
            }
        }
    }

    /**
     * Adds the google translate source to the page
     */
    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');        
        document.body.appendChild(addScript);  
        (window as any).googleTranslateElementInit = googleTranslateElementInit;   
    }, [])

    /**
     * Return a div to contain the language selection dropdown
     */
    return (
        <div id="google_translate_element" ref={googleTranslateDiv}></div>
    );

}

export default GoogleTranslate;