//* Date management
export function getDate(date: number | string | Date) {
  return new Date(date);
}

export function formatDate(date: number | string | Date) {
  const dateNormalized = getDate(date);

  const formatedDate = dateNormalized.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return formatedDate;
}
