import useAmountInput from '@/hooks/useAmountInput';
import useFsm from '@/hooks/useFsm';
import { USD } from '@dinero.js/currencies';
import { add, dinero, greaterThan, toDecimal } from 'dinero.js';
import { useState } from 'react';
import { useImmer } from 'use-immer';
import { FsmStep } from '../hooks/useFsm';
import AmountInput from './AmountInput';
import Navigation from './Navigation';
import Plate from './Plate';
import SplitSelector from './SplitSelector';
import Taxes from './Taxes';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export type SplitBill = Array<{
  id: string;
  items: Array<unknown>;
}>;

const cardContent: Record<FsmStep, { title: string; subtitle?: string }> = {
  PLATES: { title: 'How many people?', subtitle: '' },
  SUBTOTAL: { title: 'Subtotal', subtitle: 'Before tax & tip' },
  TAXES: { title: 'Bill tax', subtitle: '' },
  SPLIT: { title: 'Enter bill items', subtitle: '' },
};

function App() {
  const fsmState = useFsm();
  const { currentStep } = fsmState;

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
  const totalAmountState = useAmountInput();
  const billItem = useAmountInput();

  const pretaxVal = dinero({
    amount: pretaxState[0].floatValue ?? 0,
    currency: USD,
  });

  const taxVal = dinero({
    amount: taxState[0].floatValue ?? 0,
    currency: USD,
  });

  const total = add(pretaxVal, taxVal);
  const zero = dinero({ amount: 0, currency: USD });

  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="mt-6 grid w-full auto-rows-min grid-cols-3 gap-6 px-4">
        <div className="col-span-3">
          <h1 className="text-center text-5xl font-bold tracking-tight">
            Bill Splitter
          </h1>
        </div>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>{cardContent[currentStep].title}</CardTitle>
            <CardDescription>
              {cardContent[currentStep]?.subtitle || ''}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="col-span-1 flex flex-col gap-4">
              {currentStep === 'PLATES' && (
                <>
                  <SplitSelector numBills={bills.length} setBills={setBills} />

                  <Navigation canProgress fsmState={fsmState} />
                </>
              )}

              {currentStep === 'SUBTOTAL' && (
                <>
                  <AmountInput name="preTaxAmount" state={pretaxState} />

                  <Navigation
                    canProgress={greaterThan(pretaxVal, zero)}
                    fsmState={fsmState}
                  />
                </>
              )}

              {currentStep === 'TAXES' && (
                <>
                  <Taxes
                    taxState={taxState}
                    totalAmountState={totalAmountState}
                  />

                  <Navigation
                    canProgress={greaterThan(taxVal, zero)}
                    fsmState={fsmState}
                  />
                </>
              )}

              {currentStep === 'SPLIT' && (
                <>
                  <AmountInput name="billItem" state={billItem} />

                  <Navigation canProgress fsmState={fsmState} />
                </>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <div>
              <h1 className="text-sm">Total</h1>
              <p className="text-xl font-semibold">${toDecimal(total)}</p>
            </div>
          </CardFooter>
        </Card>

        <div className="col-span-2 flex max-w-4xl flex-wrap justify-center gap-4">
          {bills.map(({ id, items }, i) => {
            return (
              <Plate
                key={id}
                number={i + 1}
                selected={id === selectedPlate}
                items={items}
                onClick={() => setSelectedPlate(id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
