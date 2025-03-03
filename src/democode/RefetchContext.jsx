import { createContext, useContext } from "react";

const RefetchContext = createContext(null);

export const RefetchProvider = ({ children, refetch }) => {
    return (
        <RefetchContext.Provider value={refetch}>
            {children}
        </RefetchContext.Provider>
    );
};

export const useRefetch = () => {
    return useContext(RefetchContext);
};
