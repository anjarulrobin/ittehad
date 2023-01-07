import { createContext } from "react";
export interface AppContextInterface {
    title: string;
    setTitle: (newTitle: string) => void
}

export const AppContext = createContext<AppContextInterface>({ title: '', setTitle: () => { } });