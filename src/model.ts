import { atom, onConnect, onDisconnect, reatomAsync, withDataAtom, withStatusesAtom } from '@reatom/framework';
import { getAssetsRequest } from './api/requests/assets';
import { formatAssets } from './utils';

let timerId: NodeJS.Timeout | null = null;

export const fetchAssetsAction = reatomAsync(
  () => getAssetsRequest().then((response) => formatAssets(response.data)),
  'fetchAssetsAction'
).pipe(withStatusesAtom(), withDataAtom());

export const loopedFetchAssetsAction = reatomAsync(
  (ctx) =>
    getAssetsRequest().then((response) => {
      const result = formatAssets(response.data);
      fetchAssetsAction.dataAtom(ctx, result);
    }),
  {
    name: 'loopedFetchAssetsAction',
    onFulfill: async (ctx) => {
      timerId = setTimeout(() => {
        loopedFetchAssetsAction(ctx);
      }, 2500);
    },
  }
);

onConnect(fetchAssetsAction.dataAtom, fetchAssetsAction);
onDisconnect(fetchAssetsAction.dataAtom, () => {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }
});

export const profileDataAtom = atom<Record<string, number>>({}, 'profileDataAtom');
