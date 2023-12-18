export type DailyData = {
  date: string;
  daily_sales: number;
  daily_refund: number;
};

export type MonthlyData = {
  [month: string]: DailyData[];
};

export type RevenueData = {
  [year: string]: MonthlyData;
};
