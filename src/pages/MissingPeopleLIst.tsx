import { IonList, IonListHeader, IonTitle, IonItem, IonGrid, IonRow, IonCol, IonAvatar, IonImg, IonText } from "@ionic/react";
import { useContext } from "react";
import { MissingPersonContext } from "../contexts/MissingPersonProvider";


type PropType = { Person: string }

const MissingPeopleList: React.FC<PropType> = ({ Person }) => {
    /**
     * [ Context ] ------------------------------------------------
     * ------------------------------------------------------------
     */
    const { missingPeople } = useContext(MissingPersonContext)


    return (
        <IonList className="ion-margin-top">
            <IonListHeader>
                <IonTitle>Missing People</IonTitle>
            </IonListHeader>

            {
                missingPeople.length === 0 ?
                    <div className="ion-text-center ion-margin-vertical">
                        <IonText color='secondary'>No record found</IonText>
                    </div> :
                    missingPeople.reverse().map((person, index) => (
                        <IonItem routerDirection='forward' routerLink={`/person/${person.id}`} lines="none">

                            <IonGrid key={index}>
                                <IonRow className="ion-align-items-center">
                                    <IonCol size='3' className="ion-justify-item-center">
                                        <IonAvatar>
                                            <IonImg src={person.image} />
                                        </IonAvatar>
                                    </IonCol>
                                    <IonCol>
                                        <IonText className="ion-no-padding">
                                            <b>{person.name}</b> <br />
                                            <IonText>last seen: <b>{person.lastSeen}</b> </IonText> <br />
                                            <small color="medium">12:00am Tuesday, 2000 </small>

                                        </IonText>
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


        </IonList >
    )
}

export default MissingPeopleList