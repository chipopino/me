import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Page from 'components/Page';
import useCtx from 'components/Context';
import Carousel from 'components/Carousel';

import Slides from 'components/Slides';
import Img from 'components/Img';
import Video from 'components/Video';

const co = {
    mainTitle: 'Welcome to my website',
    subTitle: 'Here you can see all about my life, work and thoughts',
}

const images = [
    './IMG-20240119-WA0023.jpg',
    // './my-pics/20221031_234325.jpg',
    './my-pics/IMG_20161202_004238.jpg',
    './my-pics/20221031_234312.jpg',
    './my-pics/20210124_121929.jpg',
    './my-pics/20210124_123411.jpg',
    './my-pics/IMG-20170804-WA0017.jpg',
    './my-pics/IMG-20220301-WA0026.jpg',
    './my-pics/IMG-20220517-WA0003.jpg',
    // './my-pics/IMG-20220517-WA0005.jpg',
    './my-pics/IMG-20220620-WA0014.jpg',
    './my-pics/IMG-20220621-WA0000.jpg',
    './my-pics/IMG-20220824-WA0000.jpg',
    './my-pics/IMG-20220829-WA0008.jpg',
    './my-pics/IMG-20221006-WA0026.jpg',
    './my-pics/IMG-20221107-WA0007.jpg',
    './my-pics/IMG-20231202-WA0001.jpg',
    './my-pics/Photo from DannyGersh.jpg',
    './my-pics/WhatsApp Image 2023-09-14 at 14.47.44_9e066257.jpg',
    './my-pics/WhatsApp Image 2023-09-29 at 19.03.04_d882cfc9.jpg',
    './my-pics/WhatsApp Image 2023-09-29 at 19.04.08_cfafab94.jpg',
    './my-pics/WhatsApp Image 2023-09-29 at 19.04.09_27c37519.jpg',
    './my-pics/WhatsApp Image 2023-09-29 at 19.04.44_cbf570b4.jpg',
    './my-pics/WhatsApp Image 2023-09-29 at 19.06.40_78e86ec2.jpg',
    './my-pics/WhatsApp Image 2023-11-04 at 21.28.35_91c3ea66.jpg',
].map(image => require(`${image}`));


export default function Home() {

    const { page } = useCtx();
    const isCurrent = page === '/';

    return <Page
        name={'/'}
        className='text-center w-fit flex flex-col gap-4'
    >
        <h1>{co.mainTitle}</h1>
        <h2>{co.subTitle}</h2>
        {isCurrent && <Slides
            items={[
                ...images.map(e => <Img src={e} className='h-full' />),
                <Video src={require('./WhatsApp Video 2021-03-20 at 13.03.13.mp4')} />
            ]}
            className='max-h-[400px] w-full bg-secondary rounded-xl p-2'
        />}
        <blockquote className="pl-4 italic text-gray-700">
            "You are all stupid idiots and I hate you."
            <br />
            - Danny Gershman 1996 ~ Im still alive (I think)
        </blockquote>
    </Page>
}