import React, { createContext, useState } from 'react';

export const SnoCodeDataContext = createContext();

const SnoCodeDataProvider = (props) => {
  const [snoCodeData, setSnoCodeData] = useState(null);

  const handleSetSnoCodeData = (data) => {
    setSnoCodeData(data);
  };
  return (
    <SnoCodeDataContext.Provider value={{ snoCodeData, handleSetSnoCodeData }}>
      {props.Children}
    </SnoCodeDataContext.Provider>
  );
};

export default SnoCodeDataProvider;
