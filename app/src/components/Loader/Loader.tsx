import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface LoaderProps extends Omit<React.ComponentProps<'svg'>, 'children'> {}

const Loader = ({ className, ...props }: LoaderProps) => {
  return (
    <Loader2
      className={cn('pointer-events-none size-full max-h-6 max-w-6 animate-spin', className)}
      {...props}
    />
  );
};
export default Loader;
