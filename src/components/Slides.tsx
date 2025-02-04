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

    return <div className={cn(
        isEnlarged && 'fixed top-0 left-0 w-screen h-full z-[9999] bg-secondary !max-w-none',
        'flex items-center justify-center gap-4',
        !isEnlarged && className
    )}>
        <ArrowCircleLeftOutlinedIcon
            className={cn(
                isEnlarged && 'fixed bottom-0 left-0',
                !isLeft && 'invisible',
                'cursor-pointer z-20',
            )}
            onClick={() => setIdx(old => old - 1)}
        />
        <div className='w-full h-full relative overflow-hidden' >
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
        <ArrowCircleLeftOutlinedIcon
            className={cn(
                isEnlarged && 'fixed bottom-0 right-0',
                !isRight && 'invisible',
                'cursor-pointer rotate-180',
            )}
            onClick={() => setIdx(old => old + 1)}
        />
    </div>
}