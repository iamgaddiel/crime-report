import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CrimeContextProvider, { CrimeContext } from './contexts/CrimeContextProvider';
import MissingPersonProvider from './contexts/MissingPersonProvider';
import MissingPersonDetail from './pages/MissingPersonDetail';
import ReportMissingPerson from './pages/ReportMissingPerson';
import ReportCrime from './pages/ReportCrime';
import CrimeDetail from './pages/CrimeDetail';

setupIonicReact();

const App: React.FC = () => (
  <CrimeContextProvider>
    <MissingPersonProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact={true}>
              <Home />
            </Route>
            <Route path="/person/:id">
              <MissingPersonDetail />
            </Route>
            <Route path="/crime/:id">
              <CrimeDetail />
            </Route>
            <Route path="/add/person/">
              <ReportMissingPerson />
            </Route>
            <Route path="/add/crime/">
              <ReportCrime />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </MissingPersonProvider>
  </CrimeContextProvider>
);

export default App;
