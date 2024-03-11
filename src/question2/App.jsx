// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.


import { useState } from "react";
function App() {
  const [email, setEmail] = useState("default@mail.com")
  const [edit, setEdit] = useState(false)
 

  function editHandler(e) {
    setEmail(e.target.value)
  }

  function buttonHandler() {
    setEdit(!edit)
  }

  function theWholeThing() {
    if (edit) {
      return (
        <>
          <input type="text" value={email} onChange={editHandler}></input><button onClick={buttonHandler}>Save</button>
          
        </>
      );
    } else {
    
      return (
        <>
          <input type="text" value={email}></input>
          <button onClick={buttonHandler}>Edit</button>
          <p>{email}</p>
        </>
      );
    }
  }

  return(
  <div>{theWholeThing()}
  </div>)

}
export default App;
