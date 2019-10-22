import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';

import '../../components/app/App.css';

class LoadingRoute extends Component {
    render() {
        return (
            <div className='app'>
                <ClipLoader size={100} color={'#6BA87B'}/>
            </div>
        );
    }
}

export default LoadingRoute
