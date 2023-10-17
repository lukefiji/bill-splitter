import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UseAmountInputReturn } from '@/hooks/useAmountInput';
import { useState } from 'react';
import AmountInput from './AmountInput';

interface Props {
  taxState: UseAmountInputReturn;
  totalAmountState: UseAmountInputReturn;
}

const Taxes = ({ taxState, totalAmountState }: Props) => {
  const [tab, setTab] = useState<string>('taxAmount');

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <TabsList>
        <TabsTrigger value="taxAmount">Bill Tax</TabsTrigger>
        <TabsTrigger value="totalAmount">Total Amount</TabsTrigger>
      </TabsList>
      <TabsContent value="taxAmount">
        <AmountInput label="Bill Tax" name="taxAmount" state={taxState} />
      </TabsContent>
      <TabsContent value="totalAmount">
        <AmountInput
          label="Total Amount"
          name="totalAmount"
          state={totalAmountState}
        />
      </TabsContent>
    </Tabs>
  );
};

export default Taxes;
