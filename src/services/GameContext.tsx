import React, { useState } from "react";

export type GameContextType = {
    logQuantity: number;
    updateLogQuantity: (logQuantity: number) => void;
    bridgeBuilt: boolean;
    setBridgeBuilt: (value: boolean) => void;
};

export const GameContext = React.createContext<GameContextType | null>(null);

const GameContextProvider = ({ children }: React.PropsWithChildren) => {
    const [logQuantity, setLogQuantity] = useState<number>(0);
    const [bridgeBuilt, setBridgeBuilt] = useState<boolean>(false);

    const updateLogQuantity = (value : number) => {
        setLogQuantity(value);
    }


    return <GameContext.Provider value={{ logQuantity, updateLogQuantity, bridgeBuilt, setBridgeBuilt }}>{children}</GameContext.Provider>;
}

export default GameContextProvider;