import userInterface from '../../service/user'; 

export default {
    getAllTrainee: () => {
        console.log("hi")
        return userInterface.getAllUsers();
    },
    
    getTrainee: (parent, args, context) => {
        const { id } = args;
        return userInterface.getUser(id);
    }

};