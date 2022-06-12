import axios from "axios";
const instance = axios.create({
    baseURL:'http://localhost:5001/clone-a4bf9/us-central1/api'//API URL(cloud function using node.js)
     
});

export default instance;