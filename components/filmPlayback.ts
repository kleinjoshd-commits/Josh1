/**
 * One homepage loop plays at a time. The player with the greatest
 * visible area wins. An open modal pauses every loop.
 */

type Player = {
  id: number;
  ratio: number;
  modal: boolean;
  canPlay: () => boolean;
  play: () => void;
  pause: () => void;
};

const players = new Map<number, Player>();
let seq = 0;
let activeId: number | null = null;

function elect() {
  const list = [...players.values()];
  const blocked = list.some((player) => player.modal);
  const winner = blocked
    ? null
    : list
        .filter((player) => player.ratio >= 0.2 && player.canPlay())
        .sort((a, b) => b.ratio - a.ratio)[0] ?? null;
  const winnerId = winner?.id ?? null;

  for (const player of list) {
    if (player.id !== winnerId) player.pause();
  }
  if (winner) winner.play();
  activeId = winnerId;
}

export function registerPlayer(input: Omit<Player, "id">) {
  const id = ++seq;
  players.set(id, { ...input, id });
  elect();
  return id;
}

export function updatePlayer(
  id: number,
  patch: Partial<Pick<Player, "ratio" | "modal">>
) {
  const player = players.get(id);
  if (!player) return;
  if (patch.ratio != null) player.ratio = patch.ratio;
  if (patch.modal != null) player.modal = patch.modal;
  elect();
}

export function unregisterPlayer(id: number) {
  const player = players.get(id);
  player?.pause();
  players.delete(id);
  if (activeId === id) activeId = null;
  elect();
}
