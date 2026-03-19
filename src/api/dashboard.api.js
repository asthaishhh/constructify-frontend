export async function getDashboardAnalytics() {
	// Fallback implementation used during build and when backend is not available.
	// Returns the shape expected by frontend components.
	return {
		revenueTrend: [],
		profitMarginTrend: [],
		salesByCategory: [],
		expenseBreakdown: [],
		orderStatus: [],
		stockLevels: [],
		summary: {
			totalRevenue: 0,
			totalOrders: 0,
			lowStockCount: 0,
		},
	};
}

// Provide a default export for environments or imports that expect it
export default getDashboardAnalytics;
