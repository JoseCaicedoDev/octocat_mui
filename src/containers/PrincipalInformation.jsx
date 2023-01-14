import { Stack, Typography } from "@mui/material"
export const PrincipalInformation = ({ user }) => {
  const {
    name,
    login,
    created_at
  } = user
  return (
    <>
      <Stack>
        <Typography variant="h5" paddingY={1}>{name} hola</Typography>
        <Typography variant="subtitle1">{created_at} number</Typography>
      </Stack>
      <Typography variant="body2">{login} user</Typography>
    </>
  )
}
