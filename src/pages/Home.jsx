import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
    const [text] = useTypewriter({
        words: ['student', 'programmer', 'designer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 60,
    });

    return (
        <>
            <div style={{textAlign: "left"}}>
                <h1>Hi! My name is Kate Seo</h1>
                <h1>
                    I'm a {' '}
                    <span style={{fontWeight: "bold", color: "green"}}>
                        {text}
                    </span>
                    <Cursor/>
            </h1>
            </div>
        </>
    );
}