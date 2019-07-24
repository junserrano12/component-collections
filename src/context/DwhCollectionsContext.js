import React, { useState } from 'react';

const DwhCollectionsContext = React.createContext([{}, () => {}]);

const DwhCollectionsProvider = (props) => {
  const [state, setState] = useState({
      modal: {
        name: '',
        isOpen: null
      },
      style: {
        modal: null
      }
  });
  
  return (
    <DwhCollectionsContext.Provider value={[state, setState]}>
      {props.children}
    </DwhCollectionsContext.Provider>
  );
}

export { DwhCollectionsContext, DwhCollectionsProvider }