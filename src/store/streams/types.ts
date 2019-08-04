export const REQEUST_STREAMS = 'REQEUST_STREAMS';
export const RECIEVE_STREAMS = 'RECIEVE_STREAMS';
export const REJECT_STREAMS = 'REJECT_STREAMS';

export interface IStream {
  _id: any;
  channel: number;
  duration: number;
  online: boolean;
  partnered: boolean;
  time: string;
  type: number;
}

export interface IStreamData {
  mixerUser: String;
  startTime: Date;
  duration: Number;
  viewership: IViewershipAnalytic[];
  followers: IFollowAnalytic[];
  subscriptions: ISubscriptionAnalytic[];
}

export interface IViewershipAnalytic {

}

export interface IFollowAnalytic {
  
}

export interface ISubscriptionAnalytic {
  
}

export interface StreamsState {
  fetched: boolean
  fetching: boolean
  byId: {
    [key: string]: IStream
  }
  allIds: string[]
}

interface RequestStreams {
  type: typeof REQEUST_STREAMS
}

interface RecieveStreams {
  type: typeof RECIEVE_STREAMS
  payload: IStream[]
}

interface RejectStreams {
  type: typeof REJECT_STREAMS
}

export type StreamsActionTypes = (
  RequestStreams |
  RecieveStreams |
  RejectStreams 
)