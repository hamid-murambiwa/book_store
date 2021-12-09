const appID = 'GdZkfXCoOXzsSXGK6925';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const addBOOK = async (obj) => {
  await fetch(`${url}/apps/${appID}/books`, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

export const deleteBOOK = async (itemid) => {
  await fetch(`${url}/apps/${appID}/books/${itemid}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: itemid,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response);
};
