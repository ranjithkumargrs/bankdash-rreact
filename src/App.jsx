import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Accounts from './pages/Accounts'
import Investments from './pages/Investments'
import CreditCards from './pages/CreditCards'
import Loans from './pages/Loans'
import Services from './pages/Services'
import Privileges from './pages/Privileges'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privileges" element={<Privileges />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}
