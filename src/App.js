import React from 'react';
import { sum, square } from './math';
import Hello from './Hello'
import CashVoutcher from './CashVoucher';

const App = () => (
    <div>
        <Hello />
        <p>{`sum 3 + 5 = ${sum(3, 5)} and square of 2 = ${square(2)}`}</p>
        <CashVoutcher />
    </div>
)

export default App;
