import React, { Component } from 'react';
import { AppHeader } from './components/appHeader';
import { ContentArea } from './components/contentArea';
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppHeader/>
                <ContentArea title="The Programme">
                    <p>Feeling Confidence is a very nice programme and will help you loads. Scouts honour! :)</p>
                </ContentArea>
                <ContentArea title="About us">
                    <p>We are very nice people and know stuff about brains.</p>
                </ContentArea>
                <ContentArea title="Impressum">
                    Feeling Confidence Inc.<br/>
                    Straßenberger Weg 123<br/>
                    45678 Ruhrgebiet<br/>
                </ContentArea>
            </div>
        );
    }
}

export default App;
