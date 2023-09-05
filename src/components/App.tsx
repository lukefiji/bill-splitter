import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useAmountInput from '@/hooks/useAmountInput';
import { useState } from 'react';
import { useImmer } from 'use-immer';
import AmountInput from './AmountInput';
import Plate from './Plate';
import SplitSelector from './SplitSelector';

import { USD } from '@dinero.js/currencies';
import { add, dinero, toDecimal } from 'dinero.js';

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

  const [selectedPlate, setSelectedPlate] = useState<string | null>(null);

  const pretaxState = useAmountInput();
  const taxState = useAmountInput();

  const pretaxVal = dinero({
    amount: pretaxState[0].floatValue ?? 0,
    currency: USD,
  });
  const taxVal = dinero({
    amount: taxState[0].floatValue ?? 0,
    currency: USD,
  });

  const total = add(pretaxVal, taxVal);

  return (
    <div className="flex min-h-screen w-full">
      <div className="mx-auto mt-6 flex flex-col content-center gap-4">
        <h1 className="text-center text-5xl font-bold tracking-tight">
          Bill Splitter
        </h1>

        <SplitSelector setBills={setBills} />

        <p className="text-center">Splitters: {bills.length}</p>

        <div className="flex max-w-4xl flex-wrap justify-center gap-4">
          {bills.map(({ id }, i) => (
            <Plate
              key={id}
              number={i + 1}
              selected={id === selectedPlate}
              onClick={() => setSelectedPlate(id)}
            />
          ))}
        </div>

        <AmountInput
          label="Pre-tax amount"
          name="preTaxAmount"
          state={pretaxState}
        />

        <Tabs defaultValue="taxAmount">
          <TabsList>
            <TabsTrigger value="taxAmount">Tax Amount</TabsTrigger>
            <TabsTrigger value="totalAmount">Total Amount</TabsTrigger>
          </TabsList>
          <TabsContent value="taxAmount">
            <AmountInput label="Tax amount" name="taxAmount" state={taxState} />
          </TabsContent>
          <TabsContent value="totalAmount">
            <AmountInput
              label="Total amount"
              name="totalAmount"
              state={taxState}
            />
          </TabsContent>
        </Tabs>

        <div>
          <h1 className="text-sm">Total</h1>
          <p className="text-xl font-semibold">${toDecimal(total)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
