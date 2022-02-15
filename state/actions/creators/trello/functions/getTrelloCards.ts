import axios from 'axios'
import { getTrelloSuccessCard } from 'state/actions/trello'
import { removeHero, makeHtml, cardType, getTrelloAttachments, getTrelloActions, getTrelloSvgs, readmore, prepLabels } from '.'
import { trelloCards } from '../variables'

export async function getTrelloCards(target?:string) {
  const { data } = await axios.get(trelloCards(target), { headers: { Accept: "application/json" } });
  const type = cardType(target);

  const result = data.map(async ({ desc, name, start, due, dueComplete, id, labels }: getTrelloSuccessCard) => {
    const attachments = await getTrelloAttachments(id);
    const actions = await getTrelloActions(id);
    const more = readmore(attachments);

    return {
      svg: type === "projects" ? getTrelloSvgs(actions) : null,
      marquee: removeHero(name),
      attachments,
      actions,
      more,
      desc: makeHtml(desc),
      name,
      start,
      due,
      dueComplete,
      id,
      labels: prepLabels(labels)
    };
  });

  return await Promise.all(result);
}