import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configurations';

export class UserAPI extends RESTDataSource {
    constructor () {
        super();
        this.baseURL = `${config.serviceUrl}/user`;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }
    
    getMe() {
        return this.get('/me');
    }

    loginUser(payload) {
        // console.log('payload', payload);
        return this.post('/login', payload);
    }
}