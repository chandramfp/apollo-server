import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configurations';

export class TraineeAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${config.serviceUrl}/trainee`;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }


    async getTrainee(options) {
        const { data: { skip, limit } } = options;
        return await this.get('/', { skip, limit });
        // return this.get('/', options);
    }

    async createTrainee(payload) {
        console.log('Trainee.js', payload);
        return this.post('/', payload);
    }

    async updateTrainee(payload) {
        return this.put('/', payload);
    }

    async deleteTrainee(id) {
        return this.delete(`/${id}`);
    }



}