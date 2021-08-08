// returns the full name of the airline
function getAllianceName(initials)
{
    const dict = {
        "OW": "One World",
        "ST": "Sky Team",
        "SA": "Star Alliance",
    }
    if(initials){
        return dict[initials]
    }
    return null
}

// returns the airlines that are in the alliances that are selected
function getFilteredAirlines(selected_alliances, airlines) {
    // return all the airlines if there are no selected airlines
  if (Object.keys(selected_alliances).length === 0) {
    return airlines;
  }
//   if an airline has one of the alliances selected, filter it to be returned in an array of matching airlines
  return airlines.filter(
    (airline) => airline["alliance"] in selected_alliances
  );
}

export {getAllianceName, getFilteredAirlines}