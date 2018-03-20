import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Home = ({ className }) => (
    <div className={className}>
        <p>HOME</p>
    </div>
)

Home.propTypes = {
    className: PropTypes.string,
};

export default styled(Home) `
    margin: 1rem;
`;