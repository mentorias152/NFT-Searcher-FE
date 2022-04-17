import React from 'react';
import { Card } from 'zmp-framework/react';
import tempImage from '../static/icons/512x512.png';

const ResultItems = () => {
    const items = [
        { id: '1', name: 'temp', description: 'This is temp ', data: tempImage, collection: 'TEMP', owner: 'someone who is temp', price: 10000 },
        { id: '2', name: 'temp', description: 'This is temp ', data: tempImage, collection: 'TEMP', owner: 'someone who is temp', price: 10000 }

    ];
    return (
        <div>
            {items.map(item =>
                <Card inset key={item.id}>
                    <h2
                        style={{
                            textAlign: 'center',
                            border: '20px 10px 0px 10px'
                        }}>
                        {item.name}
                    </h2>
                    <hr></hr>
                    <div
                        style={{
                            display: 'flex',
                            flexAlign: 'row',

                        }}
                    >
                        <img src={item.data}
                            style={{
                                width: '50%',
                            }} />
                        <div
                            style={{
                                padding: '10px',
                                width: '50%',
                                height: '80%'
                            }}>
                            <Card title='Details'
                            >
                                <hr></hr>
                                <p style={{
                                    fontSize: '30px '
                                }}>${item.price}</p>
                                <p>{item.description}</p>
                                <p>{item.collection}</p>
                                <p>Owner: {item.owner}</p>
                            </Card>
                        </div>
                    </div>
                </Card>)}
        </div>
    );
}

export default ResultItems;