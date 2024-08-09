export function getDate(stringDate: string) {
  return new Date(stringDate);
}

export function formatDate(date: Date | string) {
  const dateNormalized = typeof date === 'string' ? new Date(date) : date;

  const formatedDate = dateNormalized.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return formatedDate;
}
