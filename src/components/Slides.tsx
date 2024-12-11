import React, { useState, useEffect } from 'react';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { cn } from 'methodes/global';


export default function Slides(
    { items, className }:
        { items: any[], className?: string }
) {
    const len = items.length;
    const [idx, setIdx] = useState<number>(0);

    const isLeft = idx > 0;
    const isRight = idx < len - 1;

    return <div className={cn(
        'flex items-center justify-center gap-4',
        className
    )}>
        <ArrowCircleLeftOutlinedIcon
            className={cn('cursor-pointer', !isLeft && 'invisible')}
            onClick={() => setIdx(old => old - 1)}
        />
        <div className='w-full h-full relative overflow-hidden' >
            {items.map((e, i) =>
                <div
                    key={`slider-${i}-${e}`}
                    className={cn(
                        'relative w-full h-full',
                        'flex flex-col items-center justify-center',
                        ' transition-all duration-500')}
                    style={{
                        transform:
                            `translate(${(i - idx) * 100}%, -${i * 100}%)`
                    }}
                >
                    {(i > idx - 2 && i < idx + 2) && e}
                </div>)}
        </div>
        <ArrowCircleLeftOutlinedIcon
            className={cn('cursor-pointer rotate-180', !isRight && 'invisible')}
            onClick={() => setIdx(old => old + 1)}
        />
    </div>
}