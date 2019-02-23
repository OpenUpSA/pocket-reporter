import React from 'react';
import t from 'prop-types';
import iconsObject from './iconsObject';


const Icon = ({ type }) => {
  const Result = iconsObject[type];
  return <Result />;
};


export default Icon;


Icon.propTypes = {
  type: t.oneOf([
    'Public',
    'School',
    'Poll',
    'Person',
    'People',
    'Notifications',
    'FreeBreakfast',
    'FitnessCenter',
    'ChildFriendly',
    'Casino',
    'BusinessCenter',
    'AirportShuttle',
    'Wifi',
    'Wc',
    'TimeToLeave',
    'Power',
    'Cancel',
    'Train',
    'Traffic',
    'StoreMallDirectory',
    'Restaurant',
    'Place',
    'LocalShipping',
    'LocalPostOffice',
    'LocalPlay',
    'LocalPhone',
    'LocalTaxi',
    'LocalHospital',
    'ShoppingCart',
    'LocalGasStation',
    'Flight',
    'WbSunny',
    'Timelapse',
    'Image',
    'FlashOn',
    'ColorLens',
    'Audiotrack',
    'Security',
    'PhoneIphone',
    'KeyboardVoice',
    'Weekend',
    'Report',
    'Mail',
    'HowToVote',
    'VpnKey',
    'VolumeUp',
    'Work',
    'Grade',
    'Info',
  ]).isRequired,
};
