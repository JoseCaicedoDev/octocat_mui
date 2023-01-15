import { Grid, CardMedia, Stack } from "@mui/material"
import { PrincipalInformation } from "./PrincipalInformation"
import { BioCard } from './BioCard'

export const UserCard = ({ user }) => {

  const { avatar_url } = user

  return (
    <Grid container spacing={2} justifyContent='center' marginTop={1}>
      <Grid item xs={3}>
        <Stack justifyContent='center' direction='column' alignItems='center' >
          <CardMedia
            component='img'
            alt='GitHub'
            image={avatar_url}
            sx={{ borderRadius: "50%" }} />
          <BioCard user={user} />
        </Stack>
      </Grid>
      <Grid item xs={7}>
        <PrincipalInformation user={user}></PrincipalInformation>
      </Grid>
    </Grid>
  )
}
