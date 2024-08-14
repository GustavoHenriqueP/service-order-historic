export interface MetaDataFieldProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  label: string;
  info: React.ReactNode | string;
}

const MetaDataField = ({ label, info, ...props }: MetaDataFieldProps) => {
  const infoComponent = typeof info === 'string' ? <p>{info}</p> : info;

  return (
    <div {...props}>
      <span className="text-xs font-medium text-[#7A7A7A] dark:text-[#bebebe]">{label}</span>
      {infoComponent}
    </div>
  );
};

export default MetaDataField;
