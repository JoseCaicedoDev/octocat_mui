import { Stack, Typography } from "@mui/material"
export const PrincipalInformation = ({ user }) => {
  const {
    name,
    login,
    bio
  } = user
  return (
    <>
      <Stack>
        <Typography variant="h5" paddingY={1}>{name}</Typography>
      </Stack>
      <Typography variant="caption">{`@${login}`}</Typography>
      <Typography variant="body2" marginTop={2}>{bio}</Typography>
    </>
  )
}
