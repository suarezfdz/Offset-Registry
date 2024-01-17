import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import { Pagination } from 'react-bootstrap';
import Layout from './Layout';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by offset project name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(e.target.value);
              }
            }}
        />
        <button className="btn samso-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

const DetailsPane = ({ selectedItem, isOpen, onClose }) => {
  if (!selectedItem || !isOpen) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Details for Item {selectedItem.id}</h5>
        <p className="card-text">Name: {selectedItem.name}</p>
        {/* Add more details as needed */}
        <button className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

function ListPage() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDetailsPaneOpen, setIsDetailsPaneOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();
  const maxPagesToShow = 4;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const apiHost = 'https://offset-registry.vercel.app'; // Use the environment variable or a default value
//        const apiHost = process.env.SERVER_API_HOST || 'http://localhost:5000'; // Use the environment variable or a default value
        console.log(`The apiHost is ${apiHost}`)
        const response = await fetch(
          `${apiHost}/api/offsets?page=${currentPage}&pageSize=${pageSize}&search=${searchTerm}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setItems(data);

        // Extract total count from the response headers
        const totalCount = parseInt(response.headers.get('X-Total-Count'), 10);
//        const totalCount = parseInt(response.headers.get('x-total-count'), 10);
        console.log(response.headers.get('Content-Type'));

        console.log(response.headers)
        console.log(totalCount)
        console.log(response.headers.get('X-Total-Count'))
        const calculatedTotalPages = Math.ceil(totalCount / pageSize);
        setTotalPages(calculatedTotalPages);
        console.log(Math.ceil(totalCount / pageSize))

        // Reset selected item when fetching new items
        setSelectedItem(null);
        setIsDetailsPaneOpen(false);

      } catch (error) {
        console.error('Error fetching items', error);
      }
    };

    fetchItems();
  }, [currentPage, pageSize, searchTerm]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsDetailsPaneOpen(true);
    };

    const handleCloseDetailsPane = () => {
        setIsDetailsPaneOpen(false);
    };

    const handleSearch = (term) => {
      setSearchTerm(term);
      setCurrentPage(1); // Reset to the first page when searching
//      navigate(`/list?page=1`);
    };

    const renderPaginationItems = () => {
        const paginationItems = [];
        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (startPage > 1) {
          paginationItems.push(
            <Pagination.Ellipsis key="ellipsis-start" disabled />
          );
        }

        for (let page = startPage; page <= endPage; page++) {
          paginationItems.push(
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Pagination.Item>
          );
        }

        if (endPage < totalPages) {
          paginationItems.push(
            <Pagination.Ellipsis key="ellipsis-end" disabled />
          );
        }

        return paginationItems;
    };

  const handleNextGroup = () => {
    const nextGroupPage = Math.min(currentPage + maxPagesToShow, totalPages);
    setCurrentPage(nextGroupPage);
  };

  const handlePrevGroup = () => {
    const prevGroupPage = Math.max(currentPage - maxPagesToShow, 1);
    setCurrentPage(prevGroupPage);
  };

  return (
     <Layout
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevGroup={handlePrevGroup}
          handleNextGroup={handleNextGroup}
          renderPaginationItems={renderPaginationItems}
          setCurrentPage={setCurrentPage}
          path={['Home']}
        >
        <div className="col-md-12">
            <Search onSearch={handleSearch} />

            <div className="row">

                <div className="mt-4">

                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                          />

                        {renderPaginationItems()}
                    <Pagination.Next
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    />
                    <Pagination.Last />
                    </Pagination>

                </div>
            </div>


            <table className="table table-hover" style={{ '--bs-table-bg': '#15302600', '--bs-table-color': 'white'  }}>
                <thead>
                 <tr>
                   <th>Project Name</th>
                   {/*<th>Name</th>*/}
                 </tr>
                </thead>
                <tbody>
                 {items.map(item => (
                   <tr
                     key={item.id}
                     onClick={() => handleItemClick(item)}
                     className={selectedItem && selectedItem.id === item.id ? 'table-primary' : ''}
                   >
                     {/*<td>{item["Project ID"]}</td>*/}
                     <td><Link to={`/details/${item.id}`}>{item["projectname"]}</Link></td>
                   </tr>
                 ))}
                </tbody>
            </table>
        </div>
     </Layout>
  );
}

export default ListPage;
