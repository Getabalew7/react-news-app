import axios from "axios";
const API_KEY="98926636-cfbc-4d85-9c28-59c1aaa8f8f7";
const BASE_URL="https://content.guardianapis.com/search?";
class GuardianNewService{
    getNews(){
        return axios.get(BASE_URL+"api-key="+API_KEY);
    }
}
export default new GuardianNewService();
