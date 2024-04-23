export const getContacts = async (contactId?: string) => {
  let url = '/api/contacts';

  if (contactId) {
    url = `/api/contacts/${Number(contactId)}`;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getFavoriteContacts = async () => {
  try {
    const res = await fetch('/api/contacts/favorites');
    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
