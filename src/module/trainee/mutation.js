import userInterface from '../../service/user';

export default {
    createTrainee: (parent, args, context) => {
        const { user } = args;
        return userInterface.createUser(user);
    },
    updateTrainee: (parent, args, context) => {
        const { id, role } = args;
        return userInterface.updateUser(id, role);
    },
    deleteTrainee: (parent, args, context) => {
        const { id } = args;
        return userInterface.deleteUser(id);
    }
}