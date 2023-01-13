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
        label='Search'
        placeholder="jcaicedo"
        variant="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValue}
        sx={{ width: '90%' }} />
      <IconButton size="small"
        onClick={handleSubmit}
        sx={{ left: "-45px" }}>
        <SearchIcon />
      </IconButton>
    </Stack>

  )
}
