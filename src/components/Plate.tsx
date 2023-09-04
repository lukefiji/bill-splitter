import clsxMerge from '@/utils/clsxMerge';

interface Props {
  number: number;
  selected: boolean;
}

const Plate = ({ number, selected }: Props) => {
  return (
    <div
      className={clsxMerge([
        'h-32 w-32 rounded-full border-2 border-slate-300 bg-slate-100 p-5',
        'shadow-md',
        'flex',
        selected && 'border-black',
      ])}
    >
      <div
        className={clsxMerge([
          'grow rounded-full border-[1px] border-slate-200',
          // 'shadow-inner',
          'shadow-[inset_-2px_2px_4px_rgba(0,0,0,0.1),inset_3px_-3px_4px_rgba(255,255,255,0.5)]',
          'flex items-center justify-center',
          selected && 'border-black',
        ])}
      >
        <div>Check {number}</div>
      </div>
    </div>
  );
};

export default Plate;
