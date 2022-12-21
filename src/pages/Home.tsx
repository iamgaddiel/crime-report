import { CrimeList } from './../components/CrimeList';
import { useState } from 'react';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Home.css';
import { add, book, person } from 'ionicons/icons';
import Person from '../assets/images/no_match_illustration_v3_darkmode.svg'
import MissingPeopleList from './MissingPeopleLIst';


const Home: React.FC = () => {
  const [option, setOption] = useState("crimes")

  const displayOptions = () => {
    switch (option) {
      case "crimes":
        return <CrimeList Person={Person} />
      case "missing_people":
        return <MissingPeopleList Person={Person} />
    }
  }

  return (
    <IonPage id="home-page">
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonTitle color='secondary'>Crime Report App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='ion-padding'>

        <IonFab vertical='bottom' horizontal='end'>
          <IonFabButton color="secondary">
            <IonIcon icon={add} color='light' />
          </IonFabButton>
          <IonFabList side='top' color='primary'>
            {/* Report  A missing Person */}
            <IonFabButton color="secondary" routerDirection='forward' routerLink='/add/person/'>
              <IonIcon icon={person} color='light' />
            </IonFabButton>
            <IonFabButton color="secondary" routerDirection='forward' routerLink='/add/crime'>
              <IonIcon icon={book} color='light' />
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <section className='ion-padding'>
          <IonSegment value={option} onIonChange={e => setOption(e.detail.value as string)}>
            <IonSegmentButton color='secondary' value='crimes' >Crimes</IonSegmentButton>
            <IonSegmentButton color='secondary' value='missing_people'>Missing People </IonSegmentButton>
          </IonSegment>
        </section>

        {
          displayOptions()
        }

      </IonContent>
    </IonPage>
  );
};

export default Home;
