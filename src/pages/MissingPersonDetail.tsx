import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'
import { eye, toggle } from 'ionicons/icons'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { MissingPersonContext, MissingPersonType } from '../contexts/MissingPersonProvider'


const MissingPersonDetail = () => {
    const { id } = useParams<{ id: string }>()
    const [missingPerson, setMissingPerson] = useState<MissingPersonType>()
    const { getMissingPerson } = useContext(MissingPersonContext)


    const updateStatus = () => {


        switch (missingPerson?.status) {
            case "missing":
                return <IonText color='danger'>Missing</IonText>
            case "tracking":
                return <IonText color='warning'>Tracking</IonText>
            case "found":
                return <IonText color='secondary'>Found</IonText>
        }
    }


    const style = {
        uploadedImage: {
            width: 'auto',
            height: '100%',
            transform: "scale(1.5)"
        },
        imageContainer: {
            margin: 'auto',
            width: '250px',
            height: '250px',
            borderRadius: "50%",
            overflow: "hidden",
            border: "none !important",
        }
    }

    useEffect(
        () => setMissingPerson(getMissingPerson(Number(id))), []
    )
    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton text="Home" color="secondary" />
                    </IonButtons>
                    <IonTitle color='secondary'>{missingPerson?.name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className='ion-padding'>
                <div className="ion-text-center" style={style.imageContainer}>
                    <IonImg
                        src={missingPerson?.image}
                        style={style.uploadedImage}
                    />
                </div>

                <section className="ion-margin-top">
                    <IonGrid>
                        <IonRow>
                            <IonCol size='4'>
                                <IonText>Name</IonText>
                            </IonCol>
                            <IonCol>
                                <IonLabel>{missingPerson?.name}</IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='4'>
                                <IonText>
                                    <IonIcon icon={eye} slot='start' />
                                    Last Seen
                                </IonText>
                            </IonCol>
                            <IonCol>
                                <IonLabel>{missingPerson?.lastSeen} </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='4'>
                                <IonText>
                                    <IonIcon icon={toggle} color='secondary' slot='start' />
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
                    <IonButton color='secondary' >Update</IonButton>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default MissingPersonDetail