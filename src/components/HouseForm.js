import React, { useState } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';
import SideNavbar from './MainNavBar';
import MobileNavbar from './MobileNavBar';
import './pages/house.css';

const HouseForm = () => {
  // const { user } = React.useContext(AuthContext);

  const [house, setHouse] = useState({
    // user_id: user.id,
    name: '',
    description: '',
    price: '',
    location: '',
    image: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  //     axios.post('http://localhost:3000/houses', house)
  //     .then((response) => {
  //         console.log(response);
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     });
  };

  return (
    <div className="main_page">
      <div className="mainNavBar">
        <SideNavbar />
      </div>
      <div className="wrapper">
        <div className="mobile_menu_background">
          <MobileNavbar />
        </div>
        <div className="clearfix" />
        <div className="container add-form">
          <h1 className="text-center mt-5">Add a House</h1>
          <form onSubmit={handleSubmit} className="form-container">
            <label htmlFor="name" className="form-label mb-3">
              Name
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={house.name}
                onChange={(event) => setHouse({ ...house, name: event.target.value })}
              />
            </label>
            <label htmlFor="description" className="form-label mb-3">
              Description
              <input
                type="text"
                className="form-control"
                name="description"
                id="description"
                value={house.description}
                onChange={(event) => setHouse({ ...house, description: event.target.value })}
              />
            </label>
            <label htmlFor="price" className="form-label mb-3">
              Price
              <input
                type="number"
                className="form-control"
                name="price"
                id="price"
                value={house.price}
                onChange={(event) => setHouse({ ...house, price: event.target.value })}
              />
            </label>
            <label htmlFor="location" className="form-label mb-3">
              Location
              <input
                type="text"
                className="form-control"
                name="location"
                id="location"
                value={house.location}
                onChange={(event) => setHouse({ ...house, location: event.target.value })}
              />
            </label>
            <label htmlFor="image" className="form-label mb-3">
              Image
              <input
                type="text"
                className="form-control"
                name="image"
                id="image"
                value={house.image}
                onChange={(event) => setHouse({ ...house, image: event.target.value })}
              />
            </label>
            <div className="text-center">
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="main_page_footer">
          <p>© 2022 Yatch House</p>
        </div>
      </div>
    </div>
  );
};

export default HouseForm;
