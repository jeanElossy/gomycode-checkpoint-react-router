import React from 'react';
import { useHistory } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const HomeButton = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <div>
            <HiArrowLeft className="left--icons mb-3" onClick={handleClick} />
        </div>
    );
}
export default HomeButton;

// <router-link :to="{name: 'landing'}" tag="li" exact v-on:click.native="close()">Home</router-link>