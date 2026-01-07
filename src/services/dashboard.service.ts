export interface DashboardData {
  totalEarnings: number;
  activeAffiliates: number;
  contentViews: number;
  conversionRate: number;
}

export const getDashboardData = async (): Promise<DashboardData> => {
  // In a real app, this would be an API call
  // const response = await apiClient.get('/creator/dashboard');
  // return response.data;

  // Mocking data for demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalEarnings: 12500,
        activeAffiliates: 48,
        contentViews: 15400,
        conversionRate: 3.2,
      });
    }, 1000);
  });
};
