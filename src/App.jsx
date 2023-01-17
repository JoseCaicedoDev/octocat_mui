import { Card, Container, Typography } from "@mui/material"
import { Search } from "./components/Search"
import { useState, useEffect } from "react"
import { getUser } from "./services/users"
import { UserCard } from "./containers/userCard"
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      margin: '0 auto'
    }}>
      <Card sx={{
        background: "whitesmoke",
        width: '100%',
        maxWidth: '768px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 20px',
      }}>
        <Typography variant="h5" color="#22272e" fontWeight={700} sx={{
          fontSize: {
            xs: '16px',
            md: '24px'
          }
        }}>
          Search Github profiles</Typography>
        <Search setInputUser={setInputUser} />
        <UserCard user={user} />
      </Card>

    </Container>
  )
}

export default App
