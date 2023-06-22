import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import { fetchApiUser } from '../services/UserService';

const TableUser = (props) => {
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

    console.log(totalPages);
    const handlePageClick = (event) => {
        console.log('>>>Check event: ', event.selected);
        getAllUser(event.selected + 1)
    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>

                    </tr>
                </thead>
                <tbody>
                    {list && list.length > 0 && list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={(event) => handlePageClick(event)}
                pageRangeDisplayed={1}
                marginPagesDisplayed={3}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default TableUser