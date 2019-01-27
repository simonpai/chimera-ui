export function param2pascal(term) {
  return ('-' + term).replace(/-[a-z0-9]/g, c => c.charAt(1).toUpperCase());
}

export function pascal2param(term) {
  return term.replace(/[A-Z0-9]/g, c => '-' + c.toLowerCase()).substring(1);
}

export function param2title(term) {
  return ('-' + term).replace(/-[a-z0-9]/g, c => ' ' + c.charAt(1).toUpperCase()).substring(1);
}

export function pascal2title(term) {
  return term.replace(/[A-Z0-9]/g, c => ' ' + c).substring(1);
}
