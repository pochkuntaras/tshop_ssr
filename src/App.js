import React from 'react';
import PropTypes from 'prop-types';
import { sum, square } from './math';
import CashVoutcher from './CashVoucher';

const App = ({children}) => (
    <div>
        {children}
        <p>{`sum 3 + 5 = ${sum(3, 5)} and square of 2 = ${square(2)}`}</p>
        <CashVoutcher />
    </div>
);

App.propTypes = {
    children: PropTypes.node
};

export default App;
