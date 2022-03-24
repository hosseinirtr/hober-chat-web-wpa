import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist/es/types";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
