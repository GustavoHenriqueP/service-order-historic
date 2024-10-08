import SearchInput from '@/components/SearchInput';
import { Button } from '@/components/ui/Button';
import { useHistoricList } from '@/context/HistoricListContext';
import { PlusCircle, Trash2 } from 'lucide-react';
import { useState } from 'react';

const MenuBar = () => {
  const [search, setSearch] = useState('');
  const { selected, setSearched, isLoadingSearch } = useHistoricList();

  return (
    <div role="menubar" className="flex max-w-full items-center justify-between gap-6">
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        submitFn={setSearched}
        debounceTime={1000}
        clear={() => setSearch('')}
        isLoading={isLoadingSearch}
      />

      <div className="flex gap-2">
        <Button className="gap-2">
          <PlusCircle className="size-4" /> Incluir
        </Button>

        <Button
          variant="outline"
          className="gap-2 border-[#993434] text-[#993434] hover:border-[#682121] hover:bg-[#f1e5e5] hover:text-[#682121]"
          disabled={selected.length === 0}
        >
          <Trash2 className="size-4" /> Excluir: <span className="min-w-3">{selected.length}</span>
        </Button>
      </div>
    </div>
  );
};
export default MenuBar;
