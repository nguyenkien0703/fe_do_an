import { PaperClipOutlined, SendOutlined } from "@ant-design/icons";

interface FooterBoxChatProps {

}

export default function FooterBoxChat({ }: FooterBoxChatProps) {
    return (
        <div className="border-t p-2 flex items-center gap-2">
            <PaperClipOutlined className="text-blue-400 hover:text-gray-700 cursor-pointer text-xl" />
            <input
                type="text"
                placeholder="Nhập tin nhắn..."
                className="flex-1 border rounded mx-1 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <SendOutlined className="text-blue-400 hover:text-gray-700 cursor-pointer text-xl" />
        </div>
    )
}