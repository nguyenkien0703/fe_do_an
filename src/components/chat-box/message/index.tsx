import { MessageStatus } from "./message";

export interface MyMessageProps {
    text: string;
    showStatus: boolean;
    status: MessageStatus;
    timestamp?: string;
}

export interface OtherMessageProps {
    text: string;
    timestamp?: string;
    showStatus: boolean;
}

export function MyMessage({ text, status, timestamp, showStatus = false }: MyMessageProps) {
    return (
        <div className="flex flex-col items-end mb-1 max-w-[60%] min-w-0 ml-auto">
            {showStatus && (
                <div className="text-center text-xs text-gray-400 mt-1">{timestamp}</div>
            )}
            <div className="p-2 rounded-lg mb-1 whitespace-pre-wrap max-w-full inline-block
                bg-blue-500 text-white rounded-br-none break-words">
                {text}
            </div>
            {showStatus && (
                <div className="flex justify-end">{status}</div>
            )}
        </div>
    );
}

export function OtherMessage({ text, timestamp, showStatus = false }: OtherMessageProps) {
    return (
        <div className="flex flex-col items-start mb-1 max-w-[60%] min-w-0">
            {showStatus && (
                <div className="text-center text-xs text-gray-400 mt-1">{timestamp}</div>
            )}
            <div className="p-2 rounded-lg mb-1 whitespace-pre-wrap max-w-full inline-block
                bg-blue-500 text-white rounded-bl-none break-words">
                {text}
            </div>
        </div>
    );
}