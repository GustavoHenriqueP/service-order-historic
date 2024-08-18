import Loader from '@/components/Loader';
import { Input, InputProps } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';
import { forwardRef } from 'react';
import { useDebounceCallback } from 'usehooks-ts';

interface SearchInputProps extends Omit<InputProps, 'type'> {
  clear: () => void;
  submitFn: (value: string) => void;
  isLoading?: boolean;
  debounceTime?: number;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    { clear, submitFn, isLoading = false, debounceTime = 0, className, value, onChange, ...props },
    ref,
  ) => {
    const debounced = useDebounceCallback(submitFn, debounceTime);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (!onChange) return;
      onChange(event);

      if (debounceTime === 0) {
        submitFn(event.target.value);
        return;
      }

      debounced(event.target.value);
    }

    return (
      <div
        role="search"
        className={cn(
          'relative flex max-w-80 items-center gap-2 rounded-lg border border-[#7A7A7A] bg-transparent px-3 pr-8 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring',
          className,
        )}
      >
        {isLoading ? (
          <Loader className="size-5" />
        ) : (
          <Search className="pointer-events-none size-5 touch-none stroke-[#7A7A7A]" />
        )}

        <Input
          ref={ref}
          type="text"
          className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          placeholder="Pesquisar..."
          value={value}
          onChange={handleChange}
          {...props}
        />

        {value !== '' && (
          <button
            className="absolute right-2 rounded-sm p-1 transition-colors hover:bg-zinc-200"
            onClick={() => {
              clear();
              submitFn('');
            }}
          >
            <X className="size-3" />
          </button>
        )}
      </div>
    );
  },
);
export default SearchInput;
