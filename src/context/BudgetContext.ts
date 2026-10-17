import { createContext, type Dispatch } from "react"
import { type BudgetState, type BudgetActions } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    availableBudget: number
}

export const BudgetContext = createContext<BudgetContextProps | null>(null)
