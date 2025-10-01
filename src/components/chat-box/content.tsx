import { MyMessageList, OtherMessageList } from "./message-list";

export default function ContentChatBox() {
    return (
        <div>
            <p className="text-gray-600">Nội dung ChatBox123213...</p>
            <MyMessageList texts={["1231231232123123123212312312321231231232123123123212312312321231231232123123123212312312321231231232123123123212312312321231231232123123123212312312321231231232",
                "1231231232123123123212312312321231231232123123123212312312321231231232123123123212312312321231231232123123123212312312321231231232123123123212312312321231231232"
            ]} />
            <OtherMessageList
                urlAvatar='https://api.dicebear.com/7.x/avataaars/svg?seed=Roger'
                texts={["hello", "hello", "hello"]}
                username="tessst is 0" />
        </div>
    )
}