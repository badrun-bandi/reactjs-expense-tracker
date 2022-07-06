
export interface AppStorage {
  getItem(key: string): string | null
  setItem(key: string, value: any): void
}

export interface Transaction {
  id: string;
  type: string;
  category: string;
  amount:number;
  date: string;
}

export interface Category {
  type: string;
  amount: number;
  color: string;
}

export enum Types {
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
}

export enum AppKey {
  TrackerApp = 'TRACKER_APP',
}