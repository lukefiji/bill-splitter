import { cn } from '@/utils';

const colorClasses = [
  {
    outer: {
      default: 'border-slate-300 bg-slate-100',
      selected: 'border-slate-500 bg-slate-200',
    },
    inner: {
      default: 'border-slate-20',
      selected: 'border-slate-400',
    },
  },
  {
    outer: {
      default: 'border-sky-300 bg-sky-100',
      selected: 'border-sky-500 bg-sky-200',
    },
    inner: {
      default: 'border-sky-20',
      selected: 'border-sky-400',
    },
  },
  {
    outer: {
      default: 'border-purple-300 bg-purple-100',
      selected: 'border-purple-500 bg-purple-200',
    },
    inner: {
      default: 'border-purple-20',
      selected: 'border-purple-400',
    },
  },
  {
    outer: {
      default: 'border-teal-300 bg-teal-100',
      selected: 'border-teal-500 bg-teal-200',
    },
    inner: {
      default: 'border-teal-20',
      selected: 'border-teal-400',
    },
  },

  {
    outer: {
      default: 'border-orange-300 bg-orange-100',
      selected: 'border-orange-500 bg-orange-200',
    },
    inner: {
      default: 'border-orange-20',
      selected: 'border-orange-400',
    },
  },
  {
    outer: {
      default: 'border-indigo-300 bg-indigo-100',
      selected: 'border-indigo-500 bg-indigo-200',
    },
    inner: {
      default: 'border-indigo-20',
      selected: 'border-indigo-400',
    },
  },
  {
    outer: {
      default: 'border-rose-300 bg-rose-100',
      selected: 'border-rose-500 bg-rose-200',
    },
    inner: {
      default: 'border-rose-20',
      selected: 'border-rose-400',
    },
  },
  {
    outer: {
      default: 'border-lime-300 bg-lime-100',
      selected: 'border-lime-500 bg-lime-200',
    },
    inner: {
      default: 'border-lime-20',
      selected: 'border-lime-400',
    },
  },
];

interface Props {
  number: number;
  selected: boolean;
  onClick: VoidFunction;
  items: Array<unknown>;
}

const Plate = ({ number, selected, onClick, items = [] }: Props) => {
  const colorIdx = (number - 1) % colorClasses.length;
  return (
    <div
      onClick={onClick}
      className={cn([
        'flex h-32 w-32 rounded-full border-2 p-5',
        'cursor-pointer',
        'shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.5),inset_1px_-1px_1px_rgba(0,0,0,0.1)]',
        colorClasses[colorIdx].outer.default,
        selected && colorClasses[colorIdx].outer.selected,
      ])}
    >
      <div
        className={cn([
          'grow rounded-full border-[1px]',
          'shadow-[inset_-2px_2px_4px_rgba(0,0,0,0.1),inset_3px_-3px_4px_rgba(255,255,255,0.5)]',
          'flex flex-col items-center justify-center',
          colorClasses[colorIdx].inner.default,
          selected && colorClasses[colorIdx].inner.selected,
        ])}
      >
        <div>Person {number}</div>
        <div>{items.length}</div>
      </div>
    </div>
  );
};

export default Plate;
