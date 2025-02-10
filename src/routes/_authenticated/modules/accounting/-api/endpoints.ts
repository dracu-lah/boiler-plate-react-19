export default {
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
