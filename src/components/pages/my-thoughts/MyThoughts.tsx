import React from 'react';
import Page from 'components/Page';
import useCtx from 'components/Context';


export default function Thoughts() {

    const { page } = useCtx();

    return <Page
        name={'/thoughts'}
        className='text-center w-fit flex flex-col gap-4'
    >
        <h1>My thoughts</h1>
        <div className='w-full h-full flex flex-col gap-4 text-left'>
            <p>Im talking about 99.99% of humans here.</p>
            <p>
                In 28 years of <a href='/mylife'>my life</a>,
                I now understand that I wasnet homless because
                money, It was because I hate thous
                stupid, selfish, filthy humans. I dont whant to be enithing like them.
                I now understand that no body while ever interact
                with you with good intentions, they just whant
                to squize something from you, normally material things or sex,
                but sometimes also non material things,
                and the second they realize that they have nothing
                to manipulate from you, thay while never talk with
                you again, like many of my so called friends.
                <br /><br />
                we have <a
                    href='https://www.youtube.com/watch?v=FtK-QCiD-FE'>
                    all of history
                </a> to teach us that we are in nature,
                the same shit throwing, brain eating monkeys, like owr
                closest relative the chimpanzis. this is why socializem
                while never work, it has beautifull idears in its core,
                but it is not in human nature to care nor to share.
                its owr nature to be the monsters we are, and you can
                forsfully "educate" humans for whatever education you whant,
                at their core, their just like the place they came from, nature.
                <br /><br /><br />
            </p>
            <b>
                <p className='text-xl text-center mb-8'>pleas try to be cind hearted, be nice to each other, please, have a heart.</p>
            </b>
        </div>
    </Page>
}