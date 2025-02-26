import React, { useState, useEffect } from 'react';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { cn } from 'methodes/global';


export default function Slides(
    { items, className }:
        { items: any[], className?: string }
) {
    const len = items.length;
    const [idx, setIdx] = useState<number>(0);
    const [isEnlarged, setIsEnlarged] = useState<boolean>(false);

    const isLeft = idx > 0;
    const isRight = idx < len - 1;

    const backBtnJsx = <div className={cn(
        'relative rounded-full w-fit h-fit',
        'cursor-pointer z-20',
        isEnlarged && '!fixed bottom-0 left-0',
        !isLeft && 'invisible',
    )}
    >
        <ArrowCircleLeftOutlinedIcon />
        <div
            className={cn(
                'absolute w-[80px] h-[80px] rounded-full',
                'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            )}
            onClick={() => setIdx(old => old - 1)}
        />
    </div>

    const itemsListJsx = <div className='w-full h-full relative overflow-hidden' >
        {items.map((e, i) =>
            <div
                key={`slider-${i}`}
                className={cn(
                    'relative w-full h-full',
                    'flex flex-col items-center justify-center',
                    ' transition-all duration-500')}
                style={{
                    transform:
                        `translate(${(i - idx) * 100}%, -${i * 100}%)`
                }}
                onClick={() => setIsEnlarged(old => !old)}
            >
                {(i > idx - 2 && i < idx + 2) && e}
            </div>)}
    </div>

    const nextBtnJsx = <div
        className={cn(
            'relative rounded-full w-fit h-fit',
            'cursor-pointer rotate-180',
            isEnlarged && '!fixed bottom-0 right-0',
            !isRight && 'invisible',
        )}
    >
        <ArrowCircleLeftOutlinedIcon />
        <div
            className={cn(
                'absolute w-[80px] h-[80px] rounded-full',
                'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            )}
            onClick={() => setIdx(old => old + 1)}
        />
    </div>

    return <div className={cn(
        isEnlarged && 'fixed top-0 left-0 w-screen h-full z-[9999] bg-secondary !max-w-none',
        'flex items-center justify-center gap-4',
        !isEnlarged && className
    )}>
        {backBtnJsx}
        {itemsListJsx}
        {nextBtnJsx}
    </div>
}