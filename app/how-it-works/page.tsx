import Link from 'next/link';
import { Header } from '@/components/ui/Header';

export default function HowItWorks() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-12">
        {/* Hero */}
        <section className="bg-navy py-16">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How <span className="text-orange">Leverage Looping</span> Works
            </h1>
            <p className="text-xl text-gray-300">
              Amplify your real estate exposure through strategic leverage multiplication
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-5xl">
          {/* Step by Step */}
          <div className="py-16 space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">The 5-Step Process</h2>
              <p className="text-gray-600">Understanding how leverage amplifies your position</p>
            </div>

            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-3">Initial Token Purchase</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You purchase 10X RE Leverage tokens with your capital (SOL, USDC, etc.).
                    These tokens represent fractional ownership in a portfolio of Grant Cardone's
                    income-producing commercial real estate properties.
                  </p>
                  <div className="bg-gray-light p-4 rounded border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium">
                      Example: You invest $10,000 and receive tokens worth $10,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-3">Borrow Against Your Holdings</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Use your tokens as collateral to borrow additional capital. The protocol allows you to
                    borrow up to a certain loan-to-value (LTV) ratio against your token holdings.
                  </p>
                  <div className="bg-gray-light p-4 rounded border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium">
                      Example: Borrow $8,000 against your $10,000 in tokens (80% LTV)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-3">Buy More Tokens (The Loop)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Take the borrowed capital and purchase more 10X RE Leverage tokens.
                    Now you own MORE tokens than your initial investment could buy.
                  </p>
                  <div className="bg-gray-light p-4 rounded border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium">
                      Example: Buy $8,000 more tokens. Total holdings now: $18,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-3">Repeat to Amplify (Up to 10X)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Repeat the process: borrow against your new larger position, buy more tokens,
                    and loop again. Each cycle amplifies your exposure to the underlying real estate.
                  </p>
                  <div className="bg-gray-light p-4 rounded border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium">
                      Example: After multiple loops, your $10,000 could control up to $100,000 in real estate exposure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-orange/10 border-2 border-orange rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-white">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange mb-3">Monitor Liquidation Risk</h3>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    If the value of the underlying real estate drops, your collateral ratio decreases.
                    When it falls below the minimum threshold, your position gets automatically liquidated
                    to repay the loan. This can happen FAST.
                  </p>
                  <div className="bg-orange/20 p-4 rounded border border-orange">
                    <p className="text-sm text-orange font-bold">
                      Critical: A 10% drop in property values could wipe out a 10X leveraged position entirely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leverage Math Example */}
          <div className="py-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">
              The Math: Understanding 10X Leverage
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-navy/10 border-2 border-navy rounded-lg p-8">
                <h4 className="text-2xl font-bold text-navy mb-4">
                  When Values Go Up 10%
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p>• Your $10,000 investment</p>
                  <p>• Controls $100,000 in real estate (10X)</p>
                  <p>• Property values increase 10% = +$10,000</p>
                  <p className="text-navy font-bold text-2xl pt-4">
                    YOUR GAIN: 100% return ($10,000 profit)
                  </p>
                </div>
              </div>

              <div className="bg-orange/10 border-2 border-orange rounded-lg p-8">
                <h4 className="text-2xl font-bold text-orange mb-4">
                  When Values Drop 10%
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p>• Your $10,000 investment</p>
                  <p>• Controls $100,000 in real estate (10X)</p>
                  <p>• Property values decrease 10% = -$10,000</p>
                  <p className="text-orange font-bold text-2xl pt-4">
                    YOUR LOSS: 100% (complete liquidation)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Income Distribution */}
          <div className="py-16 border-t border-gray-200">
            <div className="bg-navy rounded-lg p-10 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Rental Income & Carry Economics
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The leverage looping strategy benefits from positive carry: rental income exceeds
                borrowing costs, generating cash flow even with maximum leverage.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-navy/20 border border-navy rounded-lg p-6">
                  <div className="text-navy text-sm font-bold mb-2">RENTAL INCOME YIELD</div>
                  <div className="text-white text-4xl font-black">7.75%</div>
                  <p className="text-gray-300 text-sm mt-2">Annual yield from property rental income</p>
                </div>

                <div className="bg-orange/20 border border-orange rounded-lg p-6">
                  <div className="text-orange text-sm font-bold mb-2">BORROWING COST</div>
                  <div className="text-white text-4xl font-black">4.5%</div>
                  <p className="text-gray-300 text-sm mt-2">Annual interest rate on borrowed capital</p>
                </div>
              </div>

              <div className="bg-navy-light rounded-lg p-6 border-2 border-navy">
                <div className="text-center">
                  <div className="text-white text-sm font-bold mb-2">NET POSITIVE CARRY</div>
                  <div className="text-white text-5xl font-black mb-2">+3.25%</div>
                  <p className="text-gray-300">
                    You earn 7.75% from rent and pay 4.5% in interest = 3.25% positive cash flow
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 bg-navy-light rounded p-4">
                  <span className="text-orange text-xl">•</span>
                  <span className="text-gray-200">With 10X leverage on $10K investment, you control $100K in real estate</span>
                </div>
                <div className="flex items-start gap-3 bg-navy-light rounded p-4">
                  <span className="text-orange text-xl">•</span>
                  <span className="text-gray-200">Rental income: $100K × 7.75% = $7,750/year</span>
                </div>
                <div className="flex items-start gap-3 bg-navy-light rounded p-4">
                  <span className="text-orange text-xl">•</span>
                  <span className="text-gray-200">Interest cost: $90K borrowed × 4.5% = $4,050/year</span>
                </div>
                <div className="flex items-start gap-3 bg-navy/20 border border-navy rounded p-4">
                  <span className="text-white text-xl font-bold">✓</span>
                  <span className="text-white font-bold">Net cash flow: $3,700/year = 37% return on your $10K</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-16 text-center space-y-8 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-navy">
              Ready to <span className="text-orange">10X</span> Your Exposure?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/invest"
                className="px-10 py-4 bg-orange hover:bg-orange-light text-white font-bold text-lg rounded transition-all shadow-lg hover:shadow-xl"
              >
                Start Leveraging
              </Link>
              <Link
                href="/risks"
                className="px-10 py-4 bg-orange hover:bg-orange text-white font-bold text-lg rounded transition-all shadow-lg"
              >
                Read Risks First
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
