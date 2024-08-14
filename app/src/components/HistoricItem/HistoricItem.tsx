import { Historic } from '@/api/historics';
import DataContent from '@/components/HistoricItem/DataContent';
import MetaDataContainer from '@/components/HistoricItem/MetaDataContainer';
import OptionsBar from '@/components/HistoricItem/OptionsBar';
import { Separator } from '@/components/ui/Separator';
import { useHistoricList } from '@/context/HistoricListContext';
import clsx from 'clsx';

export interface HistoricItemProps {
  historic: Historic;
}

const HistoricItem = ({ historic }: HistoricItemProps) => {
  const { selected } = useHistoricList();

  const isCurrentSelected = selected.includes(historic.id);

  return (
    <li
      className={clsx(
        'flex h-[14rem] w-full overflow-hidden rounded-lg border border-border bg-card',
        { 'ring-1 ring-ring': isCurrentSelected },
      )}
    >
      <MetaDataContainer historic={historic} />

      <Separator orientation="vertical" />
      <DataContent title={historic.title} content={historic.content} />
      <Separator orientation="vertical" />

      <OptionsBar historicId={historic.id} />
    </li>
  );
};
export default HistoricItem;
