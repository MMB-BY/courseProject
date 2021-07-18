import { combineReducers } from "redux";
import { botOneReducer } from "./botOneReducer";
import { botThreeReducer } from "./botThreeReducer";
import { botTwoReducer } from "./botTwoReducer";
import { tableReducer } from "./table";
import { playerReducer } from "./playerReducer";
import { setDeck } from "./setDeck";

export const rootReducer = combineReducers({
  deck: setDeck,
  table: tableReducer,
  player: playerReducer,
  botOne: botOneReducer,
  botTwo: botTwoReducer,
  botThree: botThreeReducer,
});
