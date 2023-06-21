import { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import TableUser from './Components/TableUser';
import { fetchApiUser } from './services/UserService';
import { Container } from 'react-bootstrap';

function App() {
  const [list, setList] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [totalUsers, setTotalUsers] = useState(0)
  useEffect(() => {
    getAllUser(1)
  }, [])

  const getAllUser = async (page) => {
    let res = await fetchApiUser(page)
    console.log('>>> Check api: ', res);
    if (res && res.data) {
      setList(res.data)
      setTotalPages(res.total_pages)
      setTotalUsers(res.total)
    }
  }
  return (
    <div className='app-container'>
      <Header />
      <Container>
        <TableUser
          list={list}
          totalPages={totalPages}
          totalUsers={totalUsers}
          getAllUser={(page) => getAllUser(page)}
        /></Container>
    </div>
  );
}

export default App;
