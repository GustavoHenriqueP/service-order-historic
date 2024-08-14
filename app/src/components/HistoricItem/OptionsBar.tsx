import { HistoricId } from '@/api/historics';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { useHistoricList } from '@/context/HistoricListContext';
import { CheckedState } from '@radix-ui/react-checkbox';
import { Edit, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface OptionsBarProps {
  historicId: HistoricId;
}

const OptionsBar = ({ historicId }: OptionsBarProps) => {
  const [isSelected, setSelected] = useState<CheckedState>(false);
  const { addSelected, removeSelected } = useHistoricList();

  useEffect(() => {
    if (isSelected === 'indeterminate') return;

    if (isSelected === true) addSelected(historicId);

    if (isSelected === false) removeSelected(historicId);
  }, [isSelected]);

  return (
    <div className="flex flex-col items-center justify-between px-3 py-4">
      <Checkbox
        className="size-5"
        checked={isSelected}
        onCheckedChange={(value) => setSelected(value)}
      />

      <div className="flex flex-col gap-3">
        <Button variant="ghost" size="icon" className="text-[#7A7A7A] dark:text-[#bebebe]">
          <Edit className="size-6" />
        </Button>

        <Button variant="ghost" size="icon" className="text-[#7A7A7A] dark:text-[#bebebe]">
          <Trash2 className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export default OptionsBar;
