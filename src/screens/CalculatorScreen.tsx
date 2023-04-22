import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appThme';
import {ButtonCalc, ButtonType} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.buttonRow}>
        <ButtonCalc text="C" color={ButtonType.light} action={clean} />
        <ButtonCalc
          text="+/-"
          color={ButtonType.light}
          action={positiveNegative}
        />
        <ButtonCalc
          text="del"
          color={ButtonType.light}
          action={deleteLastDigit}
        />
        <ButtonCalc
          text="/"
          color={ButtonType.orange}
          action={handleDivision}
        />
      </View>
      <View style={styles.buttonRow}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc
          text="x"
          color={ButtonType.orange}
          action={handleMultiplication}
        />
      </View>
      <View style={styles.buttonRow}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc
          text="-"
          color={ButtonType.orange}
          action={handleSubtraction}
        />
      </View>
      <View style={styles.buttonRow}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc
          text="+"
          color={ButtonType.orange}
          action={handleAddition}
        />
      </View>
      <View style={styles.buttonRow}>
        <ButtonCalc text="0" width={true} action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc
          text="="
          color={ButtonType.orange}
          action={hanldeCalculate}
        />
      </View>
    </View>
  );
};
