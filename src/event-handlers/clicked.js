export default function getFilteredAirlines(selected_alliances, airlines) {
  if (Object.keys(selected_alliances).length === 0) {
    return airlines;
  }
  return airlines.filter(
    (airline) => airline["alliance"] in selected_alliances
  );
}
