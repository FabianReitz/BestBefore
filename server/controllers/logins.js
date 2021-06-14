import LoginInfo from '../models/userProfile.js';

export const getLogin = async (req, res) => {
    try {
        const loginInfo = await LoginInfo.find();

        res.status(200).json(loginInfo);
    } catch (error) {
        res.status(400).json({ message: ErrorEvent.message });
    }
};

// export const setLogin = async (req, res) => {
//     const user = req.body;

//     const newUser = new LoginInfo(user);

//     try {
//         await newUser.save();

//         console.log('User: ' + user);

//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// };
