import { useReducer, type ReactNode, useMemo } from "react"
import { BudgetContext } from "./BudgetContext"
import { initialState, BudgetReducer } from "../reducers/budget-reducer"

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState)
    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const availableBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                availableBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}