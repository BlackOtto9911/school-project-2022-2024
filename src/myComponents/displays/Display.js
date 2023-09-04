import { Route, Routes, HashRouter as Router } from 'react-router-dom';

import './Display.css';
import GreetingDisplay from './GreetingDisplay/GreetingDisplay';
import SubjectDisplay from './SubjectDisplay/SubjectDisplay';

function Display() {
  return (
    <div className="display">
      <Router>
        <Routes>
          <Route path='/' element={<GreetingDisplay MainColor='#00CECB'></GreetingDisplay>}></Route>
          <Route path='/subject/based-math' element={<SubjectDisplay SubjectName='Базовая математика' MainColor='#00CECB'></SubjectDisplay>}></Route>
          <Route path='/subject/advanced-math' element={<SubjectDisplay SubjectName='Профильная математика' MainColor='#00A09E'></SubjectDisplay>}></Route>
          <Route path='/subject/physics' element={<SubjectDisplay SubjectName='Физика' MainColor='#FFDA15'></SubjectDisplay>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Display;
