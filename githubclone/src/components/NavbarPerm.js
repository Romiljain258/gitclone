import React from 'react';
import Qdisplay from '../Ques/Qdisplay';
class NavbarPerm extends React.Component {
    render() {
        return (
<div>
            <div>
                <nav class="navbar navbar-expand-sm navbar bgNav">
                    <a class="navbar-brand">
                        <img class="font-align-center" src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-512.png" width="30" height="30" alt="iamhe" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div>

                        <ul class="navbar-nav">
                            <form class="form-inline">
                                <input class="btn search1 input" type="search" placeholder="Search" />
                            </form>
                            <button class="btn navcol">Pull requests</button>
                            <button class="btn navcol">Issues</button>
                            <button class="btn navcol">Marketplace</button>
                            <button class="btn navcol">Explore</button>
                        </ul>


                    </div>
                </nav>
                
            </div>

</div>
         
        )
    }
}
export default NavbarPerm;