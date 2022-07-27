const User = require('../../../models/User');
const { UserInputError } = require('apollo-server');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

// retrieve env vars
dotenv.config()



const hashPassword = (pwd) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(pwd, salt);
}

const matchPasswords = (requestPwd, userPwd) => {
    return bcrypt.compare(requestPwd, userPwd)
}

const generateJwt = ({ username, email, userId }) => {
    return jwt.sign(
        { userId, email, username },
        process.env.TOKEN_SECRET,
        { expiresIn: '30 days' }
    )
}



module.exports = {
    Query: {
        getUsers: () => User.find(),

        async getUsers(_, { id }, context) {
            if (!context.userId) throw new Error('You must be authenticated!')
            if (context.userId !== id) throw new Error('You can only see you own datas little fella!')

            return User.findById(id)
        }
    },

    Mutation: {
        signup: async (_, { email, username, password }) => {
            const hashedPwd = await hashPassword(password)
            const user = new User({ email, username, password: hashedPwd })
            await user.save()
            return 'new user successfully created'
        },

        login: async (_, { email, username, password }) => {
            if (!username && !email) throw new Error('email or username required')
            const userPayload = email ? { email } : { username }
            const user = await User.findOne(userPayload)
            if (!user) throw new Error('Unknown user', userPayload)

            const correctPassword = await matchPasswords(password, user.password)
            if (!correctPassword) throw new Error('invalid password')

            return {
                jwt: generateJwt({
                    userId: user.id,
                    username: user.username,
                    email: user.email
                })
            }
        },

    }
}
