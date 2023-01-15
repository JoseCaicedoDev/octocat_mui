import { Stack, Typography } from "@mui/material"
export const PrincipalInformation = ({ user }) => {
  const {
    name,
    login,
    bio,
    html_url
  } = user
  return (
    <>
      <Stack>
        <Typography variant="h5" paddingY={1}>{name}</Typography>
      </Stack>
      <a href={html_url} target='_blank'>
        <Typography variant="caption">{`@${login}`}</Typography>
      </a>
      <Typography variant="body2" marginTop={2}>{bio}</Typography>

    </>
  )
}
