import { createContext } from "react";
import { Data } from "../Constans";

export const Mycontext = createContext()

export const MyProvider = ({ children }) => {

    const BooksData = Data.BooksData.books
    const AllBooks = BooksData
    console.log(AllBooks);
    

    // const UserData = 

    const all = { AllBooks }


    return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
}