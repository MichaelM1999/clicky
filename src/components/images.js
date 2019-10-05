import React, { Component} from 'react';
import PropTypes from 'prop-types';

const Food = props => {

        return (
            <div className="pointer" onClick={props.onClick}>
                <img data-amount={props.amount} src={props.src} alt={props.alt} />
            </div>
        );
}

Food.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

Food.defaultProps = {
    onClick: () => {},
    active: false
}

export default Food;