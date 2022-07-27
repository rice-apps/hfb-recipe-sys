const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers/users/users.js');

const getJwtPayload = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET);
}

const getUserId = ({ req = {}, authToken = '' }) => {
    if (req.request?.headers) {
        const authHeader = req.request.headers.authorization
        if (authHeader) {
            const token = authHeader.replace('Bearer ', '')
            if (!token) {
                return null
            }
            const { userId } = getJwtPayload(token)
            return userId;
        }
    } else if (authToken) {
        const { userId } = getJwtPayload(authToken)
        return userId
    }

    return null
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: req => {
        return {
            ...req,
            userId:
                req
                    ? getUserId({ req })
                    : null
        };
    }
})



mongoose
    .connect("mongodb+srv://RiceApps:7kbKm4o3MhESbnid@hfb-myrecipe.wjvpxg0.mongodb.net/HFB-MyRecipe?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 3000 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })
    .catch(err => {
        console.error(err)
    })

