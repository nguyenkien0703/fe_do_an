import { MyMessageList, OtherMessageList } from "./message-list";
import { Message } from "./message/message";

export default function ContentChatBox() {
    const myMessages: Message[] = [
        new Message("1", "123123123212312312321231231232...", "Sent", "12:01"),
        new Message("2", "123123123212312312321231231232...", "Delivered", "12:05")
    ];

    const otherMessages: Message[] = [
        new Message("1", "hello", "Sent", "12:02"),
        new Message("2", "hello", "Delivered", "12:06"),
        new Message("3", "hello", "Seen", "12:10")
    ];

    return (
        <div
            className="flex flex-col flex-1 mt-auto">
            <p className="text-gray-600">Nội dung ChatBox123213...</p>

            <MyMessageList messages={myMessages} />

            <OtherMessageList
                urlAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Roger"
                messages={otherMessages}
                username="tessst is 0"
            />

            <MyMessageList messages={myMessages} />
        </div>
    );
}
