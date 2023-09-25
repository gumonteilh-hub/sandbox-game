import React, { useEffect, useState } from "react";

export type GameContextType = {
    logQuantity: number;
    updateLogQuantity: (logQuantity: number) => void;
    bridgeBuilt: boolean;
    updateBridgeBuilt: (value: boolean) => void;
};

export const GameContext = React.createContext<GameContextType | null>(null);

const GameContextProvider = ({ children }: React.PropsWithChildren) => {
    const [logQuantity, setLogQuantity] = useState<number>(0);
    const [bridgeBuilt, setBridgeBuilt] = useState<boolean>(false);

    useEffect(() => {
        const logQuantityStr = localStorage.getItem('logQuantity');
        if(logQuantityStr && parseInt(logQuantityStr)) {
            setLogQuantity(parseInt(logQuantityStr));
        }

        const bridgeBuilt = localStorage.getItem('BridgeBuilt') === 'true';
        setBridgeBuilt(bridgeBuilt);
    }, [])

    const updateLogQuantity = (value : number) => {
        setLogQuantity(value);
        localStorage.setItem('logQuantity', value.toString());
    }

    const updateBridgeBuilt = (value : boolean) => {
        setBridgeBuilt(value);
        localStorage.setItem('BridgeBuilt', value.toString());
    }


    return <GameContext.Provider value={{ logQuantity, updateLogQuantity, bridgeBuilt, updateBridgeBuilt }}>{children}</GameContext.Provider>;
}

export default GameContextProvider;