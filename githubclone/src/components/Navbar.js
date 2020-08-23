import React from 'react';
import Qdisplay from '../Ques/Qdisplay';
class Navbar extends React.Component {
    click() {
        this.props.history.push('/addQ');
    }
    render() {
        return (
<div>
<div class="card-body">
<i class="fas fa-handshake">
    <span class="card-title">Want to contribute to twbs/bootstrap?</span></i>
    <div class="card-text">If you have a bug or an idea, read the <span ><a href="https://github.com/twbs/bootstrap/blob/main/.github/CONTRIBUTING.md">contributing guidelines</a></span> before <p>
    opening an issue</p>.</div>
  </div>
            <div className="container ">
                <nav class="navbar navbar-expand-sm navbar-light bg-light">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div>

                        <ul class="navbar-nav">

                            <button class="btn" type="submit">filters</button>
                            <form class="form-inline">
                                <input class="btn search1" type="search" placeholder="Search" />
                            </form>
                            <button class="btn">Labels</button>
                            <button class="btn">Milestones</button>
                            <div className="m3">
                            <button class="btn bg-success m " type="submit" onClick={() => {
                                this.click();
                            }}>
                                New issue</button>
                                </div>
                        </ul>


                    </div>
                </nav>
                <Qdisplay />
            </div>
            </div>
        )
    }
}
export default Navbar;