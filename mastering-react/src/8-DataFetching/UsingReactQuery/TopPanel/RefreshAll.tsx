import { useQueryClient } from '@tanstack/react-query';
import { Button } from 'components';

export function RefreshAll(): JSX.Element {
  const queryClient = useQueryClient();

  const handleClick = () => {
    queryClient.invalidateQueries();
  };

  return <Button text="Refresh all" onClick={handleClick} />;
}