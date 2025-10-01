import { useState } from "react";
import HeaderBoxChat from "./header";
import FooterBoxChat from "./footer";
import ContentChatBox from "./content";

export default function ChatBox() {
    const [close, setClose] = useState(false);
    const [minus, setMinus] = useState(false);

    if (close || minus) return null;

    return (
        <>
            <div
                className="flex flex-col fixed bottom-0 px-0 right-[50px] w-[300px] h-[440px] bg-white shadow-lg rounded"
            >
                {/* header */}
                <HeaderBoxChat onClose={() => setClose(true)}
                    onMinus={() => setMinus(true)} />

                {/* context */}
                <div className="flex-1 p-2 overflow-y-auto text-sm">
                    <ContentChatBox />
                </div>

                {/* footer */}
                <FooterBoxChat />
            </div>
        </>
    );
}
