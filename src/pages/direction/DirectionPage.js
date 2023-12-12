import React, {useState} from 'react';

import Table from './components/Table/DirectionTable';
import GetForm from './components/Form/DirectionGetForm';


function ClonesPage() {

  const [value, setValue] = useState([]);

  const handleChange = (value) => {
    setValue(value);
  }



  return (
    <>
    <div>
      <main><Table value={value}/></main>
      <aside><GetForm onChange={handleChange}/></aside>
      <main className='container'>
      </main>
    </div>
    
    </>
  );
}

export default ClonesPage;
