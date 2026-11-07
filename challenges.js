"use strict";
const challenges = [
 {
  chapter:"Equity Investments",title:"Value a share",
  question:"A company expects next-year EPS of $4 and a dividend of $2.40 per share. ROE is 15% and the required return is 12%. Assuming stable ROE, a constant payout and constant perpetual dividend growth funded by retained earnings, estimate intrinsic value per share using justified forward P/E.",
  hint:"Start with what the firm pays out and retains. Which growth rate can retained earnings support? Then turn the justified forward multiple into a price.",
  steps:[
   ["Dividend payout ratio","Use matching next-year dividend and EPS to determine the share of earnings paid out. The rest is retained.","Payout = $2.40 ÷ $4 = 60%; retention = 1 − 60% = 40%."],
   ["Sustainable growth rate","Use this when stable ROE and retained earnings fund growth without new equity; the resulting growth is assumed to persist here.","Growth = 40% × 15% = 6%."],
   ["Justified forward P/E ratio","Apply the Gordon-growth forward multiple when the required return exceeds constant growth. Its denominator uses next-year earnings, not current earnings.","Justified forward P/E = 0.60 ÷ (0.12 − 0.06) = 10×."],
   ["Gordon growth share value","Multiply the justified forward P/E by next-year EPS to get the present intrinsic value. Alternatively use next-year dividends in Gordon growth as a check.","Value = 10 × $4 = $40 per share. Check: $2.40 ÷ (0.12 − 0.06) = $40."]
  ]
 },
 {
  chapter:"Financial Statement Analysis",title:"Cash tied up in operations",
  question:"Annual revenue is $900, cost of goods sold is $400 and purchases are $500. Average inventory is $100, average receivables $150 and average payables $100. Use 365 days and total revenue for receivables turnover. Estimate the cash conversion cycle.",
  hint:"Convert each turnover into days, then combine the three periods. Supplier credit offsets time spent in inventory and receivables.",
  steps:[
   ["Inventory turnover","Use cost of goods sold and average inventory to measure inventory turns, then convert annual turns to days.","Inventory turnover = 400 ÷ 100 = 4×; inventory days = 365 ÷ 4 = 91.25."],
   ["Receivables turnover","Use revenue and average receivables to measure collection turns, then convert them to days.","Receivables turnover = 900 ÷ 150 = 6×; receivable days = 365 ÷ 6 ≈ 60.83."],
   ["Payables turnover","Purchases and average payables measure supplier-payment turns. Convert to days before subtracting them.","Payables turnover = 500 ÷ 100 = 5×; payable days = 365 ÷ 5 = 73."],
   ["Cash conversion cycle","Combine the operating investment periods and subtract supplier financing.","Cash conversion cycle = 91.25 + 60.83 − 73 ≈ 79.08 days. Cash is tied up for about 79 days."]
  ]
 },
 {
  chapter:"Quantitative Methods",title:"Estimate a population mean",
  question:"An independent random sample of 36 observations has mean return 8% and sample standard deviation 12%. The sampling assumptions for a t interval are satisfied; use the supplied critical value of 2.03. Calculate the confidence interval for the population mean.",
  hint:"The spread of individual observations is not the same as the uncertainty of their sample mean. Calculate that uncertainty first.",
  steps:[
   ["Standard error of the sample mean","Use sample standard deviation and sample size to estimate the standard deviation of the sample mean.","Standard error = 12% ÷ √36 = 2%."],
   ["Confidence interval for a mean","Multiply the standard error by the given critical value to get the margin, then add and subtract it from the sample mean.","Margin = 2.03 × 2% = 4.06 percentage points. Interval = 8% ± 4.06% = [3.94%, 12.06%]. The confidence level is determined by the stated critical value and degrees of freedom."]
  ]
 },
 {
  chapter:"Economics",title:"Output in base-year prices",
  question:"Consumption is $1,000bn, gross investment $300bn, government purchases $250bn, exports $100bn and imports $150bn, all in current prices. The GDP deflator is 105 with base year 100. Find real GDP.",
  hint:"First find current-price output using expenditure components. Then remove the price-level effect.",
  steps:[
   ["Expenditure approach to GDP","Sum expenditure on domestic final output; imports are subtracted because they are included in other spending components.","Nominal GDP = 1,000 + 300 + 250 + (100 − 150) = $1,500bn."],
   ["Real GDP from nominal GDP","Divide the current-price value by the deflator expressed as a ratio, not by the index number itself.","Real GDP = $1,500bn ÷ (105 ÷ 100) ≈ $1,428.57bn in base-year prices."]
  ]
 },
 {
  chapter:"Corporate Issuers",title:"A project's discount rate",
  question:"A firm has 60% equity and 40% debt by market value, no preferred stock, beta 1.2, a 3% risk-free rate and an expected market return of 9%. Pretax borrowing cost is 6% and the tax rate is 25%. Interest is fully deductible. Find WACC for a project with matching risk and capital structure.",
  hint:"Estimate the equity cost from market risk, adjust the debt cost for tax, then weight both by their market-value shares.",
  steps:[
   ["CAPM cost of equity","Use CAPM to estimate the required equity return from beta and the market risk premium.","Equity cost = 3% + 1.2 × (9% − 3%) = 10.2%."],
   ["After-tax cost of debt","Apply the tax shield only where deductible interest can be used.","After-tax debt cost = 6% × (1 − 25%) = 4.5%."],
   ["Weighted average cost of capital","Weight the equity and after-tax debt costs by market-value proportions. Do not apply the tax adjustment twice.","WACC = 60% × 10.2% + 40% × 4.5% = 7.92%."]
  ]
 },
 {
  chapter:"Fixed Income",title:"Bond sensitivity",
  question:"A two-year bond pays $5 in one year and $105 in two years. Annual yield is 10%, compounded annually. Estimate the percentage price change for a small 25-basis-point yield rise using modified duration. Ignore convexity.",
  hint:"Price the cash flows, use their present values to find a time-weighted average, then convert that measure into yield sensitivity.",
  steps:[
   ["Fixed-rate bond price","Discount each promised cash flow at the annual yield to find the starting price.","Price = 5 ÷ 1.10 + 105 ÷ 1.10² ≈ $91.32."],
   ["Macaulay duration","Weight each payment time by its present value divided by the total price.","Macaulay duration = [1 × (5 ÷ 1.10) + 2 × (105 ÷ 1.10²)] ÷ 91.3223 ≈ 1.9502 years."],
   ["Modified duration","Convert Macaulay duration to sensitivity to an annual yield change; here there is one coupon period per year.","Modified duration = 1.9502 ÷ 1.10 ≈ 1.773."],
   ["Duration price change","A yield increase is a positive decimal change; the minus sign makes the price change negative.","25 bps = 0.0025. Approximate price change = −1.773 × 0.0025 ≈ −0.443%. This is a linear estimate."]
  ]
 },
 {
  chapter:"Derivatives",title:"Price a call in one step",
  question:"A non-dividend-paying stock is $100 now. In one period it will be $120 or $90. A European call has a $100 strike. The one-period risk-free rate is 5%; assume no arbitrage. Estimate the call's current value.",
  hint:"Find the payoff in each future state and the risk-neutral up probability. Discount the probability-weighted payoff.",
  steps:[
   ["Long call payoff","At expiration the call pays the positive difference between stock and strike, or zero. The initial premium is not part of payoff.","Up payoff = max(0, 120 − 100) = $20; down payoff = max(0, 90 − 100) = $0."],
   ["Risk-neutral up probability","Use gross stock multipliers and the one-period risk-free rate. Risk-neutral probabilities are pricing weights, not necessarily actual probabilities.","u = 1.20, d = 0.90; q = (1.05 − 0.90) ÷ (1.20 − 0.90) = 0.50."],
   ["One-period binomial option value","Discount the risk-neutral expected payoff at the risk-free rate for the same period.","Call value = [0.50 × $20 + 0.50 × $0] ÷ 1.05 ≈ $9.52."]
  ]
 },
 {
  chapter:"Alternative Investments",title:"Value a property",
  question:"A property's stabilized annual potential rent is $120,000. Vacancy and collection losses are $10,000, other operating income is $5,000, and operating expenses are $35,000. A comparable market-derived capitalization rate is 8%. Estimate the unlevered property value.",
  hint:"First find operating income after vacancy and operating expenses but before financing. Capitalize that income at the market rate.",
  steps:[
   ["Net operating income","Calculate effective operating income and deduct operating expenses. Exclude financing costs, taxes and capital expenditure from NOI.","NOI = $120,000 − $10,000 + $5,000 − $35,000 = $80,000."],
   ["Direct capitalization property value","Use stabilized forward NOI and a suitable positive market cap rate to estimate unlevered value.","Property value = $80,000 ÷ 0.08 = $1,000,000."]
  ]
 },
 {
  chapter:"Portfolio Management",title:"Risk-adjusted performance",
  question:"A portfolio returned 10% while the risk-free rate was 2% over the same period. Portfolio–market covariance was 0.018 and market variance was 0.015. Both use decimal returns for that period. Calculate the Treynor ratio.",
  hint:"The performance measure uses systematic risk rather than total volatility. Find that risk measure before comparing excess return with it.",
  steps:[
   ["Market beta","Divide portfolio–market covariance by market variance to estimate market sensitivity.","Beta = 0.018 ÷ 0.015 = 1.2."],
   ["Treynor ratio","Divide the portfolio's excess return by beta; this is most useful when comparing well-diversified portfolios with positive beta.","Treynor ratio = (10% − 2%) ÷ 1.2 ≈ 6.67% per unit of beta. It differs from Sharpe, which uses standard deviation."]
  ]
 }
];
challenges.push(
 {
  chapter:"Financial Statement Analysis",title:"Break down return on equity",
  question:"A company has annual revenue of $1,000, net income attributable to common shareholders of $100, average total assets of $800, and average common equity of $400. Calculate and interpret ROE using the three-step DuPont approach.",
  hint:"Break ROE into profitability, asset efficiency and financial leverage. Use averages for balance-sheet inputs.",
  steps:[
   ["Net profit margin","Use net income divided by revenue to see how much of each sales dollar becomes profit.","Net profit margin = $100 ÷ $1,000 = 10%."],
   ["Total asset turnover","Divide revenue by average assets to measure sales generated per dollar of assets.","Asset turnover = $1,000 ÷ $800 = 1.25×."],
   ["Three-step DuPont ROE","Combine margin, asset turnover and the equity multiplier (average assets ÷ average equity).","Equity multiplier = $800 ÷ $400 = 2×. ROE = 10% × 1.25 × 2 = 25%. Check: $100 ÷ $400 = 25%."]
  ]
 },
 {
  chapter:"Quantitative Methods",title:"Test a return assumption",
  question:"An independent random sample of 36 returns has a mean of 8% and sample standard deviation of 12%. The hypothesized population mean is 4%. Assuming the conditions for a one-sample t-test hold, calculate the t-statistic. The two-sided 5% critical values supplied are ±2.03. State the decision.",
  hint:"Estimate the standard error first, then compare the signed test statistic to the supplied critical values.",
  steps:[
   ["Standard error of the sample mean","Use sample standard deviation and sample size to estimate uncertainty in the sample mean.","Standard error = 12% ÷ √36 = 2%."],
   ["Test statistic for a mean","Compare the sample mean with the hypothesized mean in standard-error units.","t = (8% − 4%) ÷ 2% = 2.00. Since 2.00 is inside [−2.03, 2.03], do not reject the null at 5%; this does not prove it is true."]
  ]
 },
 {
  chapter:"Economics",title:"Real interest rate from inflation",
  question:"A price index rose from 100 to 105 over a year. A one-year nominal interest rate is 8.15%, and expected inflation is 5% for the same year. Find the inflation rate and the exact ex ante real interest rate.",
  hint:"Calculate the index change first. Rearrange the multiplicative Fisher relation; do not simply subtract if an exact result is requested.",
  steps:[
   ["Inflation rate","Use the percentage change in the index to measure inflation over the period.","Inflation = (105 − 100) ÷ 100 = 5%, matching the expected rate given."],
   ["Exact Fisher relation","Divide the nominal gross return by the expected inflation gross factor, then subtract one.","Real rate = 1.0815 ÷ 1.05 − 1 = 3%. It is ex ante because expected inflation is used."]
  ]
 },
 {
  chapter:"Corporate Issuers",title:"Leveraged earnings response",
  question:"A company's sales increase by 4%, operating income by 8%, and net income by 12% over the same period. Assuming these changes represent local sensitivities around the current operating point, estimate combined leverage and the net-income effect of a 2% sales rise.",
  hint:"First find operating and financial leverage separately. Their product links sales to net income.",
  steps:[
   ["Degree of operating leverage","Compare the percentage change in operating income with the percentage change in sales.","DOL = 8% ÷ 4% = 2."],
   ["Degree of financial leverage","Compare the percentage change in net income with the percentage change in operating income.","DFL = 12% ÷ 8% = 1.5."],
   ["Degree of combined leverage","Multiply DOL by DFL and apply the result as a local approximation, not an unconditional forecast.","DCL = 2 × 1.5 = 3. A 2% sales rise implies approximately a 6% net-income rise near this operating point."]
  ]
 },
 {
  chapter:"Equity Investments",title:"Value a share from dividends",
  question:"A firm has just paid a $2 dividend per share. Its dividends are expected to grow forever at 4% per year, and the required return is 9%. Estimate intrinsic value using the constant-growth dividend discount model.",
  hint:"The most recent dividend is not the next dividend. Grow it one period before discounting the perpetuity.",
  steps:[
   ["Next dividend","Grow the dividend just paid by one period to obtain the first future dividend.","D₁ = $2 × 1.04 = $2.08."],
   ["Gordon growth share value","Use next-period dividends when growth is constant forever and the required return exceeds growth.","Value = $2.08 ÷ (0.09 − 0.04) = $41.60 per share."]
  ]
 },
 {
  chapter:"Fixed Income",title:"From clean to full price",
  question:"A bond has a $1,000 face value, a 6% annual coupon paid semiannually, and a flat price of $980. The settlement day is 60 days into a 180-day coupon period under the stated day-count convention. Find the accrued interest, full price and current yield.",
  hint:"The coupon is semiannual, but current yield uses the annual coupon and flat price.",
  steps:[
   ["Accrued interest","First convert the annual coupon to the payment per coupon period, then apply the elapsed fraction.","Semiannual coupon = $1,000 × 6% ÷ 2 = $30. Accrued interest = $30 × 60 ÷ 180 = $10."],
   ["Full price","Add accrued interest to the flat price to obtain the settlement amount.","Full price = $980 + $10 = $990."],
   ["Current yield","Divide the annual coupon by the flat price; this measure ignores capital gains and losses.","Current yield = $60 ÷ $980 ≈ 6.12%."]
  ]
 },
 {
  chapter:"Derivatives",title:"Forward pricing and expiry payoff",
  question:"A non-income-producing asset costs $100 today. The annual risk-free rate is 5%, with annual compounding. A fairly priced one-year long forward is initiated today. If the asset is worth $112 at expiry, find the delivery price and the long's payoff.",
  hint:"The no-arbitrage forward price becomes the agreed delivery price. At expiry compare spot with that price.",
  steps:[
   ["Forward price without income","Grow the spot price at the risk-free rate when there is no income or carry cost.","Delivery price = $100 × 1.05 = $105."],
   ["Long forward payoff at expiry","Subtract the agreed delivery price from the spot price at expiry; the payoff may be negative.","Long payoff = $112 − $105 = $7 per unit."]
  ]
 },
 {
  chapter:"Alternative Investments",title:"Private fund value multiple",
  question:"A private fund has received $100 million in paid-in capital, distributed $60 million and has remaining investments valued at $90 million. Calculate the realized, unrealized and total value multiples, ignoring timing and fees.",
  hint:"Express distributions and residual value separately relative to the same paid-in capital, then add them.",
  steps:[
   ["Distribution to paid-in capital","Use cumulative distributions over paid-in capital to measure the realized component.","DPI = $60m ÷ $100m = 0.60×."],
   ["Residual value to paid-in capital","Divide the remaining estimated value by paid-in capital to measure the unrealized component.","RVPI = $90m ÷ $100m = 0.90×."],
   ["Total value to paid-in capital","Add the two multiples to get total value relative to contributions; this is not an annualized return.","TVPI = 0.60 + 0.90 = 1.50×."]
  ]
 },
 {
  chapter:"Portfolio Management",title:"Portfolio return per unit of risk",
  question:"An investor holds 50% in asset A and 50% in B. Their expected returns are 12% and 6%; standard deviations are 20% and 10%; correlation is zero. The risk-free rate is 2%. Find the expected portfolio return, volatility and ex ante Sharpe ratio for the same period.",
  hint:"Compute the weighted expected return and portfolio variance separately. Take the square root before calculating the risk-adjusted ratio.",
  steps:[
   ["Two-asset portfolio expected return","Weight the expected returns by their portfolio proportions.","Expected return = 0.5 × 12% + 0.5 × 6% = 9%."],
   ["Two-asset portfolio variance","Combine the weighted variances and covariance term, using decimal returns; zero correlation makes the covariance term zero.","Variance = 0.5² × 0.20² + 0.5² × 0.10² = 0.0125. Volatility = √0.0125 ≈ 11.18%."],
   ["Sharpe ratio","Divide expected excess return by portfolio volatility, both measured over the same period.","Expected Sharpe ratio = (9% − 2%) ÷ 11.18% ≈ 0.63."]
  ]
 }
);
