import { TextField } from '@mui/material';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import inputReset from '../../constants/index';
import { Button } from '../../stories/Button/Button';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import shippingSchema from '../../validations/ShippingValidation';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF590B',
      contrastText: '#fff0ec',
    },
  },
});

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  ${inputReset}
`;

const CheckoutForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shippingSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ThemeProvider theme={theme}>
        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <TextField
              {...field}
              id="address"
              label="Address"
              variant="outlined"
              fullWidth
              error={errors.address?.message}
              helperText={errors.address?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              {...field}
              id="phoneNumber"
              label="Phone Number"
              variant="outlined"
              fullWidth
              error={errors.phoneNumber?.message}
              helperText={errors.phoneNumber?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="additionalMessage"
          render={({ field }) => (
            <TextField
              {...field}
              id="additionalMessage"
              label="Additional message *"
              variant="outlined"
              fullWidth
              error={errors.additionalMessage?.message}
              helperText={errors.additionalMessage?.message}
            />
          )}
        />
        <Button
          primary
          label="Buy"
          type="submit"
          onClick={() => {
            console.log('buy');
          }}
        />
      </ThemeProvider>
    </Form>
  );
};

export default CheckoutForm;
