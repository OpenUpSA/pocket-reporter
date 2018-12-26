import { setAge as setUserAge } from './modules/user';
import { updateUrl as updateImageUrl } from './modules/image';


const updateImageAfterAgeSet = age => (dispatch) => {
  dispatch(setUserAge(age));
  dispatch(updateImageUrl());
};


export { updateImageAfterAgeSet };
export default { updateImageAfterAgeSet };
