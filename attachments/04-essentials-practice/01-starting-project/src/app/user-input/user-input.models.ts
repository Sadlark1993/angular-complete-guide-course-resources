export type InputObj = {
  iInvest: number | null,
  aInvest: number | null,
  eReturn: number | null,
  duration: number | null
}

export type OutputObj = {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number
}
