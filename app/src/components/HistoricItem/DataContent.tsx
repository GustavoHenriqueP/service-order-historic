import { HistoricData } from '@/api/historics';

interface DataContentProps extends Pick<HistoricData, 'title' | 'content'> {}

const DataContent = ({ title, content }: DataContentProps) => {
  return (
    <div className="flex w-full justify-center px-5 py-4">
      <div className="w-full max-w-[70ch]">
        {title} <br />
        <br /> {content}
      </div>
    </div>
  );
};

export default DataContent;
