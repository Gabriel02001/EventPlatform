import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { Event } from "./pages/Event"
import { Router } from "./Router"
import { client } from './lib/apollo'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from "react-router-dom"

function App(){
  return (
    <div>
     <ApolloProvider client={client}>
      <BrowserRouter>
       <Router />
      </BrowserRouter>
     </ApolloProvider>
      
    </div>
  )
}

export default App

// import { gql, useQuery} from "@apollo/client"
// import { useEffect } from "react"
// import { client } from "./lib/apollo"


// const GET_LESSONS_QUERY = gql`
// query {
//  lessons{
//   id 
//   title
//  }
// }
// `
// interface lesson{
//   id: string;
//   title: string;
// }

// function App() {

//  const { data } = useQuery<{lessons: lesson[] }>(GET_LESSONS_QUERY)
//  console.log(data)

//   return (
//    <ul>
//     {data?.lessons.map((lesson)=> {
//       return <li key={lesson.id}>{lesson.title}</li>
//     })}
//    </ul>
//   )
// }

// export default App
