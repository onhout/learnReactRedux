/**
 * Created by pl on 2/22/16.
 */
import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCbHb455PAsw5mUySCnxtK_KXretllnWFQ'; 



class App extends Component {
	constructor(props){
		super(props);
		this.state={ 
			videos:[],
			selectedVideo: null 
		};

		YTSearch({key: API_KEY, term: 'cats'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			//this.setState({videos:videos});
			//syntactic sugar
		});
	}
	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
    	);
	}
    
};

ReactDOM.render(<App />, document.querySelector('.container'));