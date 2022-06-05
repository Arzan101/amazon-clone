import axios from "axios";
const instance = axios.create({
    baseURL:'...'//API URL(cloud function using node.js)
     
});

export default instance;