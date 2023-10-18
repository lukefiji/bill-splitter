import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
import { Updater } from 'use-immer';
import { SplitBill } from './App';

interface Props {
  numBills: number;
  setBills: Updater<SplitBill>;
}

const SplitSelector = ({ numBills, setBills }: Props) => {
  const handleAdd = useCallback(() => {
    setBills((draft) => {
      draft.push({
        id: 'id_' + Math.random(),
        items: [],
      });
    });
  }, [setBills]);

  const handleRemove = useCallback(() => {
    setBills((draft) => {
      if (draft.length > 2) {
        draft.pop();
      }
    });
  }, [setBills]);

  return (
    <div className="flex items-center justify-center gap-6">
      <Button onClick={handleRemove} variant="outline">
        -
      </Button>
      <p className="w-15 text-center text-6xl font-semibold">{numBills}</p>
      <Button onClick={handleAdd} variant="outline">
        +
      </Button>
    </div>
  );
};

export default SplitSelector;
