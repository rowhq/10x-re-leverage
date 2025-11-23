import Link from 'next/link';
import { Header } from '@/components/ui/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
          {/* Background image overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80"></div>

          <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="text-orange">10X Leveraged</span>
                <br />
                Real Estate Tokens
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Max-leverage tokenized real estate. Loop your capital to amplify exposure
                up to 10X on income-producing properties.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Link
                  href="/invest"
                  className="px-10 py-4 bg-orange hover:bg-orange-light text-white font-bold text-lg rounded transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Invest Now →
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold text-lg rounded transition-all duration-200"
                >
                  Get the Details
                </Link>
              </div>

              <p className="text-sm text-gray-400 max-w-2xl mx-auto pt-4">
                Securities offered for accredited investors only. This is a high-risk investment product.
                You may lose your entire investment. Not FDIC insured.
              </p>
            </div>
          </div>
        </section>

        {/* What Is It Section */}
        <section className="py-20 bg-navy-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
                What Is Leverage Looping?
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    A high-octane strategy that uses tokenized real estate as collateral to borrow
                    and buy MORE tokens, multiplying your exposure up to 10X.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          Buy Real Estate Tokens
                        </h3>
                        <p className="text-gray-400">Tokenized ownership in Grant Cardone's premium properties</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          Borrow Against Tokens
                        </h3>
                        <p className="text-gray-400">Use your tokens as collateral to borrow capital</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          Loop to Amplify
                        </h3>
                        <p className="text-gray-400">Buy more tokens with borrowed funds, repeat up to 10X leverage</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
                    alt="Luxury Property"
                    className="w-full h-64 object-cover rounded mb-4"
                  />
                  <div className="text-center">
                    <div className="text-3xl font-black text-navy mb-2">CARDONE CAPITAL</div>
                    <div className="text-lg text-orange font-bold">10X LEVERAGE TOKENS</div>
                    <p className="text-sm text-gray-600 mt-3">
                      Premium multifamily properties with leverage looping capability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Investors Section */}
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                Why Investors Are Saying YES
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-navy-light rounded-lg p-8 border border-navy/20">
                  <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Passive Income</h3>
                  <p className="text-gray-300">
                    From high-occupancy multifamily properties with strong, consistent cash flow
                  </p>
                </div>

                <div className="bg-navy-light rounded-lg p-8 border border-navy/20">
                  <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">10X Amplification</h3>
                  <p className="text-gray-300">
                    Control $100K in real estate with just $10K through leverage looping
                  </p>
                </div>

                <div className="bg-navy-light rounded-lg p-8 border border-navy/20">
                  <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Secure & Institutional</h3>
                  <p className="text-gray-300">
                    We manage the real estate and the crypto under one trusted platform
                  </p>
                </div>

                <div className="bg-navy-light rounded-lg p-8 border border-navy/20">
                  <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Inflation Protection</h3>
                  <p className="text-gray-300">
                    Beat fiat depreciation with hard assets that hold real value
                  </p>
                </div>

                <div className="bg-navy-light rounded-lg p-8 border border-navy/20">
                  <div className="w-16 h-16 bg-navy/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Exponential Returns</h3>
                  <p className="text-gray-300">
                    A 10% property value increase becomes a 100% gain with 10X leverage
                  </p>
                </div>

                <div className="bg-navy-light rounded-lg p-8 border border-orange/20">
                  <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-orange mb-3">High Leverage Risk</h3>
                  <p className="text-gray-300">
                    Leverage multiplies exposure to gains AND losses. Liquidation can occur rapidly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                What They're Saying
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Rich The Kid */}
                <div className="bg-black rounded-lg overflow-hidden shadow-2xl h-[450px]">
                  <img
                    src="/testimonials/rich-the-kid.png"
                    alt="Rich The Kid"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>

                {/* Logan Paul */}
                <div className="bg-black rounded-lg overflow-hidden shadow-2xl h-[450px]">
                  <img
                    src="/testimonials/logan-paul.png"
                    alt="Logan Paul"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>

                {/* Usher Raymond */}
                <div className="bg-black rounded-lg overflow-hidden shadow-2xl h-[450px]">
                  <img
                    src="/testimonials/usher.png"
                    alt="Usher Raymond"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Warning CTA */}
        <section className="py-20 bg-orange/10 border-y border-orange/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                IMPORTANT: Understand The Risks
              </h2>
              <p className="text-xl text-gray-700">
                This is a <span className="text-orange font-bold">HIGH-RISK</span> leveraged investment product.
                Leverage amplifies both gains and losses. You can lose your entire investment.
              </p>
              <Link
                href="/risks"
                className="inline-block px-10 py-4 bg-orange hover:bg-orange text-white font-bold text-lg rounded transition-all shadow-lg"
              >
                Read Full Risk Disclosure
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-navy-dark border-t border-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center border-2 border-orange">
                      <div className="text-orange font-black text-sm">10X</div>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-bold text-white">CARDONE</div>
                      <div className="text-xs text-orange font-semibold">RE LEVERAGE</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Max-leverage tokenized real estate with 10X looping capability.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-4">Product</h4>
                  <ul className="space-y-2">
                    <li><Link href="/how-it-works" className="text-gray-400 hover:text-white text-sm">How It Works</Link></li>
                    <li><Link href="/invest" className="text-gray-400 hover:text-white text-sm">Invest Now</Link></li>
                    <li><Link href="/dashboard" className="text-gray-400 hover:text-white text-sm">Dashboard</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li><Link href="/risks" className="text-gray-400 hover:text-white text-sm">Risk Disclosure</Link></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-4">Contact</h4>
                  <p className="text-gray-400 text-sm">
                    Cardone Capital<br />
                    (310) 777-0255<br />
                    info@cardonecapital.com
                  </p>
                </div>
              </div>

              <div className="border-t border-navy pt-8 text-center text-gray-500 text-xs space-y-2">
                <p>
                  10X RE Leverage is a tokenized real estate investment product offered by Cardone Capital.
                </p>
                <p>
                  Securities offered for accredited investors only. This is a high-risk investment.
                  Not FDIC insured. You may lose your entire investment. Not financial advice.
                  Consult qualified professionals before investing.
                </p>
                <p className="pt-4">
                  © {new Date().getFullYear()} Cardone Capital. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
