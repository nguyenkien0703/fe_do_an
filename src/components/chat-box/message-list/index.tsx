import { Avatar } from "antd";
import { MyMessage, OtherMessage } from "../message";

interface MessageProps {
    texts: string[];
};

interface OtherMessageProps extends MessageProps {
    urlAvatar: string
    username: string
}

export function MyMessageList({ texts }: MessageProps) {
    return (
        <div
            className="flex justify-end mb-2"
        >
            <div className="max-w-[70%] w-fit">
                {texts.map((text) => (
                    <MyMessage text={text} />
                ))}
            </div>
        </div>
    );
}

export function OtherMessageList({ texts, urlAvatar, username }: OtherMessageProps) {
    return (
        <div
            className="flex justify-start items-end mb-2"
        >
            <Avatar size={30} className="border-gray-300" src={urlAvatar} />
            <div className="mx-2 max-w-[70%] w-fit">
                <div className=""> {username} </div>
                {texts.map((text) => (
                    <OtherMessage text={text} />
                ))}
            </div>
        </div>
    );
}