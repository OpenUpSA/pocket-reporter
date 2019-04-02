export type TisoKey = 'eng' | 'afr' | 'spa' | 'xho' | 'nso' | 'por' | 'sot' | 'tsn' | 'zul';

export type Ticon = 'Public' | 'School' | 'Poll' | 'Person' | 'People' | 'Notifications' | 'FreeBreakfast' | 'FitnessCenter' | 'ChildFriendly' | 'Casino' | 'BusinessCenter' | 'AirportShuttle' | 'Wifi' | 'Wc' | 'TimeToLeave' | 'Power' | 'Cancel' | 'Train' | 'Traffic' | 'StoreMallDirectory' | 'Restaurant' | 'Place' | 'LocalShipping' |'LocalPostOffice' | 'LocalPlay' | 'LocalPhone' | 'LocalTaxi' | 'LocalHospital' | 'ShoppingCart' | 'LocalGasStation' | 'Flight' | 'WbSunny' | 'Timelapse' | 'Image' | 'FlashOn' | 'Audiotrack' | 'Security' | 'PhoneIphone' | 'KeyboardVoice' | 'Weekend' | 'Report' | 'Mail' | 'HowToVote' | 'VpnKey' | 'VolumeUp' | 'Work' | 'Grade' | 'Info';

/**
 * Folder ID
 */
export type TfolderId = string;

/**
 * Folder title.
 */
export type TfolderTitle = string;

/**
 * Different translations of Folder title.
 */
export interface TranslationsShape {
  eng: TfolderTitle;
  afr: TfolderTitle;
  spa: TfolderTitle;
  xho: TfolderTitle;
  nso: TfolderTitle;
  por: TfolderTitle;
  sot: TfolderTitle;
  tsn: TfolderTitle;
  zul: TfolderTitle;
}

/**
 * The title to a list of questions (formerly called a template)
 */
export type TquestionsTitle = string;

/**
 * A single question that forms part of larger question page.
 */
export type TsingleQuestion = string;

/**
 * An optional description that can be attached to a question
 */
export type TsingleDescription = string;

/**
 * A title attached to a specific resouce page.
 */
export type TresourceTitle = string;

/**
 * The actual HTML content that will be displayed on the resource page.
 */
export type TresourceBody = string;


/**
 * A single question that will be displayed on a questions page.
 */
export interface SingleQuestionsShape {
  question: TsingleQuestion;
  description?: TsingleDescription;
}

/**
 * A non-english implementation of a specific question that goes on a questions page.
 */
export interface TranslatedQuestionsShape {
  title: TquestionsTitle;
  questions: SingleQuestionsShape[];
}

/**
 * All the information required to render a questions page.
 */
export interface QuestionContentShape {
  content: {
    title: TquestionsTitle,
    questions: SingleQuestionsShape[],
    afr: TranslatedQuestionsShape[];
    spa: TranslatedQuestionsShape[];
    xho: TranslatedQuestionsShape[];
    nso: TranslatedQuestionsShape[];
    por: TranslatedQuestionsShape[];
    sot: TranslatedQuestionsShape[];
    tsn: TranslatedQuestionsShape[];
    zul: TranslatedQuestionsShape[];
  };
}

/**
 * A non-english implementation of the content that should go on a resource page.
 */
export interface TranslatedResourceShape {
  title: TquestionsTitle;
  questions: SingleQuestionsShape[];
}

/**
 * All the information required to render a resource page.
 */
export interface ResourceContentShape {
  content: {
    title: TresourceTitle,
    body: TresourceBody,
    afr: TranslatedResourceShape[];
    spa: TranslatedResourceShape[];
    xho: TranslatedResourceShape[];
    nso: TranslatedResourceShape[];
    por: TranslatedResourceShape[];
    sot: TranslatedResourceShape[];
    tsn: TranslatedResourceShape[];
    zul: TranslatedResourceShape[];
  };
}

/**
 * A folder that can contain a link to questions pages and/or resource pages.
 */
export interface FolderShape {
  id: TfolderId;
  icon: Ticon;
  title: TfolderTitle;
  translations: TranslationsShape;
  questions: QuestionContentShape[];
  resources: ResourceContentShape[];
}


/**
 * Actual GraphQL response from GatbsyJS during the build process.
 */
export interface ResponseShape {
  edges: {
    node: {
      edges: any;
    }
  }
}

/**
 * The path at which a specific static Gatsby page should be created.
 */
export type Tpath = string;

/**
 * The name of the component that should be used
 */
export type Tcomponent = 'folder' | 'resource' | 'content';

/**
 * All props that should be passed to page component.
 */
export type Tcontext = Object;

/**
 * All the arguments needed by Gatsby to create a static HTML page during build time - via
 * createPage()
 */
export interface PageShape {
  path: Tpath;
  component: Tcomponent;
  context: Tcontext;
}

/**
 * Converts GraphQL response into array to be consumed by Gatsby createPage
 */
export type TcreatePagesArray = (ResponseShape) => PageShape[];
