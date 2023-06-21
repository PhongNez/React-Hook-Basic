import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';

const TableUser = (props) => {
    let { list, totalPages } = props
    console.log(totalPages);
    const handlePageClick = (event) => {
        console.log('>>>Check event: ', event.selected);
        props.getAllUser(event.selected + 1)
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