import { IonList, IonListHeader, IonTitle, IonItem, IonAvatar, IonImg, IonGrid, IonRow, IonCol, IonText } from "@ionic/react";

import React, { useContext } from "react";
import { CrimeContext } from "../contexts/CrimeContextProvider";



type PropType = { Person: string }

const CrimeList: React.FC<PropType> = ({
    Person
}) => {

    /**
     * [Context]  ------------------------------------------------------
     * ----------------------------------------------------------
     */
    const { crimes } = useContext(CrimeContext)

    return <IonList className="ion-margin-top">
        <IonListHeader>
            <IonTitle color='secondary'>Crime</IonTitle>
        </IonListHeader>

        {
            crimes.length === 0 ?
                <div className="ion-text-center ion-margin-vertical">
                    <IonText color='primary'>No record found</IonText>
                </div> :
                crimes.map(crime => (
                    <IonItem routerDirection='forward' routerLink={`/crime/${crime.caseId}`}>
                        <IonGrid>
                            <IonRow className="ion-align-items-center">
                                <IonCol size='3' className="ion-justify-item-center">
                                    <IonAvatar>
                                        <IonImg src={Person} />
                                    </IonAvatar>
                                </IonCol>
                                <IonCol>
                                    <p className="ion-no-padding">
                                        <IonText>
                                            <b>{crime.title}</b>
                                        </IonText> <br />
                                        {
                                            crime.summary.substring(0, 60) + "..."
                                        }
                                    </p>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                    </IonItem>
                ))
        }
    </IonList >;
}


export { CrimeList }