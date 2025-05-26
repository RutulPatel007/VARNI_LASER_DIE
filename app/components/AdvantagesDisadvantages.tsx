import { CheckCircle, XCircle } from "lucide-react"

const advantages = [
  "High purity and consistent quality",
  "Customizable formulations",
  "Eco-friendly packaging options",
  "Rapid delivery and logistics support",
]

const disadvantages = [
  "Some products require special handling",
  "Certain chemicals have limited shelf life",
  "Regulatory compliance may vary by region",
  "Bulk orders may have minimum quantity requirements",
]

export default function AdvantagesDisadvantages() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Advantages & Disadvantages</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-green-500 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2" />
            Advantages
          </h3>
          <ul className="space-y-2">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-red-500 flex items-center">
            <XCircle className="w-6 h-6 mr-2" />
            Disadvantages
          </h3>
          <ul className="space-y-2">
            {disadvantages.map((disadvantage, index) => (
              <li key={index} className="flex items-start">
                <XCircle className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{disadvantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
