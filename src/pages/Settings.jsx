import { useState } from 'react'
import { Camera } from 'lucide-react'
import { user } from '../data/mockData'
import { endpoints } from '../api/client'

const tabs = ['Edit Profile', 'Preferences', 'Security']

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-xs text-navy font-medium block mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-primary text-slate-500"
      />
    </div>
  )
}

function EditProfile() {
  const [form, setForm] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    password: '••••••••••',
    dob: user.dob,
    presentAddress: user.presentAddress,
    permanentAddress: user.permanentAddress,
    city: user.city,
    postalCode: user.postalCode,
    country: user.country,
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await endpoints.updateProfile(form)
    } catch {
      // demo fallback — no live backend connected
    }
    alert('Profile saved (demo).')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full object-cover" />
          <button type="button" className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
            <Camera size={12} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your Name" name="name" value={form.name} onChange={handleChange} />
        <Field label="User Name" name="username" value={form.username} onChange={handleChange} />
        <Field label="Email" name="email" value={form.email} onChange={handleChange} />
        <Field label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
        <Field label="Date of Birth" name="dob" value={form.dob} onChange={handleChange} />
        <Field label="Present Address" name="presentAddress" value={form.presentAddress} onChange={handleChange} />
        <Field label="Permanent Address" name="permanentAddress" value={form.permanentAddress} onChange={handleChange} />
        <Field label="City" name="city" value={form.city} onChange={handleChange} />
        <Field label="Postal Code" name="postalCode" value={form.postalCode} onChange={handleChange} />
        <Field label="Country" name="country" value={form.country} onChange={handleChange} />
      </div>

      <div className="flex justify-end mt-6">
        <button type="submit" className="bg-primary text-white text-sm font-medium px-8 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
          Save
        </button>
      </div>
    </form>
  )
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-10 h-5.5 rounded-full flex items-center px-0.5 transition-colors ${checked ? 'bg-teal-400 justify-end' : 'bg-slate-200 justify-start'}`}
      style={{ height: 22 }}
    >
      <span className="w-4 h-4 rounded-full bg-white block" />
    </button>
  )
}

function Preferences() {
  const [prefs, setPrefs] = useState({
    currency: 'USD',
    timeZone: '(GMT-12:00) International Date Line West',
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: true,
  })

  const toggle = (key) => setPrefs({ ...prefs, [key]: !prefs[key] })

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <Field label="Currency" value={prefs.currency} onChange={(e) => setPrefs({ ...prefs, currency: e.target.value })} />
        <Field label="Time Zone" value={prefs.timeZone} onChange={(e) => setPrefs({ ...prefs, timeZone: e.target.value })} />
      </div>

      <p className="text-sm font-semibold text-navy mb-3">Notification</p>
      <div className="space-y-4">
        <label className="flex items-center gap-3 text-sm text-slate-600">
          <Toggle checked={prefs.digitalCurrency} onChange={() => toggle('digitalCurrency')} />
          I send or receive digital currency
        </label>
        <label className="flex items-center gap-3 text-sm text-slate-600">
          <Toggle checked={prefs.merchantOrder} onChange={() => toggle('merchantOrder')} />
          I receive merchant order
        </label>
        <label className="flex items-center gap-3 text-sm text-slate-600">
          <Toggle checked={prefs.recommendations} onChange={() => toggle('recommendations')} />
          There are recommendation for my account
        </label>
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={() => alert('Preferences saved (demo).')} className="bg-primary text-white text-sm font-medium px-8 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
          Save
        </button>
      </div>
    </div>
  )
}

function Security() {
  const [twoFactor, setTwoFactor] = useState(true)
  const [form, setForm] = useState({ current: '', next: '' })

  return (
    <div>
      <label className="flex items-center gap-3 text-sm font-medium text-navy mb-6">
        <Toggle checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
        <span>
          Two-factor Authentication
          <span className="block text-xs font-normal text-muted">Enable or disable two factor authentication</span>
        </span>
      </label>

      <p className="text-sm font-semibold text-navy mb-3">Change Password</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
        <Field
          label="Current Password"
          type="password"
          value={form.current}
          onChange={(e) => setForm({ ...form, current: e.target.value })}
        />
        <Field
          label="New Password"
          type="password"
          value={form.next}
          onChange={(e) => setForm({ ...form, next: e.target.value })}
        />
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={() => alert('Security settings saved (demo).')} className="bg-primary text-white text-sm font-medium px-8 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
          Save
        </button>
      </div>
    </div>
  )
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Edit Profile')

  return (
    <div className="card">
      <div className="flex gap-6 border-b border-slate-100 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
              activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-slate-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Edit Profile' && <EditProfile />}
      {activeTab === 'Preferences' && <Preferences />}
      {activeTab === 'Security' && <Security />}
    </div>
  )
}
