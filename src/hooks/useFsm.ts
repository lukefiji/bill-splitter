import { useCallback, useState } from 'react';

const STEPS = ['PLATES', 'SUBTOTAL', 'TAXES', 'SPLIT'] as const;

function useFsm() {
  const [stepIdx, setStepIdx] = useState(0);

  const prevStep = useCallback(() => {
    setStepIdx((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
  }, []);

  const nextStep = useCallback(() => {
    setStepIdx((prev) => (prev + 1 < STEPS.length ? prev + 1 : prev));
  }, []);

  const currentStep = STEPS[stepIdx];

  return { stepIdx, currentStep, prevStep, nextStep };
}

export type UseFsmReturn = ReturnType<typeof useFsm>;
export type FsmStep = (typeof STEPS)[number];

export default useFsm;
