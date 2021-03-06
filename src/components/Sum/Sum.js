import React from 'react';
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import CalculatorService from '../../services/CalculatorService';

const Sum = () => {
  async function fetchResult(firstNumber, secondNumber) {
    return await CalculatorService.sum(firstNumber, secondNumber);
  };

  return <CalculatorResult title="Sum" fetchResult={fetchResult} />
};

export default Sum;
