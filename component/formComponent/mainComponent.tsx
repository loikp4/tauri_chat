'use client'
import React,{useState,useEffect} from 'react'

function GetmainComponent() {
    const [Container,setContent] = useState<React.JSX.Element | null> (null);
    
    useEffect(() => {
        setup();
    },[]);

    async function setup() {
        const Content = (await import("./messageInput")).default;
        setContent(<Content />);
    }
    
    return (
        <>
        <div>
            {Container}
        </div>
        </>
    )
}

export default GetmainComponent;
