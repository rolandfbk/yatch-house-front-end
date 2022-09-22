import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/pages/homepage';
import MainPage from './components/pages/mainpage';
import AddHouse from './components/pages/AddHouse';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import NewReservation from './components/pages/NewReservation';
import House from './components/pages/House';
import MyReservation from './components/pages/MyReservation';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/houses" element={<MainPage />} />
        <Route path="/houses/:id" element={<House />} />
        <Route path="/houses/:id/new" element={<AddHouse />} />
        <Route path="/my_reservation/:id" element={<MyReservation />} />
        <Route path="/reservations/:id/new" element={<NewReservation />} />
        <Route path="/admins/login" element={<Login />} />
        <Route path="/admins/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
