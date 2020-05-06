import { State } from "store/types";

const initialState: State = {
  currentUser: {
    id: 1,
    isFakeBuyer: false,
  },
  users: {
    1: {
      id: 1,
      userName: "Serg",
      imgUrl:
        "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/19.png",
      reputation: {
        minus: 2,
        plus: 14,
      },
    },
    2: {
      id: 2,
      userName: "Jessica",
      imgUrl:
        "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/22.png",
      reputation: {
        minus: 1,
        plus: 32,
      },
    },
    3: {
      id: 3,
      userName: "John",
      imgUrl:
        "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
      reputation: {
        minus: 2,
        plus: 15,
      },
    },
    4: {
      id: 4,
      userName: "Antony",
      imgUrl:
        "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/02.png",
      reputation: {
        minus: 1,
        plus: 54,
      },
    },
  },
  messages: {
    1: [
      {
        id: 1,
        tradeId: 1,
        fromId: 1,
        time: "2020-04-25 11:43:08",
        message: "Hello I want to sell",
      },
      {
        id: 2,
        tradeId: 1,
        fromId: 2,
        time: "2020-04-25 11:05:05",
        message: "Hello, Yes, great, I want to buy",
      },
    ],
    2: [
      {
        id: 3,
        tradeId: 2,
        fromId: 1,
        time: "2020-04-23 07:12:12",
        message: "Hello, I have news",
      },
      {
        id: 4,
        tradeId: 2,
        fromId: 2,
        time: "2020-04-24 08:12:12",
        message: "Yeah, I`am ready",
      },
    ],
  },
  trades: {
    current: null,
    ids: [],
    byId: {},
  },
  bpiInfo: {
    loading: false,
    response: {
      time: {
        updated: "Apr 25, 2020 11:18:00 UTC",
        updatedISO: "2020-04-25T11:18:00+00:00",
        updateduk: "Apr 25, 2020 at 12:18 BST",
      },
      data: {
        USD: {
          code: "USD",
          rate: "7,570.9550",
          description: "United States Dollar",
          rate_float: 7570.955,
        },
      },
    },
  },
};

export default initialState;
