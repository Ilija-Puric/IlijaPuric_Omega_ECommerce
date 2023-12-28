import { Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import vegaLogo from '../../assets/vegait_logo_white.png';

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
    gap: 20px;
    width: 100%;

    .credentials__logo {
      width: 200px;
      height: fit-content;
    }

    input,
    label {
      color: #bdb4af6f;
    }

    input {
      border-color: #ff590b;

      &:hover + fieldset {
        border-color: #ff590b !important;
      }
    }

    label[data-shrink='false'] + div:hover fieldset {
      border-color: #ff6b2688 !important;
    }

    fieldset {
      color: #fff;
      border-color: #ffffff24;
    }
  `;

  return (
    <Creditentials className="credentials">
      <img src={vegaLogo} alt="Vega IT logo" className="credentials__logo" />
      <ThemeProvider theme={theme}>
        <TextField id="name" label="Name" variant="outlined" />
        <TextField id="password" label="Password" variant="outlined" />
        <Button variant="contained" style={{ padding: '10px', fontWeight: '800', fontSize: '18px' }}>
          Login
        </Button>
      </ThemeProvider>
    </Creditentials>
  );
};

export default Creditentials;
