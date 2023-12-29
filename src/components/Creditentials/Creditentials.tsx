import { TextField } from '@mui/material';
import { Button } from '../../stories/Button/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import vegaLogo from '../../assets/vegait_logo_white.png';
import inputReset from '../../constants';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF590B',
      contrastText: '#fff0ec',
    },
  },
});

const Creditentials = (): JSX.Element => {
  const Creditentials = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100vh;
    padding: 0 40px;

    .credentials__logo {
      width: 200px;
      height: fit-content;
    }

    ${inputReset}
  `;

  return (
    <Creditentials className="credentials">
      <img src={vegaLogo} alt="Vega IT logo" className="credentials__logo" />
      <ThemeProvider theme={theme}>
        <TextField id="name" label="Name" variant="outlined" />
        <TextField id="password" label="Password" variant="outlined" />
        <Button label="Login" primary />
      </ThemeProvider>
    </Creditentials>
  );
};

export default Creditentials;
