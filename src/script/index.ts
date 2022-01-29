import { prefectureData } from './data/prefecture';
import { IStorage } from './interfaces/storage';
import { localStorage } from './localStorage';
import { tableBuild } from './tablebuilder';
import { randomChoice } from './util/randomChoice';

const storage = new localStorage<IStorage>({});
storage.save();
document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('question')
    ?.appendChild(
      tableBuild(randomChoice(prefectureData, 5), ['name', 'population'])
    );
});
