import React, { useState } from 'react';
import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';

type Props<T> =  Omit<AutocompleteProps<T | any, boolean, boolean, boolean>, 'renderInput'> & {
  label: string;
};

function SelectSearch<T>(props: Props<T>) {
  const { label, ...rest } = props;
  const [open, setOpen] = useState(false);

  return (
    <Autocomplete
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      {...rest}
      renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
    />
  );
}

export default SelectSearch;
