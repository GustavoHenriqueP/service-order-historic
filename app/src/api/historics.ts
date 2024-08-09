import { API_URL_DEV } from '@/constants';

export interface Proceeding {
  id: number;
  name: string;
}

export interface Contact {
  id: number;
  name: string;
  tel: string;
}

export interface HistoricMetaData {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface HistoricData {
  title: string;
  content: string;
  proceeding: Proceeding;
  contact: Contact;
}

export interface Historic extends HistoricMetaData, HistoricData {}

// READ
export async function getHistorics(search?: string) {
  const url = new URL('/historics', API_URL_DEV);
  if (search) url.searchParams.set('search', search);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  const data = await response.json();

  return data as Historic[];
}

// CREATE
export async function createHistoric(historicData: HistoricData) {
  const url = new URL('/historics', API_URL_DEV);
  const options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(historicData),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

// UPDATE
export async function updateHistoric(id: Pick<HistoricMetaData, 'id'>, historicData: HistoricData) {
  const url = new URL(`/historics/${id}`, API_URL_DEV);
  const options: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(historicData),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

// DELETE
export async function deleteHistoric(id: Pick<HistoricMetaData, 'id'>) {
  const url = new URL(`/historics/${id}`, API_URL_DEV);
  const options: RequestInit = {
    method: 'DELETE',
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}
