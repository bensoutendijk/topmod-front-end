export const REQUEST_SERVICES = 'REQUEST_SERVICES';
export const RECIEVE_SERVICES = 'RECIEVE_SERVICES';
export const REJECT_SERVICES = 'REJECT_SERVICES';

export type UserId = string;

export interface IService {
  _id: UserId;
  data: IMixerData;
  provider: string;
}

export interface IMixerData {
  username: string;
  userid: number;
  channelid: number;
}

export interface ServicesState {
  fetched: boolean
  fetching: boolean
  byId: {
    [key: string]: IService
  }
  allIds: UserId[]
}

interface RequestServices {
  type: typeof REQUEST_SERVICES
}

interface RecieveServices {
  type: typeof RECIEVE_SERVICES
  payload: IService[]
}

interface RejectServices {
  type: typeof REJECT_SERVICES
}

export type ServicesActionTypes = (
  RequestServices |
  RecieveServices |
  RejectServices 
)