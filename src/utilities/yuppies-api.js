const BASE_URL = '/api/yuppies';

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

export function create(yuppie) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(yuppie)
  }).then(res => res.json());
}

export function update(yuppie) {
  return fetch(`${BASE_URL}/${yuppie._id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(yuppie)
  }).then(res => res.json());
}

export function deleteOne(yuppieID) {
  return fetch(`${BASE_URL}/${yuppieID}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' }
  });
}