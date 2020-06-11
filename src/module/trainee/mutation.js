import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
    createTrainee: (parent, args, context) => {
        // console.log("hello");
        const { user } = args;
        const addUser= userInstance.createUser(user);
        pubsub.publish(constant.subscriptions.TRAINEE_ADDED, {traineeAdded: addUser});
        return addUser;
    },
    updateTrainee: (parent, args, context) => {
        const { id, role } = args;
        const updatedUser = userInstance.updateUser(id, role);
        pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, {traineeUpdated: updatedUser});
        return updatedUser;
    },
    deleteTrainee: (parent, args, context) => {
        const { id } = args;
        const deletedId = userInstance.deleteUser(id);
        pubsub.publish(constant.subscriptions.TRAINEE_DELETED, {traineeDeleted: deletedId});
        return deletedId;
    }
};