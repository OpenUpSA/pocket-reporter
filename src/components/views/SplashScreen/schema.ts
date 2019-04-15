export interface Tprops {
  language: string | null;
  storiesAmount: number;
  navigate: any;
  changeCallback: any;
}

export interface Tstate {
  isoKey: string | null;
  loading: boolean;
}

const mockProps: Tprops = {
  language: null,
  storiesAmount: 0,
  navigate: console.log,
  changeCallback: console.log,
};

export default mockProps;
