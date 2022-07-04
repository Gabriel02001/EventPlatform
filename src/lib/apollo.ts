import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL ,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`  
    },
    cache: new InMemoryCache  // cache: new InMemoryCache()  podia ser localstorage tb
 })

 console.log(import.meta.env.VITE_API_ACESS_TOKEN)