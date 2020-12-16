const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
// https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*

async function get(url: string) {
  const content = {
    method: 'GET',
  };
  try {
    let finalUrl = url;
    if (!url.startsWith('https') || !url.startsWith('http')) {
      finalUrl = BASE_URL + url;
    }
    const result = await run(finalUrl, content);
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function post({url, params}) {
  const content = {
    method: 'POST',
    body: JSON.stringify(params),
  };
  try {
    const result = await run(url, content);
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function run(url: string, content: object) {
  let response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'API-KEY': 'uXb2XKxVsaysb9tW_Tvu8A_ZdGY',
    },
    ...content,
  });
  let json = await response.json();
  return json;
}

const restApiClient = {
  get,
  post,
};

export default restApiClient;
