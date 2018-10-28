export const getFriendlyUrl = title => (
  title.trim().toLowerCase().split(' ').join('-')
);
