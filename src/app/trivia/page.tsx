'use client'
import "../../styles/trivia.css";
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import { Button, Flex, Image } from "antd";
import { Fira_Sans_Condensed, M_PLUS_2 } from "next/font/google";
import { TwitterOutlined, InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import MangaGrid from "@/components/mangaGrid";
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import BuffsDebuffs from "@/components/Buffs-Debuffs";
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "700",
    subsets: ["latin"],
});
const japanese = M_PLUS_2({
    weight: "900",
    subsets: ["latin"],
});
function trivia() {
    useEffect(() => {
        const cookies = parseCookie(document.cookie);
        const jwt = cookies.get('jwt');
        console.log(jwt);
        if (!jwt) {
            window.location.href = "/";
        }
        
    }, []);
    const images = [
        "https://manga-more.com/wp-content/uploads/2017/07/0191d4ee16fb2babc0fed2cfedc4f867198bcb74e8.jpg",
        "https://xn--w8jtkjf8c570x.com/wp-content/uploads/2019/01/50BF0A45-45EC-4DAE-B036-958A5991F112.jpeg",
        "https://i.pinimg.com/originals/2d/c8/12/2dc812d62b7bb14f0f7105ef62a28664.png",
    ];
    return (
        <>
            <Navbar />
            <div className="container">
                <Flex justify="space-between" align="center" gap={100} style={{ background: "transparent", width: "100%", height: 'auto' }}>
                    <Flex style={{ position: "relative", width: "100%" }}>
                        <MangaGrid images={images} />
                    </Flex>
                </Flex>

                <BuffsDebuffs />

            </div>
        </>
    )
}
export default trivia;