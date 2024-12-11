import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routsType } from 'methodes/global';

type modalStateType = null | ReactNode;

interface contextType {
    isModalOpen?: Boolean;
    modalContent?: modalStateType;
    setModalContent?: (content: ReactNode) => void;
    navigate?: (rout: routsType) => void;
    page?: routsType;
    isLoaded?: boolean;
}

const Context = createContext<contextType>({});

export function ContextPriveder({ children }: { children: ReactNode }) {

    const Navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
    const [modalContent, _setModalContent] = useState<modalStateType>(null);
    const [page, setPage] = useState<routsType>('/');
    const [isLoaded, setIsLoaded] = useState<boolean>(false);


    function setModalContent(content: ReactNode) {
        if (content) {
            setIsModalOpen(true);
            _setModalContent(content);
        } else {
            setIsModalOpen(false);
            setTimeout(() => {
                _setModalContent(null);
            }, 300)
        }
    }

    function navigate(rout: routsType) {
        Navigate(rout);
        setPage(rout);
    }

    const location = useLocation();
    useEffect(() => {
        //@ts-ignore
        navigate(location.pathname);
        setTimeout(() => {
            setIsLoaded(true);
        }, 10)
    }, [])

    return (
        <Context.Provider value={{ isModalOpen, modalContent, setModalContent, navigate, page, isLoaded }}>
            {children}
        </Context.Provider>
    );
};

export default function useCtx() {
    const context = useContext(Context);
    return context;
}