import React from 'react';

const EmployeeContext = React.createContext([
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'See READme.md',
      last: '(useContext Demo)',
    },
    location: {
      street: {
        number: 5825,
        name: 'W 6th St',
      },
      city: 'Portland',
      state: 'Illinois',
      country: 'United States',
      postcode: 34984,
      coordinates: {
        latitude: '51.3163',
        longitude: '-26.9539',
      },
      timezone: {
        offset: '+6:00',
        description: 'Almaty, Dhaka, Colombo',
      },
    },
    email: 'always@the-top.ignore',
    login: {
      uuid: 'd0c9db34-6d17-4ae1-9dbc-2cba269138f2',
      username: 'sadrabbit250',
      password: 'supreme',
      salt: 'A2fCM5du',
      md5: 'b5564c47eba0097a5ec2aa58698ad6b3',
      sha1: '25c9274e523b1a54e43b16ed0206c503ee125f6d',
      sha256:
        'fcc3086d83d9bdac6fda8b1fd0798a3e364c74d70db1e694081137e525754560',
    },
    dob: {
      date: '1900-01-02T05:28:15.983Z',
      age: 34,
    },
    registered: {
      date: '2015-01-04T15:46:31.228Z',
      age: 5,
    },
    phone: '(136)-125-9129',
    cell: '(691)-700-4970',
    id: {
      name: 'SSN',
      value: '271-05-4112',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/67.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/67.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/67.jpg',
    },
    nat: 'US',
  },
]);

export default EmployeeContext;

// export const EmployeeProvider = (props) => {
//   const [employees, setSemployees] = useState();
//   return (
//     <EmployeeContext.Provider value={[employees, setSemployees]}>
//       {props.children}
//     </EmployeeContext.Provider>
//   );
// };
