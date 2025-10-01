interface MessageProps {
    text: string
}

export function MyMessage({ text }: MessageProps) {
    return (
        <div
            className="p-2 rounded-lg mb-1
                    bg-blue-500 text-white rounded-br-none break-words"
        >
            {text}
        </div>
    );
}

export function OtherMessage({ text }: MessageProps) {
    return (
        <div
            className="w-fit p-2 rounded-lg mb-1
                bg-blue-500 text-white rounded-bl-none break-words"
        >
            {text}
        </div>
    );
}