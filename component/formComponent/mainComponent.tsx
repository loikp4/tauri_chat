'use client'
import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Link from 'next/link';

function GetmainComponent() {
    const [Content, setContent] = useState<React.JSX.Element | null>(null);

    useEffect(() => {
        setup();
    }, []);

    async function setup() {
        const Content = (await import("./messageInput")).default;
        setContent(<Content />);
    }

    return (
        <>
            <div className='h-screen flex  flex-col justify-between'>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        {/* 左列のコンテンツ */}
                        left
                        <Link href={'/testpage'}>link</Link>
                    </Grid>
                    <Grid item xs={6}>
                        {Content}
                    </Grid>
                    <Grid item xs={3}>
                        right
                    </Grid>
                </Grid >

            </div>
        </>
    )
}

export default GetmainComponent;
