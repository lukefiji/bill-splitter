import { Input } from '@/components/ui/input';
import { UseAmountInputReturn } from '@/hooks/useAmountInput';
import { useRef } from 'react';
import { NumberFormatBase, OnValueChange } from 'react-number-format';

const format = (numStr: unknown) => {
  if (numStr === '') return '';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(Number(numStr) / 100);
};

interface Props {
  label: string;
  name: string;
  state: UseAmountInputReturn;
}

const AmountInput = ({ label, name, state }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [valuesObj, setValuesObj] = state;

  const onValueChange: OnValueChange = (values) => {
    setValuesObj(values);

    if (inputRef?.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(999, 999);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor={name} className="text-sm">
          {label}
        </label>

        <NumberFormatBase
          type="text"
          id={name}
          name={name}
          format={format}
          onValueChange={onValueChange}
          getInputRef={inputRef}
          customInput={Input}
          value={valuesObj.value}
          valueIsNumericString
        />
      </div>
    </div>
  );
};

export default AmountInput;
