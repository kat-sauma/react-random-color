import React from 'react';
import PropTypes from 'prop-types';

function Display({ color }) {
    
    return (
        <ul aria-label='color' style = {{ height: 200, width: 200, backgroundColor: color, boxShadow: '1px 3px 1px #9E9E9E' }} >
        </ul>
    )
}

Display.propTypes = {
    color: PropTypes.string.isRequired
};

export default Display;
