import { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import TableUser from './Components/TableUser';
import { Container } from 'react-bootstrap';
import ModalAddNewUser from './Components/ModalAddNew';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
  const [isShowModalEdit, setIsShowModalEdit] = useState(false)
  const handleClose = () => {
    setIsShowModalAddNew(false)
  }
  const handleAddnew = (name, job) => {
    console.log('Hello Phong Add new công việc: ', job);
  }
  return (
    <>
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
          title={'Modal add new user'}
          handleSave={(name, job) => handleAddnew(name, job)}
        />

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>

  );
}

export default App;
