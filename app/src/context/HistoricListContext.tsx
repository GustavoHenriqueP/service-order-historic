import { getHistorics, Historic, HistoricId } from '@/api/historics';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { createContext, useContext, useState } from 'react';

interface IHistoricListContext {
  historicData: Historic[] | undefined;
  isLoadingList: boolean;
  isLoadingSearch: boolean;
  error: Error | null;
  searched: string;
  setSearched: React.Dispatch<React.SetStateAction<string>>;
  selected: HistoricId[];
  addSelected: (id: HistoricId) => void;
  removeSelected: (id: HistoricId) => void;
}

const HistoricListContext = createContext<IHistoricListContext | null>(null);

export const useHistoricList = () => {
  const context = useContext(HistoricListContext);
  if (!context) {
    throw new Error('useHistoricList must be used within a HistoricListProvider');
  }

  return context;
};

export const HistoricListProvider = ({ children }: React.PropsWithChildren) => {
  const [searched, setSearched] = useState('');
  const [selected, setSelected] = useState<HistoricId[]>([]);

  const {
    data: historicData,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['historicList', searched],
    queryFn: ({ queryKey }) => getHistorics(queryKey[1]),
    placeholderData: keepPreviousData,
  });

  function addSelected(id: HistoricId) {
    setSelected((currentValue) => {
      const newValue = new Set(currentValue);
      newValue.add(id);

      return Array.from(newValue.values());
    });
  }

  function removeSelected(id: HistoricId) {
    setSelected((currentValue) => {
      const newValue = new Set(currentValue);
      newValue.delete(id);

      return Array.from(newValue.values());
    });
  }

  const providerValue: IHistoricListContext = {
    historicData,
    isLoadingList: isLoading,
    isLoadingSearch: isFetching && searched !== '',
    error,
    searched,
    setSearched,
    selected,
    addSelected,
    removeSelected,
  };

  return (
    <HistoricListContext.Provider value={providerValue}>{children}</HistoricListContext.Provider>
  );
};
