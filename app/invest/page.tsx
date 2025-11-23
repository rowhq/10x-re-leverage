'use client';

import { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { useWallet } from '@solana/wallet-adapter-react';
import Link from 'next/link';

export default function Invest() {
  const { connected } = useWallet();
  const [amount, setAmount] = useState('');
  const [leverage, setLeverage] = useState(5);
  const [acknowledged, setAcknowledged] = useState(false);

  const calculateMetrics = () => {
    const investmentAmount = parseFloat(amount) || 0;
    const totalExposure = investmentAmount * leverage;
    const borrowedAmount = totalExposure - investmentAmount;

    // Annual rates: 7.75% rental income, 4.5% borrowing cost
    const annualRentalYield = 0.0775;
    const annualBorrowingCost = 0.045;

    const monthlyYield = totalExposure * (annualRentalYield / 12);
    const monthlyInterest = borrowedAmount * (annualBorrowingCost / 12);
    const netMonthlyIncome = monthlyYield - monthlyInterest;
    const annualNetIncome = netMonthlyIncome * 12;

    return {
      investmentAmount,
      totalExposure,
      borrowedAmount,
      liquidationThreshold: ((1 - 1 / leverage) * 100).toFixed(1),
      monthlyYield: monthlyYield.toFixed(2),
      monthlyInterest: monthlyInterest.toFixed(2),
      netMonthlyIncome: netMonthlyIncome.toFixed(2),
      annualNetIncome: annualNetIncome.toFixed(2),
      returnOnInvestment: investmentAmount > 0 ? ((annualNetIncome / investmentAmount) * 100).toFixed(1) : '0',
    };
  };

  const metrics = calculateMetrics();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-12">
        {/* Hero */}
        <section className="bg-navy py-12">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              <span className="text-orange">Configure</span> Your Position
            </h1>
            <p className="text-xl text-gray-300">
              Start leveraging your real estate exposure with 10X looping
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-6xl py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Investment Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy mb-6">Investment Configuration</h2>

              {/* Amount Input */}
              <div className="mb-6">
                <label className="block text-navy font-semibold mb-2">Investment Amount (USD)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="10000"
                  className="w-full bg-gray-light border-2 border-gray-300 focus:border-orange rounded-lg px-4 py-3 text-navy text-lg focus:outline-none"
                />
              </div>

              {/* Leverage Slider */}
              <div className="mb-6">
                <label className="block text-navy font-semibold mb-2">
                  Leverage Multiplier: <span className="text-orange font-black">{leverage}X</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={leverage}
                  onChange={(e) => setLeverage(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-orange"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>1X (No Leverage)</span>
                  <span className="text-orange font-semibold">10X (Max Risk)</span>
                </div>
              </div>

              {/* Risk Acknowledgment */}
              <div className="mb-6 bg-orange/10 border border-orange/30 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acknowledged}
                    onChange={(e) => setAcknowledged(e.target.checked)}
                    className="mt-1 w-5 h-5 accent-orange"
                  />
                  <span className="text-sm text-gray-700">
                    I understand this is an <strong className="text-orange">EXTREME RISK</strong> product.
                    I have read the{' '}
                    <Link href="/risks" className="text-orange underline font-semibold">
                      risk disclosure
                    </Link>
                    {' '}and accept that I may lose my entire investment rapidly through liquidation.
                  </span>
                </label>
              </div>

              {/* Connect Wallet / Invest Button */}
              {!connected ? (
                <div className="bg-navy/10 border border-navy rounded-lg p-6 text-center">
                  <p className="text-navy mb-2 font-semibold">Connect your Solana wallet to continue</p>
                  <p className="text-sm text-gray-600">Use the wallet button in the header</p>
                </div>
              ) : (
                <button
                  disabled={!acknowledged || !amount || parseFloat(amount) <= 0}
                  className="w-full px-6 py-4 bg-orange hover:bg-orange-light disabled:bg-gray-300 disabled:cursor-not-allowed text-white disabled:text-gray-500 font-bold text-xl rounded transition-all duration-200"
                >
                  {acknowledged && amount && parseFloat(amount) > 0
                    ? 'EXECUTE LEVERAGE LOOP'
                    : 'COMPLETE REQUIREMENTS ABOVE'}
                </button>
              )}

              <p className="text-xs text-gray-500 mt-4 text-center">
                Demo mode - transactions are simulated
              </p>
            </div>

            {/* Metrics Display */}
            <div className="space-y-6">
              {/* Position Overview */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-4">Position Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-600">Your Investment</span>
                    <span className="text-navy font-bold text-lg">
                      ${metrics.investmentAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-600">Leverage Multiplier</span>
                    <span className="text-orange font-black text-lg">{leverage}X</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-600">Total RE Exposure</span>
                    <span className="text-navy font-bold text-lg">
                      ${metrics.totalExposure.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Borrowed Amount</span>
                    <span className="text-navy font-bold">
                      ${metrics.borrowedAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cash Flow Analysis */}
              <div className="bg-navy rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Cash Flow Analysis</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-navy-light rounded p-3">
                    <span className="text-gray-300">Rental Income (7.75%)</span>
                    <span className="text-white font-semibold">+${metrics.monthlyYield}/mo</span>
                  </div>
                  <div className="flex justify-between bg-navy-light rounded p-3">
                    <span className="text-gray-300">Interest Cost (4.5%)</span>
                    <span className="text-orange font-semibold">-${metrics.monthlyInterest}/mo</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-navy-light">
                    <span className="text-white font-bold">Net Monthly Cash Flow</span>
                    <span
                      className={`font-black text-lg ${
                        parseFloat(metrics.netMonthlyIncome) >= 0 ? 'text-white' : 'text-orange'
                      }`}
                    >
                      {parseFloat(metrics.netMonthlyIncome) >= 0 ? '+' : ''}${metrics.netMonthlyIncome}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-navy/20 border border-navy rounded p-3 mt-3">
                    <div>
                      <div className="text-white font-bold">Annual Net Income</div>
                      <div className="text-xs text-gray-300">Return on Investment</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-black text-xl">+${metrics.annualNetIncome}</div>
                      <div className="text-white text-sm font-bold">{metrics.returnOnInvestment}% ROI</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liquidation Risk */}
              <div className="bg-orange/10 border-2 border-orange rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange mb-4">Liquidation Risk</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Liquidation Threshold</span>
                    <span className="text-orange font-black text-lg">
                      -{metrics.liquidationThreshold}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    If property values drop by more than {metrics.liquidationThreshold}%, your position
                    will be automatically liquidated to repay your loan. You will lose your entire investment.
                  </p>
                </div>
              </div>

              {/* Scenario Analysis */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-4">Scenario Analysis</h3>
                <div className="space-y-4">
                  <div className="bg-navy/10 border border-navy rounded p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-navy font-semibold">+10% Property Value</span>
                      <span className="text-navy font-black">
                        +${(metrics.totalExposure * 0.1).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      {metrics.investmentAmount > 0 ? ((metrics.totalExposure * 0.1) / metrics.investmentAmount * 100).toFixed(0) : '0'}% return on your ${metrics.investmentAmount.toLocaleString()} investment
                    </p>
                  </div>

                  <div className="bg-orange/10 border border-orange rounded p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-orange font-semibold">-10% Property Value</span>
                      <span className="text-orange font-black">LIQUIDATED</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Total loss of your ${metrics.investmentAmount.toLocaleString()} investment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Warning */}
          <div className="mt-12 bg-orange/5 border border-orange/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-orange mb-4 text-center">
              IMPORTANT: Understand Before You Invest
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-navy mb-2">Positive Carry Economics</h4>
                <p className="text-gray-700">
                  Rental income (7.75%) exceeds borrowing cost (4.5%), generating {' '}
                  <span className="text-navy font-bold">+3.25%</span> net yield even with leverage.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2">Liquidation is Automatic</h4>
                <p className="text-gray-700">
                  When your collateral ratio falls below the threshold, the protocol automatically sells
                  your position. You cannot stop this or "wait for recovery."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2">Active Monitoring Required</h4>
                <p className="text-gray-700">
                  High leverage requires constant attention. You may need to add capital or reduce leverage
                  to avoid liquidation during market volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
