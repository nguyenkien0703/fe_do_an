import { Avatar } from "antd";
import { MyMessage, OtherMessage } from "../message";
import { Message } from "../message/message";

interface MessageListProps {
    messages: Message[]
};

interface OtherMessageListProps extends MessageListProps {
    urlAvatar: string
    username: string
}

export function MyMessageList({ messages }: MessageListProps) {
    return (
        <div
            className="mb-2"
        >
            <div className="flex flex-col flex-grow justify-end">
                {messages.map((message, i) => (
                    <MyMessage key={message.id}
                        status={message.status}
                        showStatus={i === messages.length - 1}
                        timestamp={message.timestamp}
                        text={message.text} />
                ))}
            </div>
        </div>
    );
}

export function OtherMessageList({ messages, urlAvatar, username }: OtherMessageListProps) {
    return (
        <div
            className="flex justify-start items-end mb-2 w-full"
        >
            <Avatar size={30} className="border-gray-300" src={urlAvatar} />
            <div className="flex flex-col pl-2 flex-grow">
                <div className="flex w-fit items-center"> {username} </div>
                {messages.map((message, i) => (
                    <OtherMessage key={message.id}
                        showStatus={i === messages.length - 1}
                        timestamp={message.timestamp}
                        text={message.text} />
                ))}
            </div>
        </div>
    );
}