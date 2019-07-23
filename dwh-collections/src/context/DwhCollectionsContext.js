import React, { useState } from 'react';

const DwhCollectionsContext = React.createContext([{}, () => {}]);

const DwhCollectionsProvider = (props) => {
  const [state, setState] = useState({
      modal: {
        name: '',
        isOpen: null
      }
  });
  
  return (
    <DwhCollectionsProvider.Provider value={[state, setState]}>
      {props.children}
    </DwhCollectionsProvider.Provider>
  );
}

export { DwhCollectionsContext, DwhCollectionsProvider };