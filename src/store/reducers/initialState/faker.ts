import data from "./data";
import {
    MessageItem, Messages, TradeItem, TradesById
} from "../../types";
import moment from "moment";
import { State } from "store/types";

const loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet dolor nec consequat aliquet. Donec eget ornare libero. Ut id accumsan nisl. Duis nec eros ornare, posuere est ac, porta mi. Phasellus tincidunt ipsum mauris, a pulvinar leo vestibulum auctor. Duis non erat nisl. Morbi sollicitudin quam turpis, eu porta risus dictum non. Morbi fermentum semper dolor quis ultrices. Fusce lectus ligula, consequat et posuere vel, rhoncus vitae orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus suscipit lectus et tempor porttitor. Integer eu quam nibh. Integer vitae quam eu lacus lacinia tempor." +
    "Nunc tempus eget ipsum ut semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ut felis vestibulum, pellentesque neque vitae, sollicitudin urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam venenatis scelerisque dolor in scelerisque. Donec tincidunt nisl vel purus bibendum, in dignissim risus finibus. Phasellus vulputate dolor in dui porttitor ornare. Nam eget nisl eu nulla gravida malesuada. Aliquam erat volutpat. Curabitur mattis feugiat justo in faucibus." +
    "Donec id laoreet quam. Maecenas dignissim, nisi eu sagittis tincidunt, dolor felis mollis turpis, quis porta lacus ligula sit amet est. Donec rutrum velit urna. Nunc molestie, orci at laoreet eleifend, nisi ante feugiat felis, sit amet faucibus ipsum sapien sed lorem. Sed ultricies consequat cursus. Mauris ut est varius, consectetur turpis non, fringilla nisl. Phasellus posuere odio ac ex accumsan posuere. Fusce maximus metus congue massa sollicitudin, ut vestibulum eros ultrices. Proin nisl dui, porttitor nec diam nec, dapibus sodales ante. Quisque nec dolor at enim facilisis rhoncus eget id eros. Pellentesque eget mi scelerisque turpis pretium dapibus. Duis vestibulum nisi vel risus blandit, quis tempor urna pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non ante accumsan ex ornare lacinia ac non justo. Donec at facilisis massa. Ut at iaculis ligula, sodales egestas est." +
    "Nulla placerat ligula eu nibh feugiat mollis. Aliquam varius non mi et eleifend. Praesent luctus risus vel magna varius tempor. Nam porttitor, massa fermentum pulvinar vestibulum, tellus nulla rutrum arcu, eu accumsan nibh augue vel massa. Nulla ut dictum diam. Ut in lacinia erat, eget ornare dolor. Proin pretium elit eget est varius tempus. Morbi vulputate laoreet vestibulum. Sed non tempor justo, eget mattis sapien. Donec at massa aliquam, commodo sapien non, imperdiet massa." +
    "Phasellus tristique scelerisque enim, quis convallis orci sagittis vel. Nunc varius enim tortor, et vehicula massa sagittis quis. Fusce scelerisque erat purus, eu laoreet lorem pharetra vel. Nunc quis nibh id velit hendrerit laoreet nec ut erat. Aenean sodales augue eget consectetur feugiat. Vivamus ultrices sit amet est consectetur commodo. Quisque volutpat aliquam dui, eget commodo felis tincidunt id. Etiam euismod urna ut nisi fringilla, sit amet laoreet lorem varius. Suspendisse eu elementum ligula. Integer tristique lobortis efficitur. Morbi tincidunt ligula eget quam consectetur, eget tempor quam euismod. Quisque tellus felis, porttitor nec metus sit amet, vestibulum suscipit nisl. Phasellus id auctor diam. Ut aliquam fermentum ligula, nec lacinia lacus.";

const loremipsumArr = loremipsum.split(".").map(el => el + '.');

const getLoremipsum = (): string => loremipsumArr[Math.floor(Math.random() * loremipsumArr.length)];


const getRandom = (n: number): number => {
    return Math.floor(Math.random() * n);
};

const paymentTypes = [
    "Amazon Gift Card",
    "PayPal",
    "iTunes Gift Card",
    "WebCash",
    "CrazyMoney",
    "Карта МИР",
];

const createFakeTrade = (id: number): TradeItem => ({
    id,
    isBuying: true,
    traderId: data.users[2 + getRandom(Object.keys(data.users).length - 1)].id,
    startTime: moment()
        .subtract(getRandom(10000), "seconds")
        .format("YYYY-MM-DD HH:mm:ss"),
    paymentMethod: paymentTypes[getRandom(paymentTypes.length)],
    amount: getRandom(1000),
    status: 'NOT PAID',//getRandom(100) % 2 > 0 ? "NOT PAID" : "PAID", // IDEA WAS TO HAVE ALSO PENDING STATUS
    dateDelete: null,
    hasNewMessages: true,
});

const createFakeMsgs = (
    tradeId: number,
    fromId: number,
    toId: number
): MessageItem[] =>
    Array.from({ length: 4 + getRandom(10) }).map(
        (_, idx): MessageItem => ({
            id: idx + 1,
            tradeId: tradeId,
            fromId: [fromId, toId][getRandom(100) % 2],
            time: new Date().toDateString(),
            message: getLoremipsum(),
        })
    );

export default (): State => {
    const trades = Array.from({ length: 5 }).map((_, idx) => {
        const tradeId = idx + 1;
        const res = createFakeTrade(tradeId);
        return res;
    });

    data.trades.ids = trades.map(({ id }) => id);
    data.trades.byId = trades.reduce<TradesById>((acc: TradesById, el) => {
        acc[el.id] = el;
        return acc;
    }, {});

    data.messages = trades.reduce<Messages>((acc: Messages, el) => {
        acc[el.id] = createFakeMsgs(el.id, data.currentUser.id, el.traderId);
        return acc;
    }, {});

    return data;
}
