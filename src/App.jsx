import { Card, Container, Typography } from "@mui/material"
import { Search } from "./components/Search"
import { useState, useEffect } from "react"
import { getUser } from "./services/users"
import { UserCard } from "./containers/userCard"
import { Carrusel } from "./components/Carrusel"
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

  const dataCarrusel = [
    {
      img: 'https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg',
      title: 'CEO of Pispirispas Company',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.',
      name: 'John Carter',
      location: 'San Francisco, CA'
    },
    {
      img: 'https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg',
      title: 'Pispirispas Company',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.',
      name: 'John Carter',
      location: 'San Francisco, CA'
    },
    {
      img: 'https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg',
      title: 'CEO ',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.',
      name: 'John Carter',
      location: 'San Francisco, CA'
    },
  ]
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
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
      <Carrusel />

    </Container >
  )
}

export default App
