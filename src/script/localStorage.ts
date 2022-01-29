export class localStorage<T> {
  data: T;
  constructor(defaultValue: T) {
    const saving = window.localStorage.__wrat__ as (string | undefined);
    if ( saving === undefined ) {
      this.data = defaultValue;
      this.save();
    } else {
      this.data = JSON.parse(saving) as T;
    }
  }
  save() {
    window.localStorage.__wrat__ = JSON.stringify(this.data);
  }
}
