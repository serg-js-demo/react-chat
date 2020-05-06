export type MessageItem = {
  id: number;
  tradeId: number;
  fromId: number;
  time: string;
  message: string;
};

export type TradeItemStatus = "PAID" | "NOT PAID";

export type TradeItem = {
  id: number;
  isBuying: boolean;
  traderId: number;
  startTime: string;
  paymentMethod: string;
  amount: number;
  status: TradeItemStatus;
  dateDelete: string | null;
  hasNewMessages: boolean;
};

export type CurrentUser = {
  id: number;
  isFakeBuyer: boolean;
};

export type Reputation = {
  minus: number;
  plus: number;
};

export type User = {
  id: number;
  userName: string;
  imgUrl: string;
  reputation: Reputation;
};

type TradesById = {
  [i: number]: TradeItem;
};

type Trades = {
  ids: number[];
  byId: TradesById;
  current: number | null;
};

export type Users = {
  [i: number]: User;
};

export type Messages = {
  [i: number]: MessageItem[];
};

export type BPICurrencyData = {
  code: string;
  rate: string;
  description: string;
  rate_float: number;
};

export type BPIData = {
  [code: string]: BPICurrencyData;
};

export type BPITime = {
  updated: string;
  updatedISO: string;
  updateduk: string;
};

export type BPIResponse = {
  time: BPITime;
  data: BPIData;
};

export type BPIInfo = {
  loading: boolean;
  response: BPIResponse;
};

export type State = {
  trades: Trades;
  messages: Messages;
  users: Users;
  currentUser: CurrentUser;
  bpiInfo: BPIInfo;
};
