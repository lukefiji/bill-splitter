import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
import { Updater } from 'use-immer';
import { SplitBill } from './App';

interface Props {
  setBills: Updater<SplitBill>;
}

const SplitSelector = ({ setBills }: Props) => {
  const handleAdd = useCallback(() => {
    setBills((draft) => {
      draft.push({
        id: 'id_' + Math.random(),
        items: [],
      });
    });
  }, []);

  const handleRemove = useCallback(() => {
    setBills((draft) => {
      if (draft.length > 2) {
        draft.pop();
      }
    });
  }, []);

  return (
    <div className="flex justify-center gap-4">
      <Button onClick={handleRemove} variant="outline">
        -
      </Button>
      <Button onClick={handleAdd} variant="outline">
        +
      </Button>
    </div>
  );
};

export default SplitSelector;
