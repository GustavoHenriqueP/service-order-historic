export function getDate(stringDate: number | string | Date) {
  return new Date(stringDate);
}

export function formatDate(date: number | string | Date) {
  const dateNormalized =
    typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

  const formatedDate = dateNormalized.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return formatedDate;
}
