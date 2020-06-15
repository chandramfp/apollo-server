import { UserInputError } from 'apollo-server';


export default {
    getTrainee: async (parent, args, context) => {
        try {
            const {
                dataSources: { traineeAPI },
            } = context;
            const response = await traineeAPI.getTrainee(args);
            return response.data.records;
        } catch (error) {
            return new UserInputError('Arguments are invalid', {
                invalidArgs: Object.keys(args),
            });
        }
    },
};

