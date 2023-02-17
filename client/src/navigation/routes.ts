const housePagePath = '/game-page/' as const;
const houseUpdatePagePath = '/game-update-page/' as const;

const routes = {
  HomePage: '/',
  GamePage: {
    routePath: `${housePagePath}:id`,
    createLink: (id: string | number) => `${housePagePath}${id}`,
  },
  GameUpdatePage: {
    routePath: `${houseUpdatePagePath}:id`,
    createLink: (id: string | number) => `${houseUpdatePagePath}${id}`,
  },
  GameCreatePage: '/game-form-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
