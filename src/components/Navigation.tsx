import { Button } from '@/components/ui/button';
import { UseFsmReturn } from '@/hooks/useFsm';
import { useCallback } from 'react';

interface Props {
  canProgress: boolean;
  onPrev?: VoidFunction;
  onNext?: VoidFunction;
  fsmState: UseFsmReturn;
}

const Navigation = ({ canProgress, onPrev, onNext, fsmState }: Props) => {
  const { stepIdx, prevStep, nextStep } = fsmState;

  const handlePrev = useCallback(() => {
    onPrev?.();
    prevStep();
  }, [onPrev, prevStep]);

  const handleNext = useCallback(() => {
    onNext?.();
    nextStep();
  }, [onNext, nextStep]);

  return (
    <div className="flex gap-4">
      {stepIdx > 0 && (
        <Button
          className="grow basis-1/2"
          variant="outline"
          onClick={handlePrev}
        >
          Previous
        </Button>
      )}
      <Button
        className="grow basis-1/2"
        variant="outline"
        onClick={handleNext}
        disabled={!canProgress}
      >
        Next
      </Button>
    </div>
  );
};

export default Navigation;
