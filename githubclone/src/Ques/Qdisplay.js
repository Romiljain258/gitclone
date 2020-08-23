import React from 'react';
import axios from 'axios';
import Pagination from './Pagination';

class Qdisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            isActive: false,
            currentPage: 1,
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/user/issues')
            .then(response => {
                this.setState({
                    arr: response.data,
                    isActive: true,
                })
            })
            .catch(err => err);
    }
    paginate = (number) => {
        this.setState({
            currentPage: number,
        })
    }
    render() {
        let { isActive, arr, currentPage } = this.state;

        const indexOfLastPost = currentPage * 10;
        const indexOfFirstPost = indexOfLastPost - 10;
        const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost);
        if (!isActive) {
            return <h3>Loading...</h3>;
        }
        else {
            return (
                <div className="hn">
                
                    <ul class="list">
                        {currentPosts.map(item => (
                            <li key={item.id} >
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 texttop">
                                        <a class="list-group-item list-group-item-action "
                                            id="">
                                         <a class="fas fa-exclamation-circle"></a>
                                            <span className="text1">{item.title}</span>
                                            <p className="text2">{item.description}</p>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Pagination postPerPage={10} totalPosts={arr.length} paginate={this.paginate} />
          
                </div>

            )

        }
    }
}
export default Qdisplay;