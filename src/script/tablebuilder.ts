import { IPrefecture, prefectureLabel } from './interfaces/prefecture';

export function tableBuild(
  targets: IPrefecture[],
  parameters: (keyof IPrefecture)[]
) {
  const table = document.createElement('table');
  const data = [prefectureLabel, ...targets].map((v) =>
    parameters.map((e) => v[e] ?? '-')
  );
  data
    .map((v, i) => {
      const tr = document.createElement('tr');
      v.map((e) => {
        const td = document.createElement(i === 0 ? 'th' : 'td');
        td.textContent = `${e}`;
        return td;
      }).forEach((j) => tr.appendChild(j));
      return tr;
    })
    .forEach((v) => table.appendChild(v));
  return table;
}
