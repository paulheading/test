import { combineReducers } from 'redux'
import npmReducer from './npm'
import gemReducer from './gem'
import treehouseReducer from './treehouse'
import trelloReducer from './trello'
import heroReducer from './hero'
import countReducer from './count'
import spotifyReducer from './spotify'
import mediumReducer from './medium'

const reducers = combineReducers({
  npm: npmReducer,
  gem: gemReducer,
  treehouse: treehouseReducer,
  trello: trelloReducer,
  hero: heroReducer,
  count: countReducer,
  spotify: spotifyReducer,
  medium: mediumReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;