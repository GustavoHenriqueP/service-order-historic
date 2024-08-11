import { HistoricId } from '@/api/historics';
import { createContext, useContext, useState } from 'react';

interface IHistoricListContext {
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
  const [selected, setSelected] = useState<HistoricId[]>([]);

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
    selected,
    addSelected,
    removeSelected,
  };

  return (
    <HistoricListContext.Provider value={providerValue}>{children}</HistoricListContext.Provider>
  );
};
