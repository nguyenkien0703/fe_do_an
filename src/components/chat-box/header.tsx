import { CloseOutlined, MinusOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

interface HeaderBoxChatProps {
    onClose: () => void;
    onMinus: () => void;
}

export default function HeaderBoxChat({ onMinus, onClose }: HeaderBoxChatProps) {
    return (
        <>
            <div className="border-b-2 top-0 border-gray-200 backdrop-blur-md">
                <div className="flex justify-between items-center p-2 text-lg">
                    <div className="flex items-center">
                        <Avatar size={30} className="border-gray-300" src='https://api.dicebear.com/7.x/avataaars/svg?seed=Roger' />
                        <p className="mx-2 font-semibold">ChatBox</p>
                    </div>

                    <div>
                        <MinusOutlined
                            onClick={onMinus}
                            className="text-gray-500 hover:text-gray-700 cursor-pointer px-2" />
                        <CloseOutlined
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
