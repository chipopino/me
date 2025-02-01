import React, { ReactNode, useEffect } from 'react';
import Page from 'components/Page';
import useCtx from 'components/Context';
import Slides from 'components/Slides';
import Video from 'components/Video';

import Exercise from '@chipopino/exercises';

const videos = [
    './Recording 2023-12-09 145453.mp4',
    './Recording 2023-11-27 121118.mp4',
    './Recording 2023-12-09 150015.mp4',
    './tinder-swiper-good-memories.mp4',
].map(image => require(`${image}`));

export default function MyWork() {

    const { page } = useCtx();
    const isCurrent = page === '/mywork';

    return <Page name={'/mywork'} className='text-center'>
        <h1>My work (web)</h1>
        <div className='text-left flex flex-col gap-2'>
            <p>
                I worked for <a href='https://www.twik.io'>www.twik.io</a> for half a year as a frontend developer. in the following demo, you can see many of the projects I developed for them.
            </p>
            {isCurrent && <Video src='https://www.twik.io/wp-content/uploads/2024/06/WebM-no-opening-and-closing-2.webm' />}
            <p>
                I feel that iv mastered all aspects of frontend development, and it's probably time to find a backend or fullstack job.
                <hr />
                Here are my personal endeavors in web development.
            </p>

            <h1 className='break-all text-left'><a href='https://www.chipopino.com/exercise/'>www.chipopino.com/exercise/</a></h1>

            <p>
                This is a website in which you can create exercises in math (or any other discipline) for other people to solve. Use the left mouse click on desktop and long tap on mobile to interact with exercises; also, some exercises are swipeable.
            </p>
            {isCurrent && <Slides
                items={[require('./exercise1.mp4'), require('./exercise2.mp4')].map(e => <Video src={e} />)}
                className='max-h-[400px] w-full bg-secondary rounded-xl p-2'
            />}
            <p>
                <b>front:</b> tailwind, typescript, and nextjs.
                the exercises themselves are an open source external project (umd react library)
                and are available via "npm i @chipopino/exercises",
                so that anyone can use them in their websites.
                see <a href='https://www.chipopino.com/exercise/embed'>here for more detail</a>.
                <br />
            </p>
            example with custom css:
            <Exercise eid="36" className='w-[300px] h-[200px] mx-auto rounded-xl m-4' />
            <p>
                <b>back:</b> express, mysql, nginx, google-auth.
                I regret not sticking with TypeScript for the back as well.
            </p>

            {isCurrent && <iframe className='w-full h-[450px] m-x-auto m-4 rounded-xl' src='https://www.chipopino.com/exercise' />}

            <p>
                all the latex (the math and illustrations) are
                compiled to svg images, then those images are optimized
                and compressed. its more performant than using mathjax
                or similar tools because svg's only take up ram for
                internal rendering, where mathjax also takes up ram as
                the typesetting is stored as part of the webpage dom.
                also the images are lazy loaded so initially
                the exercise takes almost no resources at all.
                anyways, svg's are probably one of the most optimized
                things in the browser. 
            </p>
            <p><b>
                The front was developed by my brother, so I was
                in charge of reviewing\merging his commits.
            </b></p>
            <p>
                there are two separate servers involved in this project,
                one for the website, and another one solely for the purpose
                of compiling latex to create the math and illustrations.
                this is because latex compilation is dangerous,
                so if anything happens, it would not effect the main website.
                also its very fast to restore operation in case of failure,
                also latex compilation is time consuming, so this system
                is easily extendible to have many servers of latex compilers
                in case there is a need.
                there is a full complete latex installation
                on there so one can compile any latex as he would on
                his own personal computer.
                this means that anything that can be done, can be done
                using my website.
            </p>

            <h1 className='break-all'><a href='https://www.chipopino.com/humus/'>www.chipopino.com/humus/</a></h1>
            {isCurrent && <iframe className='w-full h-[400px] m-x-auto m-4 rounded-xl' src='https://www.chipopino.com/humus/' />}
            <p>
                This is basically Webamp - a web implementation of Winamp.
                what I did is made it mobile friendly as well as added
                the bottom navbar that lets you browse, save and load skins
                out of th 50,000 skins the internet archive offers (they say its
                more, but a lot of them got repeated). You can also
                search, save and load radio stations and listen for free.
                you can also export a file containing your skins and radio stations,
                than when you import it the skins and stations return to your page.
                local storage is used so you don't have to sign in.
                all of this is made possible due to the efforts of the Webamp
                developers, the internet archives, and the developers of
                the Radiobrowser project, so im very grateful for their work.
                <br /><br />
                <b>front:</b> react (webpack), typescript, tailwind.
                <br />
                <b>back:</b> flask.
            </p>
        </div>
    </Page>
}