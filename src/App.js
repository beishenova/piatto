import React from 'react';
import Header from './Components/Header/Header';
import MainImages from './Components/MainPage/MainImges/MainImages';
import Footer from './Components/Footer/Footer';
import AuthContext from './contexts/AuthContext';

const App = () => {
  return (
    <AuthContext>
      <Header />
      <MainImages />
      <Footer />
    </AuthContext>
  );
};

export default App;
