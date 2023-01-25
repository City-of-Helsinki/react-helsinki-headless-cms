export function getVenueIds(ids: number[]): string[] {
  return ids.map((id) => `tprek:${id}`);
}
