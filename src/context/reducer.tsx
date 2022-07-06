import { AppKey, Transaction, Types } from "../models/common";
import { Actions } from "../models/types";
import { appStorage } from "../utils/storage";

const AppReducer = (state: Transaction[], action: Actions) => {
  let transactions: Transaction[];
  switch (action.type) {
      case Types.DELETE_TRANSACTION:
          transactions = state.filter((transaction: Transaction) => transaction.id !== action.payload);
          appStorage.setItem(AppKey.TrackerApp, transactions);
          return transactions;
      case Types.ADD_TRANSACTION:
          transactions = [action.payload, ...state];
          appStorage.setItem(AppKey.TrackerApp, transactions);
          return transactions;
      default:
          return state
  }
}
export default AppReducer;