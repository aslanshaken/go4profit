export function PortalPreview() {
  return (
    <figure className="portal-frame">
      <img
        src="/images/portal-inbox.png?v=7"
        alt="Northshore Holdings client portal inbox, with open requests for statements, tax payments, and missing receipts"
      />
    </figure>
  );
}

export function HeroWorkspace() {
  return <PortalPreview />;
}

export function PnlPreview() {
  return (
    <div className="mini-visual" aria-hidden="true">
      <div className="tab-row">
        <span className="is-on">P&amp;L</span>
        <span>Balance sheet</span>
      </div>
      <div className="mini-table compact">
        <div>
          <span>Revenue</span>
          <strong>$48,200</strong>
        </div>
        <div>
          <span>Expenses</span>
          <strong>$34,250</strong>
        </div>
        <div>
          <span>Net income</span>
          <strong>$13,950</strong>
        </div>
      </div>
    </div>
  );
}

export function PayrollPreview() {
  return (
    <div className="mini-visual" aria-hidden="true">
      <div className="cal-grid">
        {['M', 'T', 'W', 'T', 'F'].map((day, index) => (
          <span key={`${day}-${index}`} className={index === 3 ? 'is-on' : undefined}>
            {day}
          </span>
        ))}
      </div>
      <p className="mini-status">Payroll ready for approval</p>
    </div>
  );
}

export function TaxPreview() {
  return (
    <div className="mini-visual" aria-hidden="true">
      <ul className="check-list">
        <li className="is-done">Documents</li>
        <li className="is-on">Review</li>
        <li>Filing</li>
      </ul>
    </div>
  );
}

export function CashflowPreview() {
  return (
    <div className="mini-visual" aria-hidden="true">
      <div className="flow-bars">
        <span style={{ height: '42%' }} />
        <span style={{ height: '68%' }} />
        <span style={{ height: '54%' }} />
        <span style={{ height: '36%' }} />
      </div>
      <p className="mini-status">Why is cash lower this month?</p>
    </div>
  );
}

export function CleanupPreview() {
  return (
    <div className="mini-visual" aria-hidden="true">
      <ul className="check-list">
        <li>Missing records</li>
        <li className="is-on">Reconciled accounts</li>
        <li>Updated reports</li>
      </ul>
    </div>
  );
}

const VISUALS = {
  pnl: PnlPreview,
  payroll: PayrollPreview,
  tax: TaxPreview,
  cashflow: CashflowPreview,
  cleanup: CleanupPreview,
};

export function ServiceVisual({ name }) {
  const Visual = VISUALS[name];
  return Visual ? <Visual /> : null;
}
