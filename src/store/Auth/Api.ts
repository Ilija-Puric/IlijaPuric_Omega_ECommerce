import axios from 'axios';

interface User {
  name: string;
  password: string;
}

export const login = ({ name, password }: User) => {
  console.log(name, password);
  return axios({
    method: 'post',
    url: `https://dummyjson.com/auth/login`,
    headers: { 'Content-Type': 'application/json' },
    data: {
      username: name,
      password,
    },
  });
};

// export const fetchCurrentUser = (userid = 1) => {
//   console.log('nes');
//   // return axios.get(`api/v1/account/${userid}`);
// };

// export const logout = (payload) => {
//   const params = new URLSearchParams();
//   params.append(`token`, payload);

//   return axios({
//     method: 'post',
//     url: `/oauth2/revoke`,
//     data: params,
//     auth: {
//       username: CLIENT_ID,
//       password: CLIENT_SECRET,
//     },
//   });
// };
