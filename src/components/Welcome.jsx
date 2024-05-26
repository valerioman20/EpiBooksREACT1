import React from 'react';
import { Alert } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div>

            <Alert className="my-3" variant="info">
                Benvenuto nella nostra applicazione!
            </Alert>
            <div class="container-fluid">
                <h1>EpiBooks</h1>
            </div>
        </div>
    );
}

export default Welcome;
