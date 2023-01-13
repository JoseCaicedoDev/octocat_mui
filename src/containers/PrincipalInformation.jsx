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
        <Typography>{name}</Typography>
        <Typography>{created_at}</Typography>
      </Stack>
      <Typography>{login}</Typography>

    </>
  )
}
