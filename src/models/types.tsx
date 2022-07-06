import { Transaction, Types } from "./common";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? { type: Key; } : { type: Key; payload: M[Key]; }
};

export type Payload = {
  [Types.ADD_TRANSACTION]: Transaction
  [Types.DELETE_TRANSACTION]: string
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

export type StateType = Transaction[];
