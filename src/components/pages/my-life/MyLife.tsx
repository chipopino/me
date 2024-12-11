import React, { ReactNode, useEffect, useState } from 'react';
import Page from 'components/Page';
import useCtx from 'components/Context';
import Img from 'components/Img';
import Slides from 'components/Slides';
import Btn from 'components/Btn';
import { lget, lset } from 'methodes/localstorage';

const imagesTruck = [
    './truck-general/20231130_161445.jpg',
    './truck-general/20240210_214803.jpg',
    './truck-general/IMG-20240119-WA0023.jpg',
    './truck-general/20231218_113918.jpg',
    './truck-general/20240301_040117.jpg',
    './truck-general/IMG-20240404-WA0040.jpg',
    './truck-general/20231219_083748.jpg',
    './truck-general/20240308_211914.jpg',
    //'./truck-general/IMG-20240422-WA0007.jpg',
    './truck-general/20231222_225437.jpg',
    './truck-general/20240309_132506.jpg',
    //'./truck-general/IMG-20240424-WA0001.jpg',
    './truck-general/20240208_052649.jpg',
    './truck-general/20240321_124814.jpg',
    './truck-general/20240208_060131.jpg',
    './truck-general/20240422_004542.jpg'
].map(image => require(`${image}`));

const imagesTruckDetail = [
    './truck-detail/20231129_164329.jpg',
    './truck-detail/20231129_180456.jpg',
    './truck-detail/20231129_180516.jpg',
    './truck-detail/20231130_161227.jpg',
    './truck-detail/20231130_161451.jpg',
    './truck-detail/20231203_140817.jpg',
    './truck-detail/20231203_140825.jpg',
    './truck-detail/20231203_144853.jpg',
    './truck-detail/20231206_123359.jpg',
    './truck-detail/20231206_123409.jpg',
    './truck-detail/20231206_134340.jpg',
    './truck-detail/20231206_134343.jpg',
    './truck-detail/20231206_155157.jpg',
    './truck-detail/20231206_155201.jpg',
    './truck-detail/20231206_160443.jpg',
    './truck-detail/20231206_161542.jpg',
    './truck-detail/20231206_161543.jpg',
    './truck-detail/20231206_161550.jpg',
    './truck-detail/20231206_161650.jpg',
    './truck-detail/20231206_161652.jpg',
    './truck-detail/20231206_165942.jpg',
    './truck-detail/20231207_110908.jpg',
    './truck-detail/20231210_000002.jpg',
    './truck-detail/20231212_001937.jpg',
    './truck-detail/20231212_001946.jpg',
    './truck-detail/20231212_002019.jpg',
    './truck-detail/20231213_075828.jpg',
    './truck-detail/20231213_203037.jpg',
    './truck-detail/20231215_102430.jpg',
    './truck-detail/20231217_171735.jpg',
    './truck-detail/20231217_171859.jpg',
    './truck-detail/20231218_113918.jpg',
    './truck-detail/20231219_083748.jpg',
    './truck-detail/20231219_090909.jpg',
    './truck-detail/20231222_225406.jpg',
    './truck-detail/20231222_225437.jpg',
    './truck-detail/20231223_152114.jpg',
    './truck-detail/20231223_161404.jpg',
    './truck-detail/20231225_114014.jpg',
    './truck-detail/20231225_114018.jpg',
    './truck-detail/20231229_130605.jpg',
    './truck-detail/20231229_130613.jpg',
    './truck-detail/20231229_130632.jpg',
    './truck-detail/20231230_142727.jpg',
    './truck-detail/20231230_142736.jpg',
    './truck-detail/20231230_142744.jpg',
    './truck-detail/20231230_153903.jpg',
    './truck-detail/20231230_153915.jpg',
    './truck-detail/20231231_132032.jpg',
    './truck-detail/20231231_132036.jpg',
    './truck-detail/20231231_132041.jpg',
    './truck-detail/20231231_132102.jpg',
    './truck-detail/20231231_154515.jpg',
    './truck-detail/20240102_022403.jpg',
    './truck-detail/20240102_022439.jpg',
    './truck-detail/20240102_022528.jpg',
    './truck-detail/20240103_075717.jpg',
    './truck-detail/20240117_024047.jpg',
    './truck-detail/20240118_063001.jpg',
    './truck-detail/20240130_165232.jpg',
    './truck-detail/20240130_181551.jpg',
    './truck-detail/20240201_104251.jpg',
    './truck-detail/20240201_130159.jpg',
    './truck-detail/20240208_052649.jpg',
    './truck-detail/20240208_052738.jpg',
    './truck-detail/20240208_055041.jpg',
    './truck-detail/20240208_055417.jpg',
    './truck-detail/20240208_060131.jpg',
    './truck-detail/20240210_214740.jpg',
    './truck-detail/20240210_214759.jpg',
    './truck-detail/20240301_040117.jpg',
    './truck-detail/20240301_161015.jpg',
    './truck-detail/20240303_205402.jpg',
    './truck-detail/20240304_145840.jpg',
    './truck-detail/20240307_101713.jpg',
    './truck-detail/20240308_211841.jpg',
    './truck-detail/20240309_132506.jpg',
    './truck-detail/20240320_120240.jpg',
    './truck-detail/20240321_124812.jpg',
    './truck-detail/20240322_101609.jpg',
    './truck-detail/20240323_122217.jpg',
    './truck-detail/20240422_004542.jpg',
].map(image => require(`${image}`));

const imagesCazino = [
    './cazino-general/20231103_170310.jpg',
    './cazino-general/WhatsApp Image 2023-10-25 at 10.38.31_31733bd2.jpg',
    './cazino-general/WhatsApp Image 2023-10-25 at 10.38.31_4fbc3b1a.jpg',
    './cazino-general/WhatsApp Image 2023-10-25 at 10.38.32_63f00597.jpg',
    './cazino-general/20231102_112619.jpg',
].map(image => require(`${image}`));


function Date({ children }: { children: ReactNode }) {
    return <div className='m-8'>
        {children}
    </div>
}

function Disclaimer() {

    const { setModalContent } = useCtx();
    const [isOk, setIsOk] = useState<boolean>(false);
    const dummyRender = useState<boolean>(false);

    return <div className='max-w-[600px] w-[90vw] flex flex-col gap-4'>
        <p><b>
            Disclaimer:<br/>
            The contents here are based on personal experiences, opinions, and reflections. The author does not encourage or endorse any of the activities, behaviors, or actions described within. The events and experiences shared are personal and are not meant to serve as advice, instructions, or recommendations.
            The author expressly disclaims any responsibility or liability for any harm, injury, loss, or damage that may occur as a result of the reader attempting to replicate, emulate, or engage in any activities described in this website. Any decisions made based on the information contained herein are solely the responsibility of the reader.
            By selecting "Don't show this again," you acknowledge that you are responsible for ensuring all other individuals who use this device, browser, or access, view, or receive the contents of this website through you are made aware of and agree to this disclaimer. You further acknowledge that the author is not liable for any actions, consequences, or harm resulting from others accessing, sharing, or using this content.        </b></p>
        <div className='flex flex-col'>
            <div className='flex gap-4'>
                <input
                    type="checkbox"
                    id="agree"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setIsOk(e.target.checked);
                    }}
                />
                <label htmlFor='agree'>
                    I have read and understood the disclaimer
                </label>
            </div>
            <div className='flex gap-4'>
                <input
                    type="checkbox"
                    id="dontshowagail"
                    checked={lget('disclaimerAgreed')}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        lset('disclaimerAgreed', e.target.checked);
                        dummyRender[1](!dummyRender[0]);
                    }}
                />
                <label htmlFor='dontshowagail'>
                    Don't show this again
                </label>
            </div>
        </div>
        <Btn
            disabled={!isOk}
            onClick={() => setModalContent?.(null)}
        >
            Continue
        </Btn>
    </div>
}

export default function MyLife() {

    const { page, setModalContent } = useCtx();
    const isCurrent = page === '/mylife';

    useEffect(() => {
        (isCurrent && !lget('disclaimerAgreed')) && setModalContent?.(<Disclaimer />);
    }, [page])

    return <Page name={'/mylife'} className='text-center'>
        <h1>My Life</h1>
        <div className='flex flex-col gap-2 text-left'>
            <Date>04-12-2024</Date>
            <p className='cursor-pointer' onClick={() => setModalContent?.(<Disclaimer />)}><b>Show disclaimer</b></p>
            <p>
                currently im in prague and im developing this website.
                before that I lived in a refrigeration truck that iv put
                solar panels on top of. i had a 300w system that
                supported a small version of everything to save battery.
                I had a small fridge, my computer was raspbarrypi5,
                all lights where led, and a desktop monitor.
                I paid for everything less then 5k shekels and lived there
                about 5 months during the Israel-Gaza 7/10 war.
            </p>
            {isCurrent && <Slides
                items={imagesTruck.map(e => <Img src={e} className='w-full h-full' />)}
                className='max-h-[400px] bg-secondary rounded-xl p-2'
            />}
            <p>here is mor detail</p>
            {isCurrent && <Slides
                items={imagesTruckDetail.map(e => <Img src={e} className='w-full h-full' />)}
                className='max-h-[400px] bg-secondary rounded-xl p-2'
            />}
            <p>
                before that Iv worked for half a year in Twik
                as a front end developer,
                and before that, iv lived in an
                abandoned casino in Bat Galim Haifa for two months.
            </p>
            {isCurrent && <Slides
                items={imagesCazino.map(e => <Img src={e} className='w-full h-full' />)}
                className='max-h-[400px] bg-secondary rounded-xl p-2'
            />}
            <p>
                I came with a drill, drilled holes in the concrete
                and put this metal sheet as a door, the image of the
                door was taken in the process.
                then I bought a solar panel, controller and inverter
                for 600~700 shekels, the battery was some old golf cart
                trolly battery that a mechanic gave me at the shop.
                in that abandoned building iv finished the first iteration
                of the www.chipopino.com/exercise website, and got a frontend
                job thanks to that (they didn't know i was living in an abandoned building).
                I took a shower with a bottle in my abandoned room, and went
                on to do an interview with the ceo the same day, so thats crazy.
                I was in contact with a Ukrainian refuge there that I was
                buying stuff from like the gas burner to cook and stuff like that,
                we helped each other out and still are in contact today.
            </p>

            <p>
                Before that I used to live in many abandoned buildings,
                in the forest, <b>I lived in an elevator</b> in an abandoned factory
                for a week, I also used to be a shepherd for half a year.
            </p>

            <p>
                At the very beginning i just
                used to sleep on the floor of the forest,
                then I advanced to sleeping inside a cardboard box
                warped in saran wrap. I worked in construction,
                and the boss would pick me up with his truck
                strait from the forest.
                It all happened really because my parents moved
                to a different city when i was 20, and I wanted
                to be close to my friends. working in a factory
                to then waste all the money on an apartment was not
                an option for me, I was reacher then all my friends
                because they where all in minuses in the bank,
                plus I only worked like 5 days a month, so I was
                just hanging out with my friends, and I was very happy.
            </p>
        </div>
    </Page >
}