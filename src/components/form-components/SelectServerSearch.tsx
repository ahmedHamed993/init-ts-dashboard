import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Autocomplete, AutocompleteInputChangeReason, AutocompleteProps, TextField } from '@mui/material';

type Props<T> =  Omit<AutocompleteProps<T | any, boolean, boolean, boolean>, 'renderInput'| "options"| "loading"| 'onInputChange'> & {
  label: string;
  getOptionsEndpoint: string,
  setDebouncedSearchValue:Dispatch<SetStateAction<string>>,
};

function SelectServerSearch<T>(props: Props<T>) {
  const { label,getOptionsEndpoint, setDebouncedSearchValue, ...rest } = props;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [options, setOptions] = useState([]);
    const timeoutRef = useRef<any>(null); 

    const handleInputChange = (e:SyntheticEvent<Element, Event>, value:string, reason:AutocompleteInputChangeReason) => {
      setSearchValue(value);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setDebouncedSearchValue(value); 
      }, 1500);
    }

    useEffect(()=>{ 
        setLoading(true);
        fetch(`${getOptionsEndpoint}?q=${searchValue}`)
        .then(res => res.json())
        setLoading(false)
    },[searchValue])
  return (
    <Autocomplete
      open={open}
      loading={loading}
      options={options}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onInputChange={handleInputChange}
      {...rest}
      renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
    />
  );
}

export default SelectServerSearch;
