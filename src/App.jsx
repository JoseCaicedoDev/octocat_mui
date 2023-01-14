import { Container, Typography } from "@mui/material"
import { Search } from "./components/Search"
import { useState, useEffect } from "react"
import { getUser } from "./services/users"
import { UserCard } from "./containers/userCard"
import { Padding } from "@mui/icons-material"
function App() {

  const [inputUser, setInputUser] = useState('octocat')
  const [user, setUser] = useState('inputUser')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(inputUser);
        if (inputUser == 'octocat') {
          localStorage.setItem('octocat', data);
        }
        setUser(data);
      } catch (error) {
        const { octocat } = localStorage;
        setUser(octocat);
      }
    };

    fetchUser();
  }, [inputUser]);
  console.log(user, "state")
  return (
    <Container sx={{
      background: "whitesmoke",
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '20px',
    }}>
      <Typography variant="h4" color="initial" fontWeight={700}>
        Search Github profiles</Typography>
      <Search setInputUser={setInputUser} />
      <UserCard user={user} />
    </Container>
  )
}

export default App
