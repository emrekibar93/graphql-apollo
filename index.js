const { ApolloServer, gql } = require('apollo-server');
const {authors,books} = require("./data")


const typeDefs = gql`
    type Authors{
    id:ID
    name:String
    surname:String
    age:Int
    books:[Books]
    }



 type Books {
    id: ID
    title: String
    author: Authors
    score: Float
    isPublished: Boolean
    }

 type Query {
    books: [Books]
    book(id:ID): Books
    authors:[Authors]
    author(id:ID): Authors
 }

`;

const resolvers = {
    Query: {
        books: () => books,
        book :(parent,args) =>{
            const data = books.find((book)=>(book.id)===args.id);
            return data 
        },
        authors: () => authors,
        author :(parent,args) =>{
            const data = authors.find((author)=>(author.id)===args.id);
            return data 
        },
    }
 
};

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Apollo Server is Up at ${url}`));