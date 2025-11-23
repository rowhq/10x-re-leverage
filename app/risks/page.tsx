import { Header } from '@/components/ui/Header';
import Link from 'next/link';

export default function Risks() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-12">
        {/* Hero Warning */}
        <section className="bg-orange py-16">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              EXTREME RISK WARNING
            </h1>
            <p className="text-xl text-white/90">
              This is NOT a traditional investment. You can lose everything.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-5xl">
          {/* Mandatory Disclosure */}
          <div className="py-12">
            <div className="bg-orange/10 border-2 border-orange rounded-lg p-8">
              <h2 className="text-3xl font-bold text-orange mb-4">MANDATORY RISK DISCLOSURE</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                10X RE Leverage tokens represent an EXTREMELY HIGH-RISK investment product that combines
                the volatility of cryptocurrency markets with the illiquidity of real estate and the
                amplification effects of maximum leverage. This product is suitable ONLY for sophisticated
                investors who:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange font-bold text-xl flex-shrink-0">•</span>
                  <span className="text-gray-700">Fully understand leverage, liquidation mechanics, and margin calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange font-bold text-xl flex-shrink-0">•</span>
                  <span className="text-gray-700">Can afford to lose their ENTIRE investment without financial hardship</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange font-bold text-xl flex-shrink-0">•</span>
                  <span className="text-gray-700">Have significant investment experience with high-risk assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange font-bold text-xl flex-shrink-0">•</span>
                  <span className="text-gray-700">Are accredited investors meeting SEC requirements</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Primary Risks */}
          <div className="py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-navy mb-8">PRIMARY RISKS</h2>

            <div className="space-y-6">
              {[
                {
                  title: "1. Liquidation Risk",
                  description: "This is the #1 risk. When you leverage your position, even small declines in the underlying asset value can trigger automatic liquidation.",
                  example: "You invest $10,000 with 10X leverage. Property values drop just 10%. Your position is automatically liquidated. You lose your entire $10,000 investment. This can happen in hours or days."
                },
                {
                  title: "2. Real Estate Market Risk",
                  description: "Commercial real estate values fluctuate based on economic conditions, interest rates, occupancy rates, and local market factors. Property values can decline significantly during economic downturns.",
                  example: null
                },
                {
                  title: "3. Cryptocurrency Volatility",
                  description: "This product operates on the Solana blockchain and involves cryptocurrency transactions. Crypto markets are extremely volatile. Network failures, smart contract bugs, exchange hacks, and regulatory changes can result in total loss of funds.",
                  example: null
                },
                {
                  title: "4. Leverage Amplification",
                  description: "Leverage multiplies BOTH gains AND losses. While 10X leverage means 10X returns when values increase, it also means 10% decline = 100% loss (complete wipeout).",
                  example: null
                },
                {
                  title: "5. Liquidity Risk",
                  description: "There is NO guarantee you can sell your tokens when you want to exit. Token liquidity depends on market demand. During stress periods, you may be unable to sell at any price, or only at severe discounts.",
                  example: null
                },
                {
                  title: "6. Smart Contract Risk",
                  description: "This product relies on blockchain smart contracts. Smart contracts can contain bugs, vulnerabilities, or be exploited by hackers. Smart contract failures can result in permanent, irreversible loss of all funds with no recourse.",
                  example: null
                },
                {
                  title: "7. Regulatory Risk",
                  description: "Tokenized securities face evolving regulatory landscapes. Government actions, regulatory changes, or legal challenges could make this product illegal, force liquidation, or prevent trading.",
                  example: null
                },
                {
                  title: "8. No Insurance or Guarantees",
                  description: "This investment is NOT insured by FDIC, SIPC, or any government agency. There are NO guarantees of principal protection, returns, or liquidity. You may lose everything.",
                  example: null
                }
              ].map((risk, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-navy mb-3">{risk.title}</h3>
                  <p className="text-gray-700 mb-3">{risk.description}</p>
                  {risk.example && (
                    <div className="bg-orange/10 border border-orange/30 rounded p-4">
                      <p className="text-sm text-orange font-semibold">Example Scenario:</p>
                      <p className="text-sm text-gray-700 mt-2">{risk.example}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final Warning */}
          <div className="py-12 border-t border-gray-200">
            <div className="bg-navy rounded-lg p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">FINAL WARNING</h2>
              <p className="text-xl text-gray-200 mb-6">
                By proceeding, you acknowledge that you have read, understood, and accept these risks.
              </p>
              <p className="text-gray-300 mb-8">
                This is not financial advice. Consult with qualified legal, tax, and financial advisors
                before investing. Only invest capital you can afford to lose completely.
              </p>
              <div className="inline-block bg-orange px-8 py-4 rounded">
                <p className="text-white font-bold text-lg">
                  IF YOU DO NOT FULLY UNDERSTAND THESE RISKS, DO NOT INVEST.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="py-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-block px-10 py-4 bg-navy hover:bg-navy-light text-white font-bold text-lg rounded transition-all shadow-lg"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
