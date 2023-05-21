import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";
import './badge.scss';

const Badge = ({size, className, category, ...props}) => {
    return (
        <span className={classNames('badge', className,
            {
                'badge--small': size === 'small',
                'badge--big': size === 'big',
                'badge--blue': category === 'travel',
                'badge--red': category === 'science',
                'badge--green': category === 'lifestyle',
                'badge--yellow': category === 'business',
                'badge--purple': category === 'sport',
                'badge--orange': category === 'economy',
            }
        )} {...props}>
        {props.children}

        </span>
    )
}

export default Badge;

Badge.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
}



