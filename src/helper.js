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


function getFilteredAirlines(selected_alliances, airlines) {
  if (Object.keys(selected_alliances).length === 0) {
    return airlines;
  }
  return airlines.filter(
    (airline) => airline["alliance"] in selected_alliances
  );
}

export {getAllianceName, getFilteredAirlines}