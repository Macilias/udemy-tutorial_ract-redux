import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './compontents/search_bar';
import VideoList from './compontents/video_list';
const KEY = 'AIzaSyCC4vZAYbPMxItoFNGVI1NZw5S-XcIO6uI';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };

    YTSearch({key: KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

