import './App.css';
import Address from "./Component/Profil/Address"
import FullName from './Component/Profil/FullName'
import ProfilPhoto from './Component/Profil/ProfilPhoto';

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
