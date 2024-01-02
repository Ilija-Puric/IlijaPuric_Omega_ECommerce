import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import inputReset from '../../constants/index.tsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF590B',
      contrastText: '#fff0ec',
    },
  },
});

const Search = () => {
  const Search = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px 40px 0 40px;
    padding-top: 100px;
    ${inputReset}
  `;
  return (
    <Search>
      <ThemeProvider theme={theme}>
        <TextField id="search" label="Search" variant="outlined" fullWidth />
      </ThemeProvider>
    </Search>
  );
};

export default Search;
