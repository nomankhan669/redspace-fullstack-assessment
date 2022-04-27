import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import { PageNotFound } from './PageNotFound';
import PersonDetails from './PersonDetails/PersonDetails';

export const characters = [
  { name: 'Luke Skywalker', id: 1, icon: 'luke-skywalker.svg' },
  { name: 'C-3PO', id: 2, icon: 'c3p0.svg' },
  { name: 'R2-D2', id: 3, icon: 'r2d2.svg'  },
  { name: 'Darth Vader', id: 4, icon: 'darth-vader.svg' },
  { name: 'Leia Organa', id: 5, icon: 'princess-leia.svg' },
  { name: 'Chewbacca', id: 13, icon: 'chewbacca.svg' },
  { name: 'Han Solo', id: 14, icon: 'han-solo.svg' },
  { name: 'Greedo', id: 15, icon: 'greedo.svg' },
  { name: 'Obi-Wan Kenobi', id: 10, icon: 'obiwan-kenobi.svg' },
  { name: 'Jabba Desilijic Tiure', id: 16, icon: 'jabba-the-hutt.svg' },
  { name: 'Palpatine', id: 21, icon: 'emperor-palpatine.svg' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home characters={characters} />}></Route>
        <Route path='/person-details/:id' element={<PersonDetails />}></Route>
        <Route path='/person-details/' element={<Navigate replace to="/" />}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
