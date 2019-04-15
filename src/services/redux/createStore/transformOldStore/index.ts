/**
 * Import custom utility functions that will be used to transform data
 */
import convertToNewInfo from './convertToNewInfo';
import convertToNewAnswers from './convertToNewAnswers';

/**
 * Start conversion
 */
const transformOldStore = oldStore => ({
  info: convertToNewInfo(oldStore.locale),
  stories: convertToNewAnswers(oldStore.stories, oldStore.locale),
});

export default transformOldStore;
