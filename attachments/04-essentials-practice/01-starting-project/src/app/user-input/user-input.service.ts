import { Injectable } from "@angular/core";
import { InputObj, OutputObj } from "./user-input.models";

@Injectable({ providedIn: 'root' })
export class userInputService {
  calculateInvestmentResults(data: InputObj) {
    const annualData: OutputObj[] = [];
    let investmentValue = data.iInvest!;

    for (let i = 0; i < data.duration!; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.eReturn! / 100);
      investmentValue += interestEarnedInYear + data.aInvest!;
      const totalInterest =
        investmentValue - data.aInvest! * year - data.aInvest!;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        // annualInvestment doest go to the table
        annualInvestment: data.aInvest!,
        totalInterest: totalInterest,
        totalAmountInvested: data.iInvest! + data.aInvest! * year,
      });
    }

    return annualData;
  }
}
