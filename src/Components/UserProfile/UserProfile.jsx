import { useNavigate } from 'react-router-dom';
import { logout } from '../../Firebase/firebase';
import './UserProfile.css'
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from '../../Redux/Actions/product';
import { getLocalData, removeLocalData } from '../../helpers/utils';
import { useEffect, useState } from 'react';

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLoggedIn = Object.keys(getLocalData("user")).length;
  const [user, setUser] = useState(getLocalData("user")[0]);
  const logoutHandler = () => {
    logout();
    dispatch(setLogout());
    navigate("/");
    removeLocalData("user")
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {userLoggedIn ? (
        <div className="user-profile">
            <div className="user-top">
              <img src={user?.photoURL} alt="user" className="user-profile__img" />
              <div className="user-profile__name user-phone-view-details">{user?.displayName}</div>
            </div>
            <div className="user-bottom">
              <div className="user-profile__email user-phone-view-details">{user?.email}</div>
              <button className="login-button"  onClick={logoutHandler}>Logout</button>
            </div>
        </div>
      ) : (
        <div className="user-profile">Login First</div>
      )}
    </>
  );
};

export default UserProfile;
