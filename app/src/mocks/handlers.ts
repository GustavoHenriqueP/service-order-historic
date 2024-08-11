import { API_URL_DEV } from '@/constants';
import { http, HttpResponse } from 'msw';

const mockedData = [
  {
    id: 2,
    createdAt: '2024-08-08T19:24:02.231Z',
    updatedAt: '2024-08-08T19:24:02.231Z',
    title: 'Instalação de novo computador',
    content: 'Responsável técnico realizou a instalação.',
    proceeding: {
      id: 2,
      name: 'Instalação',
    },
    contact: {
      id: 2,
      name: 'Adailton',
      tel: '(11) 99999-9999',
    },
  },
  {
    id: 1,
    createdAt: '2024-08-08T17:43:42.864Z',
    updatedAt: '2024-08-08T19:54:14.686Z',

    title: 'Troca de Componentes',
    content:
      'Responsável técnico realizou a substituição dos seguintes componentes:  Fonte Bateria Módulo de comunicação  OBS 1: Módulo de comunicação especificado foi o Optimus 126122.  OBS 2: Imagens relativas ao componente estão em anexo.   Medições realizadas:  F1: 122hz  /  F2: 120hz.',
    proceeding: {
      id: 1,
      name: 'Manutenção',
    },
    contact: {
      id: 2,
      name: 'Adailton',
      tel: '(11) 99999-9999',
    },
  },
];

export const handlers = [
  http.get(API_URL_DEV + '/historics', () => {
    return HttpResponse.json(mockedData);
  }),
  http.get(API_URL_DEV + '/historics/?search=componente', () => {
    return HttpResponse.json(mockedData[1]);
  }),
  http.post(API_URL_DEV + '/historics', () => {
    return HttpResponse.json(null, { status: 201 });
  }),
  http.put(API_URL_DEV + '/historics/1', () => {
    return HttpResponse.json(null, { status: 200 });
  }),
  http.delete(API_URL_DEV + '/historics/2', () => {
    return HttpResponse.json(null, { status: 200 });
  }),
];
