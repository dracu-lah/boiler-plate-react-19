// Authentication Endpoints
const authEndpoints = {
  login: "/auth/login",
  logout: "/auth/logout",
  refreshToken: "/auth/refresh",
};

// Accounting Module
const accountingEndpoints = {
  ledger: {
    list: "/accounting/ledger",
    detail: (id: string) => `/accounting/ledger/${id}`,
    create: "/accounting/ledger",
    update: (id: string) => `/accounting/ledger/${id}`,
    delete: (id: string) => `/accounting/ledger/${id}`,
  },
  transactions: {
    list: "/accounting/transactions",
    detail: (id: string) => `/accounting/transactions/${id}`,
  },
};

const modules = {
  accounting: accountingEndpoints,
};
// Export all endpoints
export default {
  auth: authEndpoints,
  modules,
};
