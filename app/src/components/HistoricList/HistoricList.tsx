import HistoricItem from '@/components/HistoricItem';
import Loader from '@/components/Loader';
import { useHistoricList } from '@/context/HistoricListContext';

const HistoricList = () => {
  const { historicData, isLoadingList, error } = useHistoricList();

  if (error)
    return (
      <div>
        <p>Error!</p>
      </div>
    );

  if (isLoadingList)
    return (
      <div className="flex w-full items-center justify-center">
        <p className="flex items-center gap-2">
          <Loader /> Carregando lista...
        </p>
      </div>
    );

  console.log(historicData);

  return (
    historicData !== undefined && (
      <ul className="space-y-5">
        {historicData.map((historic) => {
          return <HistoricItem key={historic.id} historic={historic} />;
        })}
      </ul>
    )
  );
};
export default HistoricList;
