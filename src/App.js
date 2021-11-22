import React from 'react';
import Header from './Components/Header/Header';
import AuthContext from './contexts/AuthContext';

const App = () => {
  return (
    <AuthContext>
      <Header />
      <MainPage/>
      <Footer/>
    </AuthContext>
  );
};

export default App;
