import { Grid, CardMedia, Stack } from "@mui/material"
import { PrincipalInformation } from "./PrincipalInformation"
import { BioCard } from './BioCard'

export const UserCard = ({ user }) => {

  const { avatar_url } = user

  return (
    <Grid container spacing={2} justifyContent='center' marginTop={1}>
      <Grid item xs={8} sm={3}>
        <Stack justifyContent='center' direction='column' alignItems='center' >
          <CardMedia
            component='img'
            alt='GitHub'
            image={avatar_url}
            sx={{
              borderRadius: "50%", width: {
                xs: '60%',
                sm: '100%'
              },
              minWidth: '150px'
            }} />
          <BioCard user={user} />
        </Stack>
      </Grid>
      <Grid item xs={11} sm={7}>
        <PrincipalInformation user={user}></PrincipalInformation>
      </Grid>
    </Grid>
  )
}
