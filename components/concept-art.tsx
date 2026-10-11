export function ConceptArt({ type = "dashboard" }: { type?: "dashboard" | "pos" | "wedding" | "ai" | "security" }) {
  if (type === "wedding") return (
    <div className="concept concept-wedding" aria-label="Concept illustration for a digital wedding invitation">
      <span className="concept-label">CONCEPT UI</span><div className="phone"><div className="petals">✦</div><small>THE WEDDING OF</small><strong>A &amp; B</strong><i /><p>Save the date</p><span className="phone-action" style={{ border: "1px solid #a98c68", borderRadius: 20, padding: "6px 10px", fontSize: 7, color: "#5b4835" }}>Open invitation</span></div>
    </div>
  );
  if (type === "pos") return (
    <div className="concept concept-pos" aria-label="Concept illustration for a point-of-sale interface">
      <span className="concept-label">CONCEPT UI</span><div className="mini-sidebar" /><div className="pos-grid"><b>New transaction</b><div className="product-tiles"><i /><i /><i /><i /><i /><i /></div><div className="receipt"><small>Current order</small><span /><span /><span /><strong>Rp —</strong></div></div>
    </div>
  );
  if (type === "ai") return (
    <div className="concept concept-ai" aria-label="Concept illustration for Avia AI Office">
      <span className="concept-label">MVP · CONCEPT UI</span><div className="ai-orbit"><i /><i /><i /></div><div className="ai-card"><small>WORKFLOW</small><b>Incoming request</b><span>Review → Draft → Human approval</span><em>Ready for review</em></div>
    </div>
  );
  if (type === "security") return (
    <div className="concept concept-security" aria-label="Concept illustration for Security Workspace">
      <span className="concept-label">IN DEVELOPMENT · CONCEPT UI</span><div className="scope-ring"><b>AUTHORIZED</b><span>SCOPE</span></div><div className="finding-list"><i /><i /><i /><i /></div>
    </div>
  );
  return (
    <div className="concept concept-dashboard" aria-label="Concept illustration for an operations dashboard">
      <span className="concept-label">CONCEPT UI</span><div className="mini-sidebar" /><div className="chart-area"><small>SUPPLY OVERVIEW</small><div className="stat-row"><i /><i /><i /></div><svg viewBox="0 0 420 120" aria-hidden="true"><path d="M0 96 C70 70 92 93 145 58 S220 42 270 52 S345 12 420 24" fill="none" stroke="currentColor" strokeWidth="5"/><path d="M0 96 C70 70 92 93 145 58 S220 42 270 52 S345 12 420 24 V120 H0Z" fill="url(#fade)"/><defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="currentColor" stopOpacity=".25"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs></svg><div className="table-lines"><i /><i /><i /></div></div>
    </div>
  );
}
