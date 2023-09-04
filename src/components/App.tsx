import { useImmer } from 'use-immer';
import Plate from './Plate';
import SplitSelector from './SplitSelector';

export type SplitBill = Array<{
  id: string;
  items: Array<unknown>;
}>;

function App() {
  const [bills, setBills] = useImmer<SplitBill>([
    {
      id: 'id_' + Math.random(),
      items: [],
    },
    {
      id: 'id_' + Math.random(),
      items: [],
    },
  ]);

  return (
    <div className="flex min-h-screen w-full">
      <div className="mx-auto mt-6 flex flex-col content-center gap-2">
        <h1 className="text-center text-2xl font-bold">Bill Splitter</h1>
        <SplitSelector setBills={setBills} />
        <p className="text-center">Splitters: {bills.length}</p>

        <div className="flex flex-wrap justify-center gap-4">
          {bills.map(({ id }, i) => (
            <Plate key={id} number={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
