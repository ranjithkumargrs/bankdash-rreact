// Central mock data module. In a real app these would come from API calls
// (see src/api/client.js for the axios instance used to fetch this data).

export const user = {
  name: 'Charlene Reed',
  username: 'Charlene Reed',
  email: 'charlenereed@gmail.com',
  avatar: 'https://i.pravatar.cc/150?img=47',
  dob: '25 January 1990',
  presentAddress: 'San Jose, California, USA',
  permanentAddress: 'San Jose, California, USA',
  city: 'San Jose',
  postalCode: '45962',
  country: 'USA',
}

export const cards = [
  {
    id: 1,
    balance: 5756,
    holder: 'Eddy Cusuma',
    validThru: '12/22',
    number: '3778 **** **** 1234',
    variant: 'dark',
  },
  {
    id: 2,
    balance: 5756,
    holder: 'Eddy Cusuma',
    validThru: '12/22',
    number: '3778 **** **** 1234',
    variant: 'light',
  },
  {
    id: 3,
    balance: 5756,
    holder: 'Eddy Cusuma',
    validThru: '12/22',
    number: '3778 **** **** 1234',
    variant: 'outline',
  },
]

export const recentTransactions = [
  { id: 1, name: 'Deposit from my Card', date: '28 January 2021', amount: -850, icon: 'card' },
  { id: 2, name: 'Deposit Paypal', date: '25 January 2021', amount: 2500, icon: 'paypal' },
  { id: 3, name: 'Jemi Wilson', date: '21 January 2021', amount: 5400, icon: 'user' },
]

export const weeklyActivity = [
  { day: 'Sat', deposit: 350, withdraw: 200 },
  { day: 'Sun', deposit: 480, withdraw: 100 },
  { day: 'Mon', deposit: 200, withdraw: 150 },
  { day: 'Tue', deposit: 500, withdraw: 320 },
  { day: 'Wed', deposit: 150, withdraw: 250 },
  { day: 'Thu', deposit: 400, withdraw: 180 },
  { day: 'Fri', deposit: 300, withdraw: 300 },
]

export const expenseStatistics = [
  { name: 'Entertainment', value: 30, color: '#1B2A6B' },
  { name: 'Bill Expense', value: 15, color: '#FF9B42' },
  { name: 'Investment', value: 20, color: '#FF56A8' },
  { name: 'Others', value: 35, color: '#2D60FF' },
]

export const quickTransfer = [
  { id: 1, name: 'Livia Bator', role: 'CEO', avatar: 'https://i.pravatar.cc/150?img=32' },
  { id: 2, name: 'Randy Press', role: 'Director', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 3, name: 'Workman', role: 'Designer', avatar: 'https://i.pravatar.cc/150?img=15' },
]

export const balanceHistory = [
  { month: 'Jul', value: 350 }, { month: 'Aug', value: 550 }, { month: 'Sep', value: 300 },
  { month: 'Oct', value: 700 }, { month: 'Nov', value: 350 }, { month: 'Dec', value: 600 },
  { month: 'Jan', value: 500 },
]

export const myExpense = [
  { month: 'Aug', value: 5200 }, { month: 'Sep', value: 5200 }, { month: 'Oct', value: 5200 },
  { month: 'Nov', value: 3800 }, { month: 'Dec', value: 12500 }, { month: 'Jan', value: 5200 },
]

export const allTransactions = [
  { id: '#12548796', description: 'Spotify Subscription', type: 'Shopping', card: '1234 ****', date: '28 Jan, 12.30 AM', amount: -2500, direction: 'up' },
  { id: '#12548796', description: 'Freepik Sales', type: 'Transfer', card: '1234 ****', date: '25 Jan, 10.40 PM', amount: 750, direction: 'down' },
  { id: '#12548796', description: 'Mobile Service', type: 'Service', card: '1234 ****', date: '20 Jan, 10.40 PM', amount: -150, direction: 'up' },
  { id: '#12548796', description: 'Wilson', type: 'Transfer', card: '1234 ****', date: '15 Jan, 03.29 PM', amount: -1050, direction: 'up' },
  { id: '#12548796', description: 'Emily', type: 'Transfer', card: '1234 ****', date: '14 Jan, 10.40 PM', amount: 840, direction: 'down' },
]

export const accountsSummary = [
  { label: 'My Balance', value: 12750, icon: 'wallet', bg: '#FFF3D6' },
  { label: 'Income', value: 5600, icon: 'income', bg: '#E3E9FF' },
  { label: 'Expense', value: 3460, icon: 'expense', bg: '#FFE2EC' },
  { label: 'Total Saving', value: 7920, icon: 'saving', bg: '#DDF9EE' },
]

export const lastTransactions = [
  { id: 1, name: 'Spotify Subscription', date: '25 Jan 2021', type: 'Shopping', card: '1234 ****', status: 'Pending', amount: -150 },
  { id: 2, name: 'Mobile Service', date: '25 Jan 2021', type: 'Service', card: '1234 ****', status: 'Completed', amount: -340 },
  { id: 3, name: 'Emilly Wilson', date: '25 Jan 2021', type: 'Transfer', card: '1234 ****', status: 'Completed', amount: 780 },
]

export const debitCreditOverview = [
  { day: 'Sat', debit: 500, credit: 700 },
  { day: 'Sun', debit: 500, credit: 200 },
  { day: 'Mon', debit: 300, credit: 250 },
  { day: 'Tue', debit: 700, credit: 500 },
  { day: 'Wed', debit: 500, credit: 550 },
  { day: 'Thu', debit: 650, credit: 350 },
  { day: 'Fri', debit: 700, credit: 700 },
]

export const invoicesSent = [
  { id: 1, name: 'Apple Store', time: '5h ago', amount: 450, icon: '🍎' },
  { id: 2, name: 'Michael', time: '2 days ago', amount: 160, icon: '👤' },
  { id: 3, name: 'Playstation', time: '5 days ago', amount: 1085, icon: '🎮' },
  { id: 4, name: 'William', time: '10 days ago', amount: 90, icon: '👤' },
]

export const investmentSummary = [
  { label: 'Total Invested Amount', value: '$150,000', icon: 'money' },
  { label: 'Number of Investments', value: '1,250', icon: 'invest' },
  { label: 'Rate of Return', value: '+5.80%', icon: 'return' },
]

export const yearlyInvestment = [
  { year: '2016', value: 2000 }, { year: '2017', value: 22000 }, { year: '2018', value: 15000 },
  { year: '2019', value: 38000 }, { year: '2020', value: 15500 }, { year: '2021', value: 25000 },
]

export const monthlyRevenue = [
  { year: '2016', value: 8000 }, { year: '2017', value: 18000 }, { year: '2018', value: 9000 },
  { year: '2019', value: 22000 }, { year: '2020', value: 14000 }, { year: '2021', value: 33000 },
]

export const myInvestments = [
  { id: 1, name: 'Apple Store', category: 'E-commerce, Marketplace', value: 54000, returnPct: 16, icon: '🍎', bg: '#FFE7EC' },
  { id: 2, name: 'Samsung Mobile', category: 'E-commerce, Marketplace', value: 25300, returnPct: -4, icon: 'G', bg: '#E3E9FF' },
  { id: 3, name: 'Tesla Motors', category: 'Electric Vehicles', value: 8200, returnPct: 25, icon: 'T', bg: '#FFF3D6' },
]

export const trendingStock = [
  { sl: '01', name: 'Trivago', price: 520, returnPct: 5 },
  { sl: '02', name: 'Canon', price: 480, returnPct: 10 },
  { sl: '03', name: 'Uber Food', price: 350, returnPct: -3 },
  { sl: '04', name: 'Nokia', price: 940, returnPct: 2 },
  { sl: '05', name: 'Tiktok', price: 670, returnPct: -12 },
]

export const cardExpenseStats = [
  { name: 'DBL Bank', value: 30, color: '#2D60FF' },
  { name: 'ABM Bank', value: 25, color: '#00C2A8' },
  { name: 'BRC Bank', value: 25, color: '#FF56A8' },
  { name: 'MCP Bank', value: 20, color: '#FFB547' },
]

export const cardList = [
  { id: 1, type: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', name: 'William', icon: '💳', bg: '#E3E9FF' },
  { id: 2, type: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', name: 'Michel', icon: '💳', bg: '#FFE2EC' },
  { id: 3, type: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', name: 'Edward', icon: '💳', bg: '#FFF3D6' },
]

export const cardSettings = [
  { id: 1, label: 'Block Card', desc: 'Instantly block your card', icon: '🚫', bg: '#FFF3D6' },
  { id: 2, label: 'Change Pin Code', desc: 'Choose another pin code', icon: '🔒', bg: '#E3E9FF' },
  { id: 3, label: 'Add to Google Pay', desc: 'Withdraw without any card', icon: '📱', bg: '#FFE2EC' },
  { id: 4, label: 'Add to Apple Pay', desc: 'Withdraw without any card', icon: '📱', bg: '#DDF9EE' },
  { id: 5, label: 'Add to Apple Store', desc: 'Withdraw without any card', icon: '🛍️', bg: '#DDF9EE' },
]

export const loanTypes = [
  { id: 1, label: 'Personal Loans', value: '$50,000', icon: 'person', bg: '#E3E9FF' },
  { id: 2, label: 'Corporate Loans', value: '$100,000', icon: 'briefcase', bg: '#FFF3D6' },
  { id: 3, label: 'Business Loans', value: '$500,000', icon: 'chart', bg: '#FFE2EC' },
  { id: 4, label: 'Custom Loans', value: 'Choose Money', icon: 'tool', bg: '#DDF9EE' },
]

export const activeLoans = [
  { sl: '01', money: 100000, left: 40500, duration: '8 Months', rate: '12%', installment: '$2,000 / month' },
  { sl: '02', money: 500000, left: 250000, duration: '36 Months', rate: '10%', installment: '$8,000 / month' },
  { sl: '03', money: 900000, left: 40500, duration: '12 Months', rate: '12%', installment: '$5,000 / month' },
  { sl: '04', money: 50000, left: 40500, duration: '25 Months', rate: '5%', installment: '$2,000 / month' },
  { sl: '05', money: 50000, left: 40500, duration: '5 Months', rate: '16%', installment: '$10,000 / month' },
  { sl: '06', money: 80000, left: 25500, duration: '14 Months', rate: '8%', installment: '$2,000 / month' },
  { sl: '07', money: 12000, left: 5500, duration: '9 Months', rate: '13%', installment: '$500 / month' },
  { sl: '08', money: 160000, left: 100800, duration: '3 Months', rate: '12%', installment: '$900 / month' },
]

export const serviceHighlights = [
  { id: 1, title: 'Life Insurance', desc: 'Unlimited protection', icon: '🛡️', bg: '#E3E9FF' },
  { id: 2, title: 'Shopping', desc: 'Buy. Think. Grow.', icon: '🛍️', bg: '#FFF3D6' },
  { id: 3, title: 'Safety', desc: 'We are your allies', icon: '🛡️', bg: '#DDF9EE' },
]

export const bankServices = [
  { id: 1, title: 'Business loans', icon: '👤', bg: '#FFE2EC' },
  { id: 2, title: 'Checking accounts', icon: '📁', bg: '#FFF3D6' },
  { id: 3, title: 'Savings accounts', icon: '📊', bg: '#FFE2EC' },
  { id: 4, title: 'Debit and credit cards', icon: '👤', bg: '#E3E9FF' },
  { id: 5, title: 'Life Insurance', icon: '🛡️', bg: '#DDF9EE' },
  { id: 6, title: 'Business loans', icon: '👤', bg: '#FFE2EC' },
]
