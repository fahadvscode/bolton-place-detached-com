import { LAST_UPDATED, PRICING_DISCLAIMER, PRICING_ROWS } from "@/lib/content";

export function PricingTable() {
  return (
    <div>
      <p className="mb-4 text-sm text-text-muted">Last updated {LAST_UPDATED}</p>
      <table className="facts stack-cards">
        <tbody>
          {PRICING_ROWS.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="prose-measure mt-6 text-sm text-text-muted">{PRICING_DISCLAIMER}</p>
    </div>
  );
}
