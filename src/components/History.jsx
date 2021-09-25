import React from 'react';
import { useHistory } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';

const HomeButton = () => {
    const history = useHistory();

    const handleClick = () => {
        //history.push("/Home");
        history.goBack();
    }

    return (
        <div className="icons">
            <GiReturnArrow
                className="left--icons mb-3" 
                onClick={handleClick} 
                title="Allez sur la page d'acceuil"
            />
        </div>
    );
}
export default HomeButton;
