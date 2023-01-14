import { Stack, TextField, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export const Search = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState('')
  const onSearchValue = ({ target }) => {
    const inputValue = target.value
    setValueInput(inputValue)
  }

  const handleSubmit = () => {
    setInputUser(valueInput)
  }
  return (
    <Stack direction='row' sx={{ marginTop: '30px', width: '80%' }}>
      <TextField id="outlined-basic"
        label='Search profile'
        placeholder="Octocat"
        variant="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValue}
        fullWidth
      />
      <IconButton size="small"
        onClick={handleSubmit}
        sx={{ left: "-45px" }}>
        <SearchIcon />
      </IconButton>
    </Stack>

  )
}
