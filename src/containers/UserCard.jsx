import { Grid, CardMedia } from "@mui/material"
import { PrincipalInformation } from "./PrincipalInformation"

export const UserCard = ({ user }) => {

  const { avatar_url } = user

  return (
    <Grid container spacing={2} justifyContent='center' marginTop={1}>
      <Grid item xs={3}>
        <CardMedia
          component='img'
          alt='GitHub'
          image={avatar_url}
          sx={{ borderRadius: "50%" }} />
      </Grid>
      <Grid item xs={7}>
        <PrincipalInformation user={user}></PrincipalInformation>
      </Grid>
    </Grid>
  )
}
