const categories = [
  {
    name: "Acids",
    examples: ["Hydrochloric Acid", "Sulfuric Acid", "Nitric Acid"],
    applications: "Metal treatment, pH regulation",
  },
  {
    name: "Bases",
    examples: ["Sodium Hydroxide", "Potassium Hydroxide", "Ammonia"],
    applications: "Cleaning agents, Neutralization",
  },
  {
    name: "Solvents",
    examples: ["Ethanol", "Acetone", "Toluene"],
    applications: "Extraction, Cleaning, Synthesis",
  },
  {
    name: "Catalysts",
    examples: ["Platinum", "Zeolites", "Enzymes"],
    applications: "Reaction acceleration, Selectivity improvement",
  },
]

export default function CategoriesTable() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Product Categories</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Examples</th>
              <th className="py-3 px-4 text-left">Applications</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.name} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4 font-semibold">{category.name}</td>
                <td className="py-3 px-4">{category.examples.join(", ")}</td>
                <td className="py-3 px-4">{category.applications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
