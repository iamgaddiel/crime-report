import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from "@ionic/react"
import { add, caretDown, person } from "ionicons/icons"
import { useContext, useState } from "react"
import Person from "../assets/images/man.png"
import { Camera, CameraResultType } from '@capacitor/camera';
import { MissingPersonContext } from "../contexts/MissingPersonProvider";
import { useHistory } from "react-router";



export const ReportMissingPerson = () => {

    /**
     *  [Contexts]------------------------------------------------ 
     * ------------------------------------------------------------
     */

    const { addMissingPerson } = useContext(MissingPersonContext)
    const history = useHistory()
    /**
     *  [useStates]------------------------------------------------ 
     * ------------------------------------------------------------
     */
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [lastSeen, setLastSeen] = useState("")
    const [isOpen, setIsOpen] = useState(false)


    /**
     *  [Functions]------------------------------------------------ 
     * ------------------------------------------------------------
     */

    const takePicture = async () => {
        const resImage = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        });

        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        const imageUrl = resImage.webPath!;
        console.log("🚀 ~ file: ReportMissingPerson.tsx ~ line 22 ~ takePicture ~ imageUrl", imageUrl)

        // Can be set to the src of an image now
        // imageElement.src = imageUrl;
        setImage(imageUrl)

    };


    const handleSubmit = () => {
        const data = {
            name,
            image,
            lastSeen,
            id: Math.random(),
            status: "missing"
        }

        if ((image && name && lastSeen) === "") {
            setIsOpen(true)
            return
        } else {
            history.push('/home')
            addMissingPerson(data)
        }
    }


    const style = {
        placeholderImage: {
            width: '250px',
            height: '250px',
            margin: 'auto'
        },
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


    const displayImage = () => {
        if (image === "") {
            return <div className="ion-text-center">
                <IonImg
                    src={Person}
                    style={style.placeholderImage}
                    onClick={takePicture}
                />
            </div>
        }
        else {
            return <div className="ion-text-center" style={style.imageContainer}>
                <IonImg
                    src={image}
                    style={style.uploadedImage}
                    onClick={takePicture}
                />
            </div>
        }
    }


    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton text="Home" color="secondary" />
                    </IonButtons>
                    <IonTitle color='secondary'>Add Missing Person</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-padding">

                <IonToast
                    isOpen={isOpen}
                    message="Complete the form and try again."
                    color='danger'
                    duration={3000}
                    position="top"
                    onDidDismiss={()=> setIsOpen(false)}
                />

                <section className="ion-margin-top">
                    <div className="ion-text-center ion-margin-vertical">
                        <small>click to upload image </small> <br />
                        <IonIcon icon={caretDown} color='secondary' size="large" />
                    </div>
                    {
                        displayImage()
                    }
                </section>

                <IonList>
                    <IonItem className="">
                        <IonLabel position="floating">Name</IonLabel>
                        <IonInput
                            type="text"
                            name="fullname"
                            placeholder="James Peterson"
                            onIonChange={e => setName(e.detail.value as string)}
                            value={name}
                            clearInput
                            autofocus
                            autoCapitalize=""
                            required
                        />
                    </IonItem>
                    <IonItem className="ion-padding-vertical">
                        <IonLabel position="floating">Last Seen</IonLabel>
                        <IonInput
                            type="text"
                            name="last_seen"
                            placeholder="Address"
                            onIonChange={e => setLastSeen(e.detail.value as string)}
                            value={lastSeen}
                            clearInput
                            required
                        />
                    </IonItem>
                    <section className="ion-text-center">
                        <IonButton expand="block" color='secondary' onClick={handleSubmit}>
                            <IonIcon icon={add} color='light' slot="start" />
                            Report this person missing
                        </IonButton>
                    </section>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default ReportMissingPerson