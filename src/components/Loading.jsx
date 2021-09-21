import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ spinningBubbles, blue }) => {
    
    return (
        <div className="loader">
            <ReactLoading 
                type={'spinningBubbles'} 
                color={'blue'} 
                height={150} 
                width={80} 
            />
        </div>
    );
}
export default Loading;


// import React from 'react';
// import ReactLoading from 'react-loading';

// const Example = ({ type, color }) => (
//     <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
// );

// export 

// Loading Types
// blank
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes