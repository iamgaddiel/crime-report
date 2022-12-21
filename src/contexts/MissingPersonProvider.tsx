import React, { createContext, useState } from 'react'
import Person from '../assets/images/no_match_illustration_v3_darkmode.svg'



export interface MissingPersonType {
    id: number,
    name: string,
    lastSeen: string,
    image: string,
    status: string
}


export type MissingPersonContextType = {
    missingPerson: MissingPersonType,
    missingPeople: [] | MissingPersonType[],
    getMissingPerson: (id: number) => MissingPersonType,
    addMissingPerson: (person: MissingPersonType) => void
}


export const MissingPersonContext = createContext<MissingPersonContextType>({
    missingPerson: {
        id: 0,
        name: "",
        lastSeen: "",
        image: "",
        status:  "missing"
    },
    missingPeople: [],
    getMissingPerson: (id: number) => {
        return  {
            id: 0,
            name: "",
            image: "",
            lastSeen: "",
            status:  "missing"
        }
    },
    addMissingPerson: (person: MissingPersonType) => { },
})


const MissingPersonProvider = (props: any) => {
    const [missingPerson, setPersonMissingPerson] = useState<MissingPersonType | any>({})
    const [missingPeople, setMissingPeople] = useState<MissingPersonType[] | any>([])


    const getMissingPerson = (id: number) => missingPeople?.find((person: MissingPersonType) => person.id === id)


    const addMissingPerson = (person: MissingPersonType) => setMissingPeople([...missingPeople, person])


    return (
        <MissingPersonContext.Provider value={{ missingPerson, missingPeople, getMissingPerson, addMissingPerson }}>
            {props.children}
        </MissingPersonContext.Provider>
    )
}

export default MissingPersonProvider