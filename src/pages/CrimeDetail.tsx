import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { eye, send, toggle } from "ionicons/icons"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import Person from '../assets/images/no_match_illustration_v3_darkmode.svg'
import { CrimeContext, CrimeType } from "../contexts/CrimeContextProvider"


export const CrimeDetail = () => {
    const { id } = useParams<{ id: string }>()
    const [crime, setCrime] = useState<CrimeType>()
    const { getCrime } = useContext(CrimeContext)


    const updateStatus = () => {

        // const status = "tracking"

        // switch (status) {
        //     case "missing":
        //         return <IonText color='danger'>Missing</IonText>
        //     case "tracking":
        //         return <IonText color='warning'>Tracking</IonText>
        //     case "found":
        //         return <IonText color='secondary'>Found</IonText>
        //     default:
        //     }
        return <IonText color='secondary'>Found</IonText>
    }

    useEffect(() => setCrime(getCrime(id)), [id, getCrime])

    return (
        <IonPage>
        <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton text="Home" color="secondary" />
                    </IonButtons>
                    <IonTitle color='secondary'>{crime?.title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className='ion-padding'>

                <section className="ion-margin-top">
                    <IonGrid>
                        <IonRow>
                            <IonCol size='4'>
                                <IonText>Case ID</IonText>
                            </IonCol>
                            <IonCol>
                                <IonLabel>#{crime?.caseId} </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='4'>
                                <IonText>Title</IonText>
                            </IonCol>
                            <IonCol>
                                <IonLabel>{crime?.title} </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='4'>
                                <IonText>Location</IonText>
                            </IonCol>
                            <IonCol>
                                <IonLabel>{crime?.location} </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='4'>
                                <IonText>Summary</IonText>
                            </IonCol>
                            <IonCol>
                                <IonLabel>{crime?.summary} </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='4'>
                                <IonText>
                                    <IonIcon icon={toggle} slot='start' />
                                    Status
                                </IonText>
                            </IonCol>
                            <IonCol>
                                {updateStatus()}
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </section>

                <section className='ion-text-center ion-margin-top'>
                    <IonList>
                        <IonListHeader>
                            <IonTitle>Complains</IonTitle>

                        </IonListHeader>
                            {
                                [1, 2, 3, 4, 5, 6, 7].map((complain, index) => (
                                    <IonItem key={index}>
                                        <IonAvatar slot="start">
                                            <IonImg src={ Person } alt={String(index)} />
                                        </IonAvatar>
                                        <p>
                                            <IonText>Eu tempor.</IonText>
                                            <IonText>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum maxime esse ?
                                            </IonText>
                                        </p>
                                    </IonItem>
                                ))
                            }
                    </IonList>
                </section>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonInput type="text" placeholder="Add complain" />
                            </IonCol>
                            <IonCol size="2">
                                <IonButton color='secondary' >
                                    <IonIcon icon={send} color='light' slot="icon-only" />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default CrimeDetail