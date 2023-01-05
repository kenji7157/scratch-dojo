export const cls = (ary: (string | { [key: string]: boolean })[]) => {
  if (!ary || ary.length === 0) {
    return '';
  }
  return ary.join(' ');
};
