import React, { ReactNode, useEffect } from 'react';
import Page from 'components/Page';
import useCtx from 'components/Context';
import Slides from 'components/Slides';
import Video from 'components/Video';


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
                the reason I left is that I don't want to live in Israel anymore.
            </p>
            {isCurrent && <Video src='https://www.twik.io/wp-content/uploads/2024/06/WebM-no-opening-and-closing-2.webm' />}
            <p>
                I feel that iv mastered all aspects of frontend development (literally EVERYTHING, in a very professional level) and im hoping to get into backend now,
                that being said Im still willing to work solely as a frontend developer.
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
                <b>front:</b> tailwind, typescript, and nextjs for the website and a separate webpack compilation system for the exercises.
                <br />
                <b>back:</b> express, mysql, nginx, google-auth.
                I regret not sticking with TypeScript for the back as well.
            </p>

            <p>
                This is the second time I made this site from scratch.
                The first time got me the job at Twik.
                The first time i used django for the back, so i also
                have a lot of experience with Django, and it's my preferred
                choice for large projects.
            </p>

            {isCurrent && <iframe className='w-full h-[300px] m-x-auto m-4 rounded-xl' src='https://www.chipopino.com/exercise' />}
            <p>
                You can embed exercises in any other website (no iframe).
                example: (use left mouse or long tap to interact):
            </p>

            {/* @ts-ignore */}
            <exercise-tag eid="36" class='max-w-[300px] h-[200px] mx-auto rounded-xl overflow-hidden m-4' />

            <p>
                Notice the theme is different, you just include
                a link to a css file with the required variables
                and your definitions for them, so its very convenient.
                also notice how fast it loads compared to
                the above iframe, you can embed hundreds
                of exercises in one page and it while load as fast as
                without them. this is possible because of
                the following optimizations:
                <br /><br />
                1 - to embed an exercise, you add a script tag
                that includes all that is needed, so the js becomes
                part of the native js of that page.
                the exercises are compiled from react with typescript,
                but other then that there is few libraries that can be used
                as they while interfere with the js of the page.
                <br /><br />
                2 - the exercise is compiled and the result is
                stored as compressed json, so when requested,
                instead of the request going through nginx to express
                to the database and all the way back, it only
                passes through nginx which is by nature capable
                of thousands of requests because its all static,
                generally nginx is very good for that.
                <br /><br />
                3 - all the latex (the math and illustrations) are
                compiled to svg images, then those images are optimized
                and compressed. its more performant than using mathjax
                or similar tools because my svg's only take up ram for
                internal rendering, where mathjax also takes up ram as
                the typesetting is stored as part of the webpage dom.
                also the images are lazy loaded so initially
                the exercise takes almost no resources at all
                both the dom and the fetched resources as almost
                no fetches occur. anyways, svg's is one of the most optimized
                things in the browser.
            </p>
            <p><b>
                The front was developed by my brother, so I was
                in charge of a two developer git, and of reviewing\merging
                his commits.
            </b></p>
            <p>
                I rely on latex for the illustrations, its the most legit
                system for typesetting that is in use in the world today,
                and is used by the most professional people out there
                for creating any book or scientific paper.
                <br />
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