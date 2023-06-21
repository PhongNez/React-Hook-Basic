import { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import TableUser from './Components/TableUser';
import { fetchApiUser } from './services/UserService';
import { Container } from 'react-bootstrap';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    getAllUser()
  }, [])

  const getAllUser = async () => {
    let res = await fetchApiUser()
    console.log('>>> Check api: ', res);
    if (res && res.data) {
      setList(res.data.data)
    }
  }
  return (
    <div className='app-container'>
      <Header />
      <Container>
        <TableUser
          list={list}
        /></Container>
    </div>
  );
}

export default App;
