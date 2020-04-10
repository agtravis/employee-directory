import React from 'react';

const EmployeeContext = React.createContext({
  employees: [],
  dates: {},
  search: ``,
  findByName: () => {},
});

export default EmployeeContext;
