import axios  from "axios";

const API_KEY="d6d94562b44e4e21baaaacc3691fd2f2"; // The key should not be stored here.
//const API_KEY="9672383d39e04694a8536059d227903d";
const DEFAULT_NEWS_URL ="https://newsapi.org/v2/top-headlines?country=us&category=business";
class NewsService {
    getNews(){
        axios.defaults.withCredentials=false;

        const response=  axios.get(DEFAULT_NEWS_URL+"&apiKey="+API_KEY);
        axios.defaults.withCredentials=true;
        return response;
    }
    getFilteredNews(query){
        return axios.get("https://newsapi.org/v2/everything?q="+query+"&apiKey="+API_KEY);
    }
}
export default new NewsService();