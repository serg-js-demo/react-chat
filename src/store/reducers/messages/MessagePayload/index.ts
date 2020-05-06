import { MessageItem } from "store/types";
type MessageServiceFields = "time" | "id";
export type NewMessagePayload = Omit<MessageItem, MessageServiceFields>;

type MessagePayload = MessageItem[] | NewMessagePayload | number;

export default MessagePayload;
