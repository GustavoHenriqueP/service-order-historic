import { formatDate, getDate } from '@/utils';
import { describe, expect, test } from 'vitest';

describe('Date management - getDate()', () => {
  const dateString = '2024-08-09T19:24:02.231Z';
  const dateNumber = Date.parse(dateString);
  const dateObject = new Date(dateString);

  test('Deve retornar um Date object ao receber uma string válida', () => {
    const date = getDate(dateString);

    expect(date instanceof Date).toBe(true);
  });

  test('Deve retornar um Date object ao receber um number válido', () => {
    const date = getDate(dateNumber);

    expect(date instanceof Date).toBe(true);
  });

  test('Deve retornar um Date object ao receber um Date object', () => {
    const date = getDate(dateObject);

    expect(date instanceof Date).toBe(true);
  });
});

describe('Date management - formatDate()', () => {
  const dateString = '2024-08-09T19:24:02.231Z';
  const dateNumber = Date.parse(dateString);
  const dateObject = new Date(dateString);

  test('Deve retornar uma string formatada para dd/MM/yyyy, (hh -3):mm ao receber uma string válida', () => {
    const formatedDate = formatDate(dateString);

    expect(formatedDate).toBe('09/08/2024, 16:24');
  });

  test('Deve retornar uma string formatada para dd/MM/yyyy, (hh -3):mm ao receber um number válido', () => {
    const formatedDate = formatDate(dateNumber);

    expect(formatedDate).toBe('09/08/2024, 16:24');
  });

  test('Deve retornar uma string formatada para dd/MM/yyyy, (hh -3):mm ao receber um Date object', () => {
    const formatedDate = formatDate(dateObject);

    expect(formatedDate).toBe('09/08/2024, 16:24');
  });
});
