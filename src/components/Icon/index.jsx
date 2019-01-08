import iconsObject from './iconsObject';


const Icon = ({ type }) => {
  return iconsObject[type];
}


export default Icon;