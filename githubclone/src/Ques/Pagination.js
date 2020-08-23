import React from 'react';

class Pagination extends React.Component {
    render() {
        let { postPerPage, totalPosts, paginate } = this.props;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
              <ul className="list list1">
                    {pageNumbers.map(number => (
                        <li key={number.id} className="page-item">
                            <a className="page-link" onClick={() =>
                                paginate(number)
                            }>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
};
export default Pagination;