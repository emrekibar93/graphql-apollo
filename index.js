const { ApolloServer, gql } = require('apollo-server');
const {authors,books} = require("./data")


const typeDefs = gql`
    type Author{
    id:ID
    name:String
    surname:String
    age:Int
    books(filter:String):[Book]
    }



 type Book {
    id: ID
    title: String
    author: Author
    author_id: String!
    score: Float
    isPublished: Boolean
    }

 type Query {
    books: [Book]
    book(id:ID): Book
    authors:[Author]
    author(id:ID): Author
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
    },
    Book: {
        author:(parent,args) => {
            return authors.find((author)=>author.id===parent.author_id)
        }
    },
    Author: {
        books:(parent,args) => {
            if(args.filter){return books.filter((book)=>book.author_id===parent.id && book.title.toLowerCase().startsWith(args.filter.toLowerCase()))}
            else {
                return books.filter((book)=>book.author_id===parent.id)
            }
            
        }

    }
 
};

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Apollo Server is Up at ${url}`));