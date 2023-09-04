import clsxMerge from '@/utils/clsxMerge';
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
      <button
        onClick={handleRemove}
        className={clsxMerge([
          'rounded-full border-2 border-solid border-slate-800',
          'h-12 w-12',
        ])}
      >
        -
      </button>
      <button
        onClick={handleAdd}
        className={clsxMerge([
          'rounded-full border-2 border-solid border-slate-800',
          'h-12 w-12',
        ])}
      >
        +
      </button>
    </div>
  );
};

export default SplitSelector;
