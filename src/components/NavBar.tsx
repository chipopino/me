import React, { ReactNode, useState } from 'react';
import useCtx from 'components/Context';
import { cn, routs } from 'methodes/global';
import Btn from './Btn';
import MenuIcon from '@mui/icons-material/Menu';

function Md({ children, className }: { children: ReactNode, className?: string }) {
    return <div className={cn(className, "hidden md:block")}>{children}</div>;
}
function Sm({ children, className }: { children: ReactNode, className?: string }) {
    return <div className={cn(className, "block md:hidden")}>{children}</div>;
}

export default function NavBar() {

    const { navigate } = useCtx();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const btnsJsx = <div className={cn(
        'w-full h-fit flex flex-col md:flex-row gap-1',
    )}>
        {Object.keys(routs).map((btn, key) =>
            <Btn
                key={`navItems-${key}`}
                onClick={() => {
                    setIsMenuOpen(false);
                    navigate?.(routs[btn]);
                }}
            >
                {btn}
            </Btn>
        )}
    </div>

    const smJsx = <div className={cn(
        'w-full h-fit',
        'flex flex-col gap-1',
    )}>
        <Btn
            className='w-fit'
            onClick={() => setIsMenuOpen(old => !old)}
        >
            <MenuIcon />
        </Btn>
    </div>

    const transitionStyle = 'transition-all duration-300'

    return <div className='w-full h-fit z-10 shadow'>

        <div className={cn(
            transitionStyle,
            'fixed w-full h-full z-20 bg-black',
            isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none',
        )}
            onClick={() => setIsMenuOpen(false)}
        />

        <div className='bg-secondary p-1 z-30 relative'>
            <Md className='w-full h-fit'>{btnsJsx}</Md>
            <Sm className='w-full h-fit'>{smJsx}</Sm>
        </div>

        <div className={cn(
            transitionStyle,
            'absolute md:hidden z-30',
            'w-full h-fit p-1 pt-0 bg-secondary',
            !isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-1',
        )}>
            {btnsJsx}
        </div>

    </div>
}