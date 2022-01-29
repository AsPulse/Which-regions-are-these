export interface IPrefecture {
  name: string;
  population: number;
  areaSize: number;
  industrialProduction?: number;
  fisheryProduction?: number;
}
export const prefectureLabel: { [P in keyof Required<IPrefecture>]: string } = {
  name: '都道府県',
  population: '人口 (人)',
  areaSize: '面積 (km^2)',
  industrialProduction: '工業生産額 (円)',
  fisheryProduction: '水産業生産額 (円)',
};
