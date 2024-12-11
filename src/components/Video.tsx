import React from 'react';

export default function Video({ src }: { src: any }) {
    return <video controls className='h-[400px] mx-auto bg-accent rounded-xl overflow-hidden'>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
}