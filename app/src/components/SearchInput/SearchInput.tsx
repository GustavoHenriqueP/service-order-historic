import { Input, InputProps } from '@/components/ui/Input';
import { Search, X } from 'lucide-react';
import { forwardRef } from 'react';

interface SearchInputProps extends Omit<InputProps, 'type'> {
  clear: () => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ clear, className, value, ...props }, ref) => {
    return (
      <div
        role="search"
        className="relative flex max-w-60 items-center gap-2 rounded-lg border border-[#7A7A7A] bg-transparent px-3 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring"
      >
        <Search className="pointer-events-none size-5 touch-none stroke-[#7A7A7A]" />

        <Input
          ref={ref}
          type="text"
          className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          {...props}
          placeholder="Pesquisar..."
          value={value}
        />

        {value !== '' && (
          <button
            className="absolute right-2 rounded-sm p-1 transition-colors hover:bg-zinc-200"
            onClick={clear}
          >
            <X className="size-3" />
          </button>
        )}
      </div>
    );
  },
);
export default SearchInput;
