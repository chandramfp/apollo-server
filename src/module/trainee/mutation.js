import { UserInputError } from 'apollo-server';
import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  createTrainee: async (parent, args, context) => {
    try {
      const {
        payload: { name, email, role, password },
      } = args;
      const {
        dataSources: { traineeAPI },
      } = context;
      const response = await traineeAPI.createTrainee({
        name,
        email,
        role,
        password,
      });
      pubsub.publish(constant.subscriptions.TRAINEE_ADDED, {
        traineeAdded: response.data,
      });
      return response.data;
    } catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args),
      });
    }
  },

  
  updateTrainee: async (parent, args, context) => {
    try {
      const {
        payload: { id, name, email, password },
      } = args;
      const {
        dataSources: { traineeAPI },
      } = context;
      const response = await traineeAPI.updateTrainee({
        id,
        name,
        email,
        password,
      });
      pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, {
        traineeUpdated: { originalId: id, name, email },
      });
      return response.data.id;
    } catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args),
      });
    }
  },


  deleteTrainee: async (parent, args, context) => {
    try {
      const { id } = args;
      const {
        dataSources: {traineeAPI },
      } = context;
      const response = await traineeAPI.deleteTrainee(id);
      pubsub.publish(constant.subscriptions.TRAINEE_DELETED, {
        traineeDeleted: response.data.id,
      });
      return response.data.id;
    } catch (error) {
      return new UserInputError('Arguments are invalid', {
        invalidArgs: Object.keys(args),
      });
    }
  },
};