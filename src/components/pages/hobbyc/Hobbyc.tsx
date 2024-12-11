import React, { ReactNode } from 'react';
import Page from 'components/Page';
import useCtx from 'components/Context';
import Img from 'components/Img';
import Slides from 'components/Slides';
import Video from 'components/Video';

import donationsVideoA from './donationsa.mp4';
import donationsVideoB from './donationsb.mp4';


const images = [
    './IMG-20240226-WA0007.jpg',
    './IMG-20240226-WA0008.jpg',
    './20240323_122217.jpg',
    './20231231_154515.jpg',
    './20240201_115200.jpg',
    './20240201_115257.jpg',
    './20240201_123146.jpg',
    './20240201_130159.jpg',
    './20240303_172813.jpg',
    './20240304_145840.jpg',
    './20240322_101609.jpg',
    './20240323_122201.jpg',
    './20240323_122217.jpg',
].map(image => require(`${image}`));



export default function MyLife() {

    const { page } = useCtx();
    const isCurrent = page === '/hobbyc';
    // const isCurrent = false;

    return <Page name={'/hobbyc'} className='text-center'>
        <h1>My hobbies (programming)</h1>
        <div className='flex flex-col gap-2 text-left'>
            <p>Sometimes I like to program shaders in Glsl:</p>
            {isCurrent && <iframe className='mx-auto' width="640" height="360" src="https://www.shadertoy.com/embed/NdtXDn?gui=true&t=10&paused=true&muted=false" />}
            <span>you can visit the site for more ...</span>
            <hr />
            <p>
                Iv built a 3d simulation of a room filled with mirrors
                and a laser inside, because i was curious about the path
                it would trace:
            </p>
            {/* @ts-ignore */}
            {isCurrent && <iframe className='mx-auto' width="560" height="315" src="https://www.youtube.com/embed/T16XwPSwZ4A?si=68H0FUQ0YYyS3KS1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
            <p>
                This was done in c++ with wxWidgets and OpenGl, &nbsp;
                <a href='https://github.com/DannyGersh/3d-laser-room'>see github</a>.
                in general I can write complicated cross platform, cross compilation programs in cpp and cmake with any supported libraries.
            </p>
            <hr />
            A video game i created in python and Pygame, I also created the soundtrack:
            {/* @ts-ignore */}
            {isCurrent && <iframe className='mx-auto' width="560" height="315" src="https://www.youtube.com/embed/ofhmF3u6QQU?si=az5fkgZR0p6aAZ4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}

            <hr />
            <p>
                The israel hacker space was running low on funds,
                so i helped them by creating this led matrix for
                the donation box:
            </p>
            {isCurrent && <Video src={donationsVideoA} />}
            <p>
                I did this with the esp8266,
                but there is a new version on the way
                using the raspbarrypi0w with a website
                and a server on it, with witch you can
                upload your own designs to it using a gif
                or code. I can also program microcontrollers like the Attiny and others.
            </p>
            {isCurrent && <Video src={donationsVideoB} />}
            <hr />
            Sometimes I create tv heads:
            {isCurrent && <Slides
                items={images.map(e => <Img src={e} className='h-full' />)}
                className='max-h-[400px] w-full bg-secondary rounded-xl p-2'
            />}
            <p>
                I converted my current stupid chromebook laptop
                to a tv head by modifying the max angle of the screen
                to reach all the way to the bottom, pictures are coming soon.
            </p>
        </div>
    </Page>
}