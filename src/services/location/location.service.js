export const locationRequest = async (searchTerm) => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${searchTerm}`
  );

  const res = await response.json();

  if (!res.status === "OK") {
    throw new Error("Something went wrong!");
  }

  const [data] = res;
  const locationID = data.woeid;

  return locationID;
};
