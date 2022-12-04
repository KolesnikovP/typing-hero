import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
  className?: string
}
// just for test errors
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const callError = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button
      onClick={callError}
    >
      throw error
    </Button>
  );
};
