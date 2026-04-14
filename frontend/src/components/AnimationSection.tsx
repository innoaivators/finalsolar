import { useEffect, useRef, useState } from "react";
import minimaRemix from "@/assets/minima_remix.webm";

const AnimationSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            style={{
                position: "relative",
                overflow: "hidden",
                background: "#0a0a0f",
                padding: "0",
            }}
        >
            {/* Ambient glow overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(100,120,255,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />

            <div
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.9s ease, transform 0.9s ease",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <video
                    ref={videoRef}
                    src={minimaRemix}
                    muted
                    loop
                    playsInline
                    style={{
                        width: "100%",
                        display: "block",
                        maxHeight: "85vh",
                        objectFit: "cover",
                    }}
                />
            </div>
        </section>
    );
};

export default AnimationSection;
