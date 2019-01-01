import axios from 'axios';


const KEY = 'AIzaSyCeYW-t48MlUOxk3i5yNuIj8me6cZaU3aw';

export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY 
    }
});