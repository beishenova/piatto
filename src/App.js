import React from 'react';
import Header from './Components/Header/Header';
import MainImages from './Components/MainPage/MainImges/MainImages';
import Footer from './Components/Footer/Footer';
import AuthContext from './contexts/AuthContext';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <AuthContext>
      {/* <Header /> */}
      <MainLayout />
      <MainImages />
      <Footer />
    </AuthContext>
    </BrowserRouter>
  );
};

export default App;
