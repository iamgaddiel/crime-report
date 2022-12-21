import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonToast, IonIcon, IonList, IonItem, IonLabel, IonInput, IonButton, IonTextarea } from '@ionic/react'
import { caretDown, add, image } from 'ionicons/icons'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { CrimeContext, CrimeType } from '../contexts/CrimeContextProvider'
import { MissingPersonContext } from '../contexts/MissingPersonProvider'

const ReportCrime = () => {

    /**
     *  [Contexts]------------------------------------------------ 
     * ------------------------------------------------------------
     */

    const { addCrime } = useContext(CrimeContext)
    const history = useHistory()
    /**
     *  [useStates]------------------------------------------------ 
     * ------------------------------------------------------------
     */
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [summary, setSummary] = useState("")
    const [isOpen, setIsOpen] = useState(false)


    /**
     *  [Functions]------------------------------------------------ 
     * ------------------------------------------------------------
     */

    const handleSubmit = () => {
        const data: CrimeType = {
            title,
            location,
            summary,
            caseId: String(Math.random()),
            status: "pending"
        }

        if ((title && location && summary) === "") {
            setIsOpen(true)
            return
        } else {
            history.push('/home')
            addCrime(data)
        }
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='stat'>
                        <IonBackButton text="Home" color='secondary' />
                    </IonButtons>
                    <IonTitle>Add Missing Persson </IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent fullscreen className="ion-padding">

                <IonToast
                    isOpen={isOpen}
                    message="Complete the form and try again."
                    color='danger'
                    duration={3000}
                    position="top"
                    onDidDismiss={() => setIsOpen(false)}
                />
                {/* 
                <section className="ion-margin-top">
                    <div className="ion-text-center ion-margin-vertical">
                        <small>click to upload image </small> <br />
                        <IonIcon icon={caretDown} color='secondary' size="large" />
                    </div>
                    {
                        displayImage()
                    }
                </section> */}

                <IonList>
                    <IonItem className="">
                        <IonLabel position="floating">Title</IonLabel>
                        <IonInput
                            type="text"
                            name="title"
                            placeholder="Missing Car"
                            onIonChange={e => setTitle(e.detail.value as string)}
                            value={title}
                            clearInput
                            autofocus
                            autoCapitalize=""
                            required
                        />
                    </IonItem>
                    <IonItem className="ion-padding-vertical">
                        <IonLabel position="floating">Location</IonLabel>
                        <IonInput
                            type="text"
                            name="last_seen"
                            placeholder="No2 XYZ"
                            onIonChange={e => setLocation(e.detail.value as string)}
                            value={location}
                            clearInput
                            required
                        />
                    </IonItem>
                    <IonItem className="ion-padding-vertical">
                        <IonLabel position="floating">Summary</IonLabel>
                        <IonTextarea
                            name="summary"
                            placeholder="I need to report a crime"
                            onIonChange={e => setSummary(e.detail.value as string)}
                            value={summary}
                            required
                        />
                    </IonItem>
                    <section className="ion-text-center">
                        <IonButton expand="block" color='secondary' onClick={handleSubmit}>
                            <IonIcon icon={add} color='light' slot="start" />
                            Report crime
                        </IonButton>
                    </section>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default ReportCrime