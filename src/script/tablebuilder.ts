import { IPrefecture } from './interfaces/prefecture';

export function tableBuild(
  targets: { [P in keyof IPrefecture]: string | number }[],
  parameters: (keyof IPrefecture)[]
) {
  const table = document.createElement('table');
  const data = targets.map((v) => parameters.map((e) => v[e] ?? '-'));
  data
    .map((v) => {
      const tr = document.createElement('tr');
      v.map((e) => {
        const td = document.createElement('td');
        td.textContent = `${e}`;
        return td;
      }).forEach((j) => tr.appendChild(j));
      return tr;
    })
    .forEach((v) => table.appendChild(v));
  return table;
}
