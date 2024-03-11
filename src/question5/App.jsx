// 5. Skapa Custom Hook för API-anrop 3p
// Målet med denna uppgift är att skapa en custom
// hook i React, useFetchData, för att hämta data från
//en angiven URL. Din hook ska enbart hantera datahämtning och laddningsstatus.



// Skapa en custom hook som heter: useFetchData, som tar en URL som argument
// och använder fetch för att hämta data.
// Hooken ska returnera ett objekt med två egenskaper: data (datan som hämtats)
// och isLoading (en boolean som indikerar om datahämtningen pågår).

// Använd https://jsonplaceholder.typicode.com/users som test-URL för att demonstrera
// hur din hook kan användas i en komponent för att visa användardata och en
// laddningsindikator.
// Exempel på användning:

import { useEffect, useState } from "react";

function useFetchData(URL) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() =>{
    async function getData() {
      const response = await fetch(URL)
      const data = await response.json()

      setData(data)
      setLoading(false)
    }

    
    getData()
  }, [URL]);
  return { data, loading };
}

function UserList() {
  const {data, loading} = useFetchData("https://jsonplaceholder.typicode.com/users")
  
  if (loading) return <div> Loading...</div>

  return (
    <ul>
      {data.map((user) => {
        return(
        <li key={user.id}>
          {user.username}
        </li> );
      })} 
    </ul>
  
  )

}

export default function App() {
  return (
    <div>
      <h1>can you see me</h1>
    <UserList />
    </div>
  );
}

