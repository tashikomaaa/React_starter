# styled-components

for use styled components use the example structure

```js
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

export default styled(Home)`
    margin: 1rem;
`;
```

don't forget to implement the `className` in the propTypes of your component
and give it to the first element the `className={className}`