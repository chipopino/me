import React, { ReactNode } from 'react';
import { cn, routsType } from 'methodes/global';
import useCtx from 'components/Context';

export default function Page({ children, name, className }:
    { children: ReactNode, name: routsType, className?: string }) {

    const { page, isLoaded } = useCtx();
    
    return <div className={cn(
        className,
        '[&>*]:max-w-[800px] [&>*]:mx-auto',
        'absolute top-0 left-0 overflow-y-auto',
        isLoaded && 'transition-all',
        'w-full h-full flex flex-col p-8',
        name === page ? 'opacity-1' : 'opacity-0 pointer-events-none',
    )}
    >
        {isLoaded && children}
    </div>
}