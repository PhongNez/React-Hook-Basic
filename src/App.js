import { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import TableUser from './Components/TableUser';
import { Container } from 'react-bootstrap';
import ModalAddNewUser from './Components/ModalAddNew';

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
  const handleClose = () => {
    setIsShowModalAddNew(false)
  }
  return (
    <div className='app-container'>
      <Header />

      <Container>
        <div className='my-3 add-new'>
          <span><b>List User:</b></span>
          <button className='btn btn-success' onClick={() => setIsShowModalAddNew(true)}>Add New User</button>
        </div>
        <TableUser />
      </Container>
      <ModalAddNewUser
        show={isShowModalAddNew}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
