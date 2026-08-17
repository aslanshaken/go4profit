export const CALENDLY_URL = 'https://calendly.com/synoro-ai/30min';
export const SITE_URL = 'https://go4profit.us';

export const CONTACT = {
  email: 'info@go4profit.us',
  address: '1655 S Blue Island Ave #559, Chicago, IL 60608',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=1655+S+Blue+Island+Ave+%23559+Chicago+IL+60608',
};

export const KEYWORDS = [
  'trucking accounting',
  'trucking bookkeeping',
  'fleet accounting',
  'IFTA reporting',
  'Form 2290',
  'HVUT',
  'cost per mile',
  'profit by truck',
  'revenue per mile',
  'trucking payroll',
  'driver settlements',
  'trucking tax',
  'owner-operator accountant',
  'fleet CFO',
  'QuickBooks for trucking',
  'trucking catch-up bookkeeping',
  'Chicago trucking accountant',
].join(', ');

export const SEO = {
  home: {
    title: 'Trucking Accounting, IFTA & Cost Per Mile | Go4Profit',
    description:
      'Go4Profit is trucking accounting for fleets: bookkeeping, IFTA, Form 2290, payroll, settlements, and cost-per-mile reporting. See profit by truck — not just a company P&L.',
    path: '/',
  },
  book: {
    title: 'Book a Free Trucking Accounting Consultation | Go4Profit',
    description:
      'Book a free 30-minute consultation with Go4Profit. Talk IFTA, settlements, payroll, taxes, or cost per mile for your trucking company. No prep required.',
    path: '/book',
  },
  notFound: {
    title: 'Page not found | Go4Profit',
    description: 'This Go4Profit page is missing. Return home or book a free trucking accounting consultation.',
    path: '/',
    robots: 'noindex, follow',
  },
};

export const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#numbers', label: 'Numbers' },
  { href: '/#process', label: 'Onboarding' },
];

export const SERVICES = [
  {
    n: '01',
    title: 'Bookkeeping & financial reporting',
    body: 'Monthly bookkeeping, reconciliations, settlement matching, cleanup, and trucking-specific financial reporting — so your books stay accurate and useful.',
  },
  {
    n: '02',
    title: 'Tax, IFTA & payroll',
    body: 'Federal and state tax, IFTA, Form 2290, tax planning, payroll, and driver accounting — handled by one team that understands trucking.',
  },
  {
    n: '03',
    title: 'Accounts payable & receivable',
    body: 'Bills, invoices, factoring deposits, collections, and aging — so you know what you owe, who owes you, and where your cash stands.',
  },
];

export const TRUCK_SAMPLES = [
  {
    id: 'Truck #14',
    win: true,
    rows: [
      { label: 'Revenue', value: '$24,800' },
      { label: 'Cost / mile', value: '$1.86' },
      { label: 'Revenue / mile', value: '$2.41' },
      { label: 'Net profit', value: '$7,410' },
    ],
  },
  {
    id: 'Truck #21',
    win: true,
    rows: [
      { label: 'Revenue', value: '$21,400' },
      { label: 'Cost / mile', value: '$2.04' },
      { label: 'Revenue / mile', value: '$2.28' },
      { label: 'Net profit', value: '$3,540' },
    ],
  },
  {
    id: 'Truck #07',
    win: false,
    rows: [
      { label: 'Revenue', value: '$18,200' },
      { label: 'Cost / mile', value: '$2.38' },
      { label: 'Revenue / mile', value: '$2.21' },
      { label: 'Net profit', value: '−$980' },
    ],
  },
];

export const HUB_INPUTS = [
  { title: 'TMS & dispatch', body: 'Loads, rates, and settlements.' },
  { title: 'ELD & mileage', body: 'Miles, drivers, and IFTA data.' },
  { title: 'Fuel & tolls', body: 'Fuel, gallons, and toll costs.' },
  { title: 'Banking & factoring', body: 'Deposits, fees, and deductions.' },
  { title: 'Payroll & driver pay', body: 'Wages, settlements, and reimbursements.' },
];

export const HUB_OUTPUTS = [
  { title: 'Monthly financial statements', body: 'P&L, Balance Sheet, and Cash Flow — every month.' },
  { title: 'AR & AP reporting', body: "Know what's owed to you and what you owe." },
  { title: 'Trucking performance reports', body: 'CPM, RPM, profit by truck, fuel, and driver costs.' },
  { title: 'Settlement reconciliation', body: 'Match loads, payments, deductions, and deposits.' },
  { title: 'Tax & IFTA reporting', body: 'Stay organized and ready for filings.' },
];

export const HUB_NOTE =
  'Plus spreadsheets, PDFs, statements, invoices, receipts, and exports from the systems you already use.';

export const INTEGRATIONS = [
  { name: 'QuickBooks' },
  { name: 'Xero' },
  { name: 'Datatruck' },
  { name: 'QuickManage' },
  { name: 'Alvys' },
  { name: 'McLeod' },
  { name: 'Trimble' },
  { name: 'Motive' },
  { name: 'Samsara' },
  { name: 'Geotab' },
  { name: 'DAT' },
  { name: 'Truckstop' },
  { name: 'Amazon Relay' },
  { name: 'EFS' },
  { name: 'Comdata' },
  { name: 'OTR Solutions' },
  { name: 'Triumph' },
  { name: 'RTS' },
  { name: 'ADP' },
  { name: 'Gusto' },
  { name: 'Fleetio' },
  { name: 'Transflo' },
  { name: 'Super Dispatch' },
];

export const TESTIMONIALS = [
  {
    name: 'Nikita Glazkov',
    quote:
      'This is exactly what you need if you are in the trucking business. They will help you break down your income and expenses clearly, and guide your company to the next level.',
  },
  {
    name: 'Feras Bashnak',
    quote:
      'I was impressed with how easy they made bookkeeping for us. Their team was always there to help with everything — from sorting daily payments to getting ready for tax season.',
  },
  {
    name: 'Bauer Altynbek',
    quote:
      'We recently worked with Go4Profit and Ainur for our company bookkeeping needs, and I couldn\'t be more impressed. From start to finish, their professionalism and efficiency were outstanding.',
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'We learn your operation',
    body: 'Your trucks, drivers, payroll, TMS, fuel cards, factoring, banks, and current accounting setup.',
  },
  {
    n: '02',
    title: 'We clean and connect your data',
    body: 'We organize the books, reconcile balances, connect your systems, and start producing trucking KPIs.',
  },
  {
    n: '03',
    title: 'We run your finance function',
    body: 'Bookkeeping, reporting, taxes, payroll, and financial guidance — one relationship.',
  },
];
