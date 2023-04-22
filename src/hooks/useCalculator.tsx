import {useRef, useState} from 'react';

enum Operators {
  addition,
  subtraction,
  multiplication,
  division,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');

  const lastOperator = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('');
  };

  const buildNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || numberText.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(numberText);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const deleteLastDigit = () => {
    let negative = '';
    let tempNumber = number;

    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(prev => prev.replace('-', ''));
    } else {
      setNumber(prev => '-' + prev);
    }
  };

  const changeNumberToPrevNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const handleDivision = () => {
    changeNumberToPrevNumber();
    lastOperator.current = Operators.division;
  };

  const handleMultiplication = () => {
    changeNumberToPrevNumber();
    lastOperator.current = Operators.multiplication;
  };

  const handleAddition = () => {
    changeNumberToPrevNumber();
    lastOperator.current = Operators.addition;
  };

  const handleSubtraction = () => {
    changeNumberToPrevNumber();
    lastOperator.current = Operators.subtraction;
  };

  const hanldeCalculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperator.current) {
      case Operators.addition:
        setNumber(`${num2 + num1}`);
        break;
      case Operators.subtraction:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiplication:
        setNumber(`${num2 * num1}`);
        break;
      case Operators.division:
        setNumber(`${num2 / num1}`);
        break;
      default:
        break;
    }

    setPrevNumber('0');
  };

  return {
    number,
    prevNumber,
    buildNumber,
    clean,
    deleteLastDigit,
    handleAddition,
    handleDivision,
    handleMultiplication,
    handleSubtraction,
    hanldeCalculate,
    positiveNegative,
  };
};
