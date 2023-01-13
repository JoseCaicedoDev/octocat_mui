import { Grid, CardMedia } from "@mui/material"
import { PrincipalInformation } from "./PrincipalInformation"

export const UserCard = ({ user }) => {

  const { avatar_url } = user

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardMedia
          component='img'
          alt='GitHub'
          image={avatar_url} />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation user={user}></PrincipalInformation>
      </Grid>
    </Grid>
  )
}
