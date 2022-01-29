import { prefectureData } from './data/prefecture';
import { IStorage } from './interfaces/storage';
import { localStorage } from './localStorage';
import { tableBuild } from './tablebuilder';
import { nthAlphabet } from './util/nthAlphabet';
import { randomChoice } from './util/randomChoice';

const storage = new localStorage<IStorage>({});
storage.save();
document.addEventListener('DOMContentLoaded', () => {
  const countOfQuiz = 5;
  const target = randomChoice(prefectureData, countOfQuiz);

  const sentence = document.getElementById('sentence');
  if (sentence)
    sentence.innerHTML = `これは、${countOfQuiz}つの都道府県に関する表で、<br>${nthAlphabet(
      0,
      true
    )}から${nthAlphabet(countOfQuiz - 1, true)}はそれぞれ<b>${target
      .slice()
      .sort(() => Math.random() - 0.5)
      .map((v) => v.name)
      .join('、')}</b>です。<br>それぞれに当てはまる県名を答えなさい。`;

  document.getElementById('question')?.appendChild(
    tableBuild(
      target.map((v, i) => {
        v.name = nthAlphabet(i, true);
        return v;
      }),
      ['name', 'population', 'areaSize']
    )
  );
});
