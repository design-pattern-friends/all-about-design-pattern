export type Action = {
  type: string,
  payload: any
}


export interface IStore {
  getState: () => any;
  subscribe: (listener: () => void) => void;
  dispatch: (action: Action) => void;
}



