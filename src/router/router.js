import Landing from '../pages/landing/landing';
import PageNotExist from '../components/page-not-exist/page-not-exist';


export const RouteNames = {
  LANDING: '/',
  PAGE_NOT_EXIST: '/page-not-exist',
}

export const routes = [
  {
    path: RouteNames.LANDING,
    element: Landing,
  },
  {
    path: RouteNames.PAGE_NOT_EXIST,
    element: PageNotExist,
  },
];
