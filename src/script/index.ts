import { IStorage } from './interfaces/storage';
import { localStorage } from './localStorage';

const storage = new localStorage<IStorage>({});
storage.save();
