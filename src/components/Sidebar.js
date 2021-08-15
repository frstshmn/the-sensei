import BigLogo from '../img/big_logo.svg';
import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/sidebar.scss';

const Sidebar = (props) =>{

    return (
      <div className={`sidebar ${props.active ? "" : "hidden"}`}>
        <div className="hide" onClick={props.toggleSidebar}>
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="5.62132" y1="1.37868" x2="1.37868" y2="5.62132" stroke="black" stroke-linecap="round"/>
            <line x1="5.62132" y1="5.62132" x2="1.37868" y2="1.37868" stroke="black" stroke-linecap="round"/>
          </svg>
          <p>Close</p>
        </div>
        <img className="big-logo" src={BigLogo} alt="The Sensei" />
        <div className="menu">

          <NavLink to="/general" activeClassName="selected" onClick={props.toggleSidebar}>
            <div className="item">
              <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="3" stroke="#222" stroke-width="2"/>
                <path d="M7 10V11C7 12.6569 5.65685 14 4 14V14C2.34315 14 1 12.6569 1 11V10" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>General</span>
            </div>
          </NavLink>

          <NavLink to="/sportsmen" activeClassName="selected" onClick={props.toggleSidebar}>
            <div className="item">
              <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 15V14.1416C23 13.6539 22.8864 13.1729 22.6683 12.7367C22.3643 12.1287 21.8713 11.6357 21.2633 11.3317C20.8271 11.1136 20.3461 11 19.8584 11H18.1416C17.6539 11 17.1729 11.1136 16.7367 11.3317M1 15V14.1416C1 13.6539 1.11356 13.1729 1.33167 12.7367C1.63567 12.1287 2.12866 11.6357 2.73666 11.3317C3.17289 11.1136 3.65392 11 4.14164 11H5.85836C6.34608 11 6.82711 11.1136 7.26334 11.3317M7 15.2V14.127C7 13.5174 7.14194 12.9161 7.41459 12.3708C7.79459 11.6108 8.41083 10.9946 9.17082 10.6146C9.71611 10.3419 10.3174 10.2 10.9271 10.2H13.0729C13.6826 10.2 14.2839 10.3419 14.8292 10.6146C15.5892 10.9946 16.2054 11.6108 16.5854 12.3708C16.8581 12.9161 17 13.5174 17 14.127V15.2" stroke="#222" stroke-width="2" stroke-linecap="round"/>
                <path d="M13.2 1.80001C13.7193 2.05966 14.1404 2.48072 14.4 3.00001C14.7777 3.75543 14.7777 4.64459 14.4 5.40001C14.1404 5.9193 13.7193 6.34037 13.2 6.60001C12.4446 6.97772 11.5554 6.97772 10.8 6.60001C10.2807 6.34037 9.85964 5.9193 9.6 5.40001C9.22229 4.64459 9.22229 3.75543 9.6 3.00001C9.85964 2.48072 10.2807 2.05966 10.8 1.80001C11.5554 1.4223 12.4446 1.4223 13.2 1.80001Z" stroke="#222" stroke-width="2"/>
                <path d="M19.8 4.4C20.1462 4.5731 20.4269 4.85381 20.6 5.2C20.8518 5.70361 20.8518 6.29639 20.6 6.8C20.4269 7.14619 20.1462 7.4269 19.8 7.6C19.2964 7.85181 18.7036 7.85181 18.2 7.6C17.8538 7.4269 17.5731 7.14619 17.4 6.8C17.1482 6.29639 17.1482 5.70361 17.4 5.2C17.5731 4.85381 17.8538 4.5731 18.2 4.4C18.7036 4.14819 19.2964 4.14819 19.8 4.4Z" stroke="#222" stroke-width="2"/>
                <path d="M5.8 4.4C6.14619 4.5731 6.4269 4.85381 6.6 5.2C6.85181 5.70361 6.85181 6.29639 6.6 6.8C6.4269 7.14619 6.14619 7.4269 5.8 7.6C5.29639 7.85181 4.70361 7.85181 4.2 7.6C3.85381 7.4269 3.5731 7.14619 3.4 6.8C3.14819 6.29639 3.14819 5.70361 3.4 5.2C3.5731 4.85381 3.85381 4.5731 4.2 4.4C4.70361 4.14819 5.29639 4.14819 5.8 4.4Z" stroke="#222" stroke-width="2"/>
              </svg>
              <span>My sportsmen</span>
            </div>
          </NavLink>

          <NavLink to="/settings" activeClassName="selected" onClick={props.toggleSidebar}>
            <div className="item">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10.951" y="1.2549" width="3" height="15" rx="1" transform="rotate(30 10.951 1.2549)" fill="#222"/>
                <rect x="15.9999" y="7" width="3" height="15" rx="1" transform="rotate(90 15.9999 7)" fill="#222"/>
                <rect x="13.549" y="14.2452" width="3" height="15" rx="1" transform="rotate(150 13.549 14.2452)" fill="#222"/>
                <path d="M11.4577 3.37741L14.4152 8.5L11.4577 13.6226L5.54262 13.6226L2.58509 8.5L5.54262 3.37741L11.4577 3.37741Z" fill="#222"/>
                <path d="M10.7075 7.22546L10.7075 9.77454L8.49996 11.0491L6.29239 9.77454L6.29239 7.22546L8.49996 5.95092L10.7075 7.22546Z" fill="white"/>
              </svg>
              <span>Settings</span>
            </div>
          </NavLink>

        </div>
      </div>
      );
}

export default Sidebar;