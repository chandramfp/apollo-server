# apollo-server

# What IS GraphQl
### "A Query language for API"
##### GraphQl is a Query language for APIs and runtime for fullfill Queries with our existing data. It's provides a complete and understandable discription of the data in our APIs. It's gives clients the power to ask for exactly what they need and nothing more.

##### The most important things of using GraphQl is what client want exactlt that amount of information get. No matter how big data on the server. GraphQl show to the client only those data that client want.  

### Describe your data

##### type Project {
        name: String
        tagline: String
        contributors: [User]
    }

### Ask for what you want
##### {
         project(name: "GraphQL") {
            tagline
          }
    }
    
### Get predictable results
##### {
         "project": {
         "tagline": "A query language for APIs"
       }
    }  

# Difference between GraphQl and Rest

##### In Rest, the endpoint we call is the identity of that object, but in GraphQl the identity is separate from how we fetch it.
&nbsp;
##### In REST, the shape and size of the resource is determined by the server. In GraphQL, the server declares what resources are available, and the client asks for what it needs at the time.
 &nbsp;

 ##### Often, GraphQL is presented as a revolutionary new way to think about APIs. Instead of working with rigid server-defined endpoints, you can send queries to get exactly the data you’re looking for in one request. And it’s true — GraphQL can be transformative when adopted in an organization, enabling frontend and backend teams to collaborate more smoothly than ever before. But in practice, both of these technologies involve sending an HTTP request and receiving some result, and GraphQL has many elements of the REST model built in.
&nbsp;

##### So what’s the real deal on a technical level? What are the similarities and differences between these two API paradigms? My claim by the end of the article is going to be that GraphQL and REST are not so different after all, but that GraphQL has some small changes that make a big difference to the developer experience of building and consuming an API.
&nbsp;

##### The core idea of REST is the resource. Each resource is identified by a URL, and you retrieve that resource by sending a GET request to that URL. You will likely get a JSON response, since that’s what most APIs are using these days. So it looks something like:

#### GET /books/1{
      "title": "Black Hole Blues",
      "author": { 
          "firstName": "Janna",
          "lastName": "Levin"
        }
      // ... more fields here
   }
   
##### Note: In the example above, some REST APIs would return “author” as a separate resource.

&nbsp;
##### GraphQL is quite different in this respect, because in GraphQL these two concepts are completely separate. In your schema, you might have Book and Author types:

#### type Book {
       id: ID
       title: String
       published: Date
       price: String
       author: Author
    }type Author {
        id: ID
       firstName: String
       lastName: String
       books: [Book]
   }
   
##### Notice that we have described the kinds of data available, but this description doesn’t tell you anything at all about how those objects might be fetched from a client. That’s one core difference between REST and GraphQL — the description of a particular resource is not coupled to the way you retrieve it.

&nbsp;
##### To be able to actually access a particular book or author, we need to create a Query type in our schema:

#### type Query {
        book(id: ID!): Book
        author(id: ID!): Author
    }
    
##### Now, we can send a request similar to the REST request above, but with GraphQL this time:

#### GET /graphql?query={ book(id: "1") { title, author { firstName } } }{
        "title": "Black Hole Blues",
        "author": {
            "firstName": "Janna",
        }
    }
    
# Schema and Resolvers

### Resolvers

##### Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler. Every resolver function in a GraphQL schema accepts four positional arguments as given below −

#### fieldName:(root, args, context, info) => { result }

##### An example of resolver functions is shown below −

#### //resolver function  with no parameters and returning string
    greeting:() => {
      return "hello from  TutorialsPoint !!!"
    }

    //resolver function with no parameters and returning list
    students:() => db.students.list()

     //resolver function with arguments and returning object
    studentById:(root,args,context,info) => {
      return db.students.get(args.id);
    }

### Schema

##### The GraphQL schema is at the center of every GraphQL server. It defines the server's API, allowing clients to know which operations can be performed by the server. The schema is written using the GraphQL schema language (also called schema definition language, SDL). With it, you can define object types and fields to represent data that can be retrieved from the API as well as root types that define the group of operations that the API allows.

#### const typeDefs = `
      type Book {
      id: Int!
      title: String!
      pages: Int
      chapters: Int
    }

    type Query {
       books: [Book!]
       book(id: Int!): Book
    };
    
##### What we have above is the GraphQL schema. In it, we defined a Book type with four fields and a root Query type with two fields. The two fields in the root Query type defines what queries/operations the server can execute. The books field returns a list of Book type, and the book field will return a Book type based on the id passed as an argument to the book query.
&nbsp;
##### Every field in a GraphQL type can have zero or more arguments. There's an exclamation mark that follows the scalar types assigned to some fields. This means that the field or argument is non-nullable.
    