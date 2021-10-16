export const getFilter = (state) => state.contacts.filter;
export const getItems = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
