/*
export function capitalize(term) {
  return term && term.charAt(0).toUpperCase() + term.slice(1);
}
*/

export function param2pascal(term) {
  return ('-' + term).replace(/-[a-z0-9]/g, c => c.charAt(1).toUpperCase());
}

export function pascal2param(term) {
  return term.replace(/[A-Z0-9]/g, c => '-' + c.toLowerCase()).substring(1);
}
