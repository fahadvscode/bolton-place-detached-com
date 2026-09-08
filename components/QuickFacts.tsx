import { QUICK_FACTS } from "@/lib/content";

export function QuickFacts() {
  return (
    <section className="section-space bg-surface-alt" aria-labelledby="quick-facts-heading">
      <div className="mx-auto max-w-[1200px] px-5">
        <p className="eyebrow">Project snapshot</p>
        <h2 id="quick-facts-heading" className="mt-3 text-3xl md:text-4xl">
          Quick facts
        </h2>
        <table className="facts stack-cards mt-8 max-w-[720px]">
          <tbody>
            {QUICK_FACTS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
