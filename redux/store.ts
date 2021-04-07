import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ProjectReducer from "./reducers/Project/ProjectReducer";
import thunk from "redux-thunk";
import TechReducer from "./reducers/Technology/TechnologyReducer";
import AppReducer from "./reducers/App/AppReducer";
import MessagesReducer from "./reducers/Messages/MessagesReducer";

/*====================*/

const rootReducer = combineReducers({
  app: AppReducer,
  project: ProjectReducer,
  technology: TechReducer,
  messages: MessagesReducer,
});

/*====================*/
// @ts-ignore
const composeEnhancers = global["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppStateType = ReturnType<typeof rootReducer>;

/*====================*/

export default store;
