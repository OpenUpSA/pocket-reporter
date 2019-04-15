/**
 * Imports tooling required to build mock data
 */
import faker from 'faker';

/**
 * TODO: Description
 */
export type Ticon =
  | 'Public'
  | 'School'
  | 'Poll'
  | 'Person'
  | 'People'
  | 'Notifications'
  | 'FreeBreakfast'
  | 'FitnessCenter'
  | 'ChildFriendly'
  | 'Casino'
  | 'BusinessCenter'
  | 'AirportShuttle'
  | 'Wifi'
  | 'Wc'
  | 'TimeToLeave'
  | 'Power'
  | 'Cancel'
  | 'Train'
  | 'Traffic'
  | 'StoreMallDirectory'
  | 'Restaurant'
  | 'Place'
  | 'LocalShipping'
  | 'LocalPostOffice'
  | 'LocalPlay'
  | 'LocalPhone'
  | 'LocalTaxi'
  | 'LocalHospital'
  | 'ShoppingCart'
  | 'LocalGasStation'
  | 'Flight'
  | 'WbSunny'
  | 'Timelapse'
  | 'Image'
  | 'FlashOn'
  | 'ColorLens'
  | 'Audiotrack'
  | 'Security'
  | 'PhoneIphone'
  | 'KeyboardVoice'
  | 'Weekend'
  | 'Report'
  | 'Mail'
  | 'HowToVote'
  | 'VpnKey'
  | 'VolumeUp'
  | 'Work'
  | 'Grade'
  | 'Info';

export const icons = [
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
];

export const mockIcon = (): Ticon => faker.random.arrayElement(icons) as Ticon;
