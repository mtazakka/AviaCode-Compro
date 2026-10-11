export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand" aria-label="Avia Code">
      <img className={compact ? "brand-symbol" : "brand-wordmark"} src={compact ? "/aviacode-symbol.svg" : "/aviacode-wordmark.svg"} alt="" aria-hidden="true" />
    </span>
  );
}
