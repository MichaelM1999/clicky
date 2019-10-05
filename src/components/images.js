import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Food extends Component {
    render() {
        const { onClick, src, alt, amount } = this.props;

        return (
            <div className="pointer" onClick={() => onClick(alt, amount)}>
                <img src={src} alt={alt} />
            </div>
        );
    }
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