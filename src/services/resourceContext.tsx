import React from "react";

export type ResourceContextType = {
    logQuantity: number;
    updateLogQuantity: (logQuantity: number) => void;
};

export const ResourceContext = React.createContext<ResourceContextType | null>(null);

const ResourceProvider = ({ children }: React.PropsWithChildren) => {
    const [logQuantity, setLogQuantity] = React.useState<number>(0);

    const updateLogQuantity = (value : number) => {
        setLogQuantity(value);
        console.log(value);
    }


    return <ResourceContext.Provider value={{ logQuantity, updateLogQuantity }}>{children}</ResourceContext.Provider>;
}

export default ResourceProvider;