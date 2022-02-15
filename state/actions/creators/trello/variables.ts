
export const id = {
  user: process.env.NEXT_PUBLIC_TRELLO_ID_USER,
  board: process.env.NEXT_PUBLIC_TRELLO_ID_BOARD,
};

export const list = {
  pages: process.env.NEXT_PUBLIC_TRELLO_LIST_PAGES,
  hero: process.env.NEXT_PUBLIC_TRELLO_LIST_HERO,
  projects: process.env.NEXT_PUBLIC_TRELLO_LIST_PROJECTS,
  roles: process.env.NEXT_PUBLIC_TRELLO_LIST_ROLES,
  education: process.env.NEXT_PUBLIC_TRELLO_LIST_EDUCATION,
};

export const api = {
  key: process.env.NEXT_PUBLIC_TRELLO_API_KEY,
  base: "https://api.trello.com/1/",
};

export const user = {
  token: process.env.NEXT_PUBLIC_TRELLO_USER_TOKEN,
};

export const trello = (target: string) => `${api.base}${target}?key=${api.key}&token=${user.token}`;

export const trelloCards = (target: string | undefined = list.hero) => trello(`list/${target}/cards/`);

export const trelloList = (target: string | undefined = list.hero) => trello(`lists/${target}`);

export const trelloAttachments = (target: string | undefined = list.hero) => trello(`cards/${target}/attachments`);

export const trelloActions = (target: string | undefined = list.hero) => trello(`cards/${target}/actions`);