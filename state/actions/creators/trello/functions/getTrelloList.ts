import axios from 'axios'
import { trelloList } from '../variables'

export async function getTrelloList(target?: string) {
  const { data } = await axios.get(trelloList(target), { headers: { Accept: "application/json" } });
  const { name, id } = data;
  return { name, id };
}