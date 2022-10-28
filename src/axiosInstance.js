import axios from 'axios'
import { store} from './store/store'
import myConfig from './config'

export default axios.create({
    baseURL: myConfig.apiUrl,
    // timeout: 1000,
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},

    transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        if(store.state.token){
            headers.Authorization = `Bearer ${store.state.token}`
        }
        return JSON.stringify(data);
    }],
});