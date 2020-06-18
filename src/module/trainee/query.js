import { UserInputError } from 'apollo-server';


export default {
    getTrainee: async (parent, args, context) => {
            const {
                dataSources: { traineeAPI },
            } = context;
            const response = await traineeAPI.getTrainee(args);
            return response.data;
     },
};