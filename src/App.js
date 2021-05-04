import React from 'react';
import Layout from './Layout';

function App({children}) {
  return (
    <>
      <Layout />
      <div className="container">
        {children}
      </div>
    </>
  );
}

export default App;
