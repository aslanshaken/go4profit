const ICONS = {
  ledger: (
    <>
      <path d="M7 4h8a2 2 0 0 1 2 2v14H9a2 2 0 0 1-2-2V4Z" />
      <path d="M7 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
      <path d="M10 9h5M10 13h5" />
    </>
  ),
  cleanup: (
    <>
      <path d="M4 12a8 8 0 1 0 2.3-5.7" />
      <path d="M4 4v4h4" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),
  payroll: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M4 19a5 5 0 0 1 10 0" />
      <path d="M16 8h5M18.5 5.5v5" />
    </>
  ),
  advisory: (
    <>
      <path d="M4 18V6M4 18h16" />
      <path d="m7 14 4-5 3 3 5-6" />
    </>
  ),
  tax: (
    <>
      <path d="M7 3h8l4 4v14H7V3Z" />
      <path d="M15 3v4h4" />
      <path d="m9.5 13 1.8 1.8 3.7-4" />
    </>
  ),
  invoices: (
    <>
      <path d="M7 3h8l4 4v14H7V3Z" />
      <path d="M15 3v4h4" />
      <path d="M10 12h6M10 16h6" />
    </>
  ),
  bills: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </>
  ),
  review: (
    <>
      <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>
  ),
  quickbooks: (
    <>
      <path d="M7 3h8l4 4v14H7V3Z" />
      <path d="M15 3v4h4" />
      <path d="m9.5 14 1.8 1.8 3.7-4" />
    </>
  ),
  reports: (
    <>
      <path d="M6 20V10M12 20V4M18 20v-7" />
    </>
  ),
  reach: (
    <>
      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
      <path d="M16 11h5M18.5 8.5v5" />
    </>
  ),
  aiassist: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
    </>
  ),
  tech: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
  support: (
    <>
      <path d="M4 12v1a3 3 0 0 0 3 3h1" />
      <path d="M20 12v1a3 3 0 0 1-3 3h-1" />
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M8 19h8" />
    </>
  ),
  chat: (
    <>
      <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-5l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      <path d="M8 11h8M8 14h5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M4 11h16" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
};

function SupportIcon({ name }) {
  return (
    <span className="card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[name]}
      </svg>
    </span>
  );
}

export default SupportIcon;
