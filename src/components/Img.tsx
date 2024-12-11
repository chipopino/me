import React, { useState, useRef } from 'react';
import { cn } from 'methodes/global';

export default function Img(
    { src, className }:
        { src: string, className?: string }
) {
    return <div className={cn(className, 'flex flex-col items-center justify-center')}>
        <img
            src={src}
            className={'max-w-full max-h-full rounded-lg'}
        />
    </div>
}