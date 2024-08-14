import { getHistorics } from '@/api/historics';
import HistoricItem from '@/components/HistoricItem';
import { useHistoricList } from '@/context/HistoricListContext';
import { useQuery } from '@tanstack/react-query';

const HistoricList = () => {
  const { searched } = useHistoricList();

  const {
    data: historicData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['historicList', searched],
    queryFn: ({ queryKey }) => getHistorics(queryKey[1]),
  });

  if (error)
    return (
      <div>
        <p>Error!</p>
      </div>
    );

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

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
