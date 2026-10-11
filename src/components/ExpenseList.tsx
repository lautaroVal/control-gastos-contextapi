/* import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"

export default function ExpenseList() {
  const { state } = useBudget()
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])

  return (
    <div className="mt-10">
        {isEmpty ? (<p className="text-gray-600 text-2xl font-bold">No hay Gastos</p>) :(
            <>
            <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos.</p>
            </>
        )}
    </div>
  )
}
 */