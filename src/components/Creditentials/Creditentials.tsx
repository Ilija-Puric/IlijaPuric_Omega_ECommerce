import { memo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextField } from '@mui/material';
import { Button } from '../../stories/Button/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import vegaLogo from '../../assets/vegait_logo_white.png';
import inputReset from '../../constants';
import userSchema from '../../validations/UserValidation.ts';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF590B',
      contrastText: '#fff0ec',
    },
  },
});

const Wrapper = styled.form`
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

const Creditentials = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Wrapper className="credentials" onSubmit={handleSubmit(onSubmit)}>
      <img src={vegaLogo} alt="Vega IT logo" className="credentials__logo" />
      <ThemeProvider theme={theme}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              id="name"
              label="Name"
              variant="outlined"
              error={errors.name?.message}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              id="password"
              label="Password"
              variant="outlined"
              error={errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button label="Login" primary type="submit" />
      </ThemeProvider>
    </Wrapper>
  );
};

export default memo(Creditentials);
