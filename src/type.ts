export type DailyData = {
  date: string;
  daily_sales: number;
  daily_refund: number;
};

export type MonthlyData = {
  [month: string]: DailyData[];
};

export type YearlyData = {
  [year: string]: MonthlyData;
};

export type RevenueData = {
  data: {
    [key: string]: YearlyData;
  };
};
