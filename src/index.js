import React from 'react';
import ReactDOM from 'react-dom';
import searchYoutube from 'youtube-api-v3-search';
// import * as serviceWorker from './serviceWorker';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCrI0kwNS07VIBB006Rhu5WuI-9hZPoYD4';
const options = {
    q: '',
    part: 'snippet',
    type: 'video'
};

searchYoutube(API_KEY, options).then((data) => {
    console.log('searchResult => ', data);
});


const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();
