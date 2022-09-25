import { Link, useParams } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useSelector } from 'react-redux';
import './house.css';

import SideNavbar from '../MainNavBar';
import MobileNavbar from '../MobileNavBar';

const House = () => {
  const yatches = useSelector((state) => state.houses);
  const { id } = useParams();

  const house = yatches.filter((yatch) => yatch.id === parseInt(id, 10));

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
        <div className="container house_container">
          <div className="house">
            <div className="house_image">
              <div className="house-icon">
                <Link
                  to="/houses"
                  style={{ alignSelf: 'flex-end' }}
                  className="housse-prev-btn"
                >
                  <ArrowLeftIcon />
                </Link>
              </div>

              <img src={house[0].image} alt={house[0].image} />
            </div>
            <div className="house_info">
              <div className="house_name">
                <h2>{house[0].name}</h2>
                <h2>{house[0].location}</h2>
                <p>{house[0].description}</p>
              </div>
              <Link
                to={`/reservations/${id}/new`}
                style={{ textDecoration: 'none' }}
              >
                <button type="button" className="reserve-btn">
                  Book now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="main_page_footer">
          <p>© 2022 Yatch House</p>
        </div>
      </div>
    </div>
  );
};

export default House;
