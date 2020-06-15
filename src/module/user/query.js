import { UserInputError } from 'apollo-server';

export default {
  getMe: async (parent, args, context) => {
    try {
        // console.log("inside try");
      const {
        dataSources: { userAPI },
      } = context;
      const response = await userAPI.getMe();
      return response.data;
    } catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args),
      });
    }
  },
};