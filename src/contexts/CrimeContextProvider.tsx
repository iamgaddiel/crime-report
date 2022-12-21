import { createContext, useState } from "react"


export interface ComplainType {
    user: number,
    image: string,
    complain: string
}

export interface CrimeType {
    caseId: string,
    location: string,
    title: string,
    summary: string,
    participants?: number,
    status: string,
    complains?: [] | ComplainType[]
}


export type CrimeContextType = {
    crime: CrimeType,
    crimes: [] | CrimeType[],
    getCrime: (caseId: string) => CrimeType,
    addCrime: (person: CrimeType) => void
}


export const CrimeContext = createContext<CrimeContextType>({
    crime: {
        caseId: "",
        location: "",
        title: "",
        summary: "",
        participants: 0,
        status: "unsolved",
        complains: []
    },
    crimes: [],
    getCrime: (caseId: string) => {
        return {
            caseId: "",
            location: "",
            title: "",
            summary: "",
            participants: 0,
            status: "unsolved",
            complains: []
        }
    },
    addCrime: (caseId: CrimeType) => { },
})



const CrimeContextProvider = (props: any) => {
    const [crime, setCrime] = useState<CrimeType| any>({})
    const [crimes, setCrimes] = useState<CrimeType[]>([])

    const getCrime = (caseId: string) => crimes?.find((instance: CrimeType) => instance.caseId === caseId)!

    const addCrime = (newCrime: CrimeType) => setCrimes([...crimes, newCrime])

    return (
        <CrimeContext.Provider value={{ crime, crimes, getCrime, addCrime }} >
            {props.children}
        </ CrimeContext.Provider >
    )

}

export default CrimeContextProvider