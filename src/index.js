/**
 * Created by pl on 2/22/16.
 */
import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyCbHb455PAsw5mUySCnxtK_KXretllnWFQ'; 



class App extends Component {
	constructor(props){
		super(props);
		this.state={ videos:[] };

		YTSearch({key: API_KEY, term: 'cats'}, (videos) => {
			this.setState({videos});
			//this.setState({videos:videos});
			//syntactic sugar
		});
	}
	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
    	);
	}
    
};

ReactDOM.render(<App />, document.querySelector('.container'));