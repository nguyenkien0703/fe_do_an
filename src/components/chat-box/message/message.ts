export type MessageStatus = "Sending" | "Sent" | "Delivered" | "Seen";

export class Message {
    id: string;
    text: string;
    status: MessageStatus;
    timestamp?: string;

    constructor(id: string,
        text: string,
        status: MessageStatus,
        timestamp?: string
    ) {
        this.id = id;
        this.text = text;
        this.status = status;
        this.timestamp = timestamp;
    }
}
