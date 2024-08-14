import { Historic } from '@/api/historics';
import MetaDataField from '@/components/HistoricItem/MetaDataField';
import { formatDate } from '@/utils';

interface MetaDataContainerProps {
  historic: Historic;
}

const MetaDataContainer = ({ historic }: MetaDataContainerProps) => {
  const lastUpdate =
    historic.createdAt === historic.updatedAt ? '-' : formatDate(historic.updatedAt);

  return (
    <div className="grid grid-cols-[10.5rem_10.5rem] gap-x-3 gap-y-6 px-5 py-4">
      <MetaDataField label="Criação" info={formatDate(historic.createdAt)} />
      <MetaDataField label="Última modificação" info={lastUpdate} />
      <MetaDataField label="Responsável" info={historic.id.toString()} />
      <MetaDataField label="Procedimento" info={historic.proceeding.name} />
      <MetaDataField
        className="col-span-full"
        label="Contato"
        info={historic.contact.name + ' ' + historic.contact.tel}
      />
    </div>
  );
};

export default MetaDataContainer;
