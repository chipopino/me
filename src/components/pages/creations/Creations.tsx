import React, { ReactNode, useEffect } from 'react';
import Page from 'components/Page';
import useCtx from 'components/Context';
import Slides from 'components/Slides';
import Img from 'components/Img';
import Video from 'components/Video';

const swordImages = [
    './sword/VID-20240404-WA0043_001.mp4',
    './sword/VID-20240405-WA0010.mp4',
    './sword/VID-20240821-WA0013.mp4',
    './sword/VID-20240901-WA0009.mp4',
    './sword/VID-20241205-WA0031.mp4',
    './sword/VID-20241205-WA0035.mp4',
].map(image => require(`${image}`));

const guitarImages = [
    './guitars/20181224_072335_HDR.jpg',
    './guitars/20181224_072408_HDR.jpg',
    './guitars/20181224_072422_HDR.jpg',
    './guitars/20190115_052631_HDR.jpg',
    './guitars/20190115_052704_HDR.jpg',
    './guitars/20190115_052718_HDR.jpg',
    './guitars/20190519_024604_HDR.jpg',
    './guitars/20190817_015824_HDR.jpg',
    './guitars/20200829_075322_HDR.jpg',
    './guitars/20210220_232729_HDR.jpg',
    './guitars/20220321_210226.jpg',
].map(image => require(`${image}`));

const sculptureImages = [
    './sculpture/20180902_221611_HDR.jpg',
    './sculpture/20180902_221845_HDR.jpg',
    './sculpture/20180902_221858_HDR.jpg',
    './sculpture/20180902_221922_HDR.jpg',
].map(image => require(`${image}`));

const microscopeImages = [
    './microscope/20180810_233735_HDR.jpg',
    './microscope/20180810_233948_HDR.jpg',
    './microscope/20180810_084003.jpg',
    './microscope/20180810_084025.jpg',
    './microscope/20180810_085550.jpg',
    // './microscope/20180810_234302_HDR.jpg',
    './microscope/20180811_065146.jpg',
    './microscope/20200124_181346_HDR.jpg',
    './microscope/20200124_181414_HDR.jpg',
    './microscope/20200124_181517_HDR.jpg',
].map(image => require(`${image}`));

const cupImages = [
    './cup/20180903_121842_HDR.jpg',
    './cup/20180903_121853_HDR.jpg',
    './cup/20180903_121906_HDR.jpg',
    './cup/20180903_121909_HDR.jpg',
].map(image => require(`${image}`));


export default function Creations() {

    const { page } = useCtx();
    const isCurrent = page === '/creations';

    return <Page name={'/creations'} className='text-center'>
        <h1>My creations</h1>
        <div className='text-left flex flex-col gap-2'>
            <p>
                Cupidon 3000x - the spring loaded crossbow.
                <br />
                built from 90% scavenged garbage.
            </p>
            {isCurrent && <Slides
                items={[
                    <Img
                        className='h-full'
                        src={require('./crossbow/20200511_201828_HDR.jpg')}
                    />,
                    <Video src={require('./crossbow/VID-20240716-WA0004.mp4')} />,
                    <Video src={require('./crossbow/VID-20240223-WA0018.mp4')} />,
                ]}
                className='max-h-[400px] w-full bg-secondary rounded-xl p-2'
            />}
            <hr />
            <p>
                One day my friend brought a sword
                shaped piece of anti missile metal
                from the factory, so I helped him
                sharpen it.
            </p>
            {isCurrent && <Slides
                items={swordImages.map(e => <Video src={e} />)}
                className='max-h-[400px] w-full bg-secondary rounded-xl p-2'
            />}
            <hr />
            <p>guitars I found and fixed</p>
            {isCurrent && <Slides
                items={guitarImages.map(e => <Img src={e} className='h-full' />)}
                className='max-h-[400px] w-full bg-secondary rounded-xl p-2'
            />}
            <hr />
            <p>some sculpture I built</p>
            {isCurrent && <Slides
                items={sculptureImages.map(e => <Img src={e} className='h-full' />)}
                className='max-h-[400px] w-full bg-secondary rounded-xl p-2'
            />}
            <hr />
            <p>I found a brocken microscope and used its lens to create my own one.</p>
            {isCurrent && <Slides
                items={microscopeImages.map(e => <Img src={e} className='h-full' />)}
                className='max-h-[400px] w-full bg-secondary rounded-xl p-2'
            />}
            <hr />
            <p>
                Once I put a cup in the central bus station of Haifa on top of some pole,
                it staid there for literally 10 years.
            </p>
            {isCurrent && <Slides
                items={cupImages.map(e => <Img src={e} className='h-full' />)}
                className='max-h-[400px] w-full bg-secondary rounded-xl p-2'
            />}
        </div>
    </Page>
}