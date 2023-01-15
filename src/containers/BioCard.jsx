import { Stack, Typography } from "@mui/material"
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
export const BioCard = ({ user }) => {
  const {
    followers,
    public_repos,
  } = user
  return (
    <>
      <Stack direction='row' spacing={2} marginTop={2}>
        <Stack direction='row' spacing={1} alignItems="center">
          <Diversity3Icon />
          <Typography variant="body2">{followers}</Typography>
        </Stack>
        <Stack direction='row' spacing={1} alignItems="center">
          <LibraryBooksIcon />
          <Typography variant="body2">{public_repos}</Typography>
        </Stack>
      </Stack>
    </>
  )
}
