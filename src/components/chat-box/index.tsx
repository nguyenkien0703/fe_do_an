import { useEffect, useRef, useState } from "react";
import HeaderBoxChat from "./header";
import FooterBoxChat from "./footer";
import ContentChatBox from "./content";

export default function ChatBox() {
    const [close, setClose] = useState(false);
    const [minus, setMinus] = useState(false);

    if (close || minus) return null;

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // scroll xuống dưới cùng ngay khi component được mở lên
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, []);

    return (
        <>
            <div
                className="flex flex-col fixed bottom-0 px-0 right-[50px] w-[300px] h-[440px] bg-white shadow-lg rounded"
            >
                {/* header */}
                <HeaderBoxChat onClose={() => setClose(true)}
                    onMinus={() => setMinus(true)} />

                {/* context */}
                <div ref={containerRef} className="flex-1 px-2 overflow-y-auto">
                    <ContentChatBox />
                </div>

                {/* footer */}
                <FooterBoxChat />
            </div>
        </>
    );
}
