import { useState } from 'react';
import { NumberFormatValues } from 'react-number-format';

export type UseAmountInputReturn = [
  NumberFormatValues,
  React.Dispatch<React.SetStateAction<NumberFormatValues>>,
];

function useAmountInput() {
  const state = useState<NumberFormatValues>({
    formattedValue: '',
    value: '',
    floatValue: 0,
  });

  return state;
}

export default useAmountInput;
