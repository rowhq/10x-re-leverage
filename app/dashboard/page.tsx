'use client';

import { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Dashboard() {
  const { connected, publicKey } = useWallet();

  // Mock data - in production, fetch from blockchain/API
  const mockPortfolio = {
    tokenBalance: 15250,
    tokenPrice: 1.05,
    leverage: 6.5,
    totalExposure: 98625,
    borrowedAmount: 83375,
    equityValue: 15250,
    liquidationPrice: 0.89,
    currentPrice: 1.05,
    healthFactor: 1.18,
    monthlyYield: 493.13,
    monthlyInterest: 666.99,
    netMonthly: -173.86,
    totalEarned: 1245.50,
    properties: [
      { name: 'Cardone Plaza - Miami', value: 35000, allocation: 35.5 },
      { name: 'Cardone Tower - Atlanta', value: 28500, allocation: 28.9 },
      { name: 'Cardone Center - Dallas', value: 20125, allocation: 20.4 },
      { name: 'Cardone Complex - Phoenix', value: 15000, allocation: 15.2 },
    ],
  };

  const portfolio = mockPortfolio;
  const healthColor =
    portfolio.healthFactor > 1.5
      ? 'text-navy'
      : portfolio.healthFactor > 1.2
      ? 'text-orange'
      : 'text-orange';
  const liquidationDistance =
    ((portfolio.currentPrice - portfolio.liquidationPrice) / portfolio.currentPrice) * 100;

  if (!connected) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-black pt-24 pb-12 flex items-center justify-center">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="bg-gray-dark/50 border border-orange/20 rounded-lg p-12">
              <div className="text-6xl mb-6">🔒</div>
              <h1 className="text-4xl font-black text-white mb-4">WALLET NOT CONNECTED</h1>
              <p className="text-xl text-gray-400 mb-8">
                Connect your Solana wallet to view your leveraged real estate portfolio
              </p>
              <p className="text-sm text-gray-500">Use the wallet button in the header to connect</p>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
              YOUR <span className="text-orange">PORTFOLIO</span>
            </h1>
            <p className="text-gray-400">
              Wallet: {publicKey?.toString().slice(0, 4)}...{publicKey?.toString().slice(-4)}
            </p>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-dark/50 border border-orange/20 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-1">Total Exposure</div>
              <div className="text-3xl font-black text-orange">
                ${portfolio.totalExposure.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {portfolio.leverage}X leveraged position
              </div>
            </div>

            <div className="bg-gray-dark/50 border border-orange/20 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-1">Your Equity</div>
              <div className="text-3xl font-black text-white">
                ${portfolio.equityValue.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {portfolio.tokenBalance.toLocaleString()} tokens @ ${portfolio.tokenPrice}
              </div>
            </div>

            <div className="bg-gray-dark/50 border border-orange/20 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-1">Health Factor</div>
              <div className={`text-3xl font-black ${healthColor}`}>
                {portfolio.healthFactor.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {portfolio.healthFactor > 1.5
                  ? 'Safe'
                  : portfolio.healthFactor > 1.2
                  ? 'Monitor closely'
                  : 'High risk'}
              </div>
            </div>

            <div className="bg-gray-dark/50 border border-orange/20 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-1">Net Monthly</div>
              <div
                className={`text-3xl font-black ${
                  portfolio.netMonthly >= 0 ? 'text-navy' : 'text-orange'
                }`}
              >
                {portfolio.netMonthly >= 0 ? '+' : ''}${Math.abs(portfolio.netMonthly).toFixed(2)}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Yield - Interest = Cash Flow
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Liquidation Warning */}
              {portfolio.healthFactor < 1.3 && (
                <div className="bg-orange/10 border-2 border-orange rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-black text-orange mb-2">
                        LIQUIDATION WARNING
                      </h3>
                      <p className="text-white mb-3">
                        Your position is at risk. Token price is only{' '}
                        <span className="font-bold">{liquidationDistance.toFixed(1)}%</span> above
                        liquidation threshold.
                      </p>
                      <div className="flex gap-3">
                        <button className="px-4 py-2 bg-orange text-black font-bold rounded hover:bg-orange/90">
                          Add Collateral
                        </button>
                        <button className="px-4 py-2 bg-transparent border border-orange text-orange font-bold rounded hover:bg-orange/10">
                          Reduce Leverage
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Position Details */}
              <div className="bg-gray-dark/50 border border-orange/20 rounded-lg p-6">
                <h2 className="text-2xl font-black text-orange mb-6">POSITION DETAILS</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <span className="text-gray-400">Token Balance</span>
                    <span className="text-white font-bold">
                      {portfolio.tokenBalance.toLocaleString()} 10X-RE
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <span className="text-gray-400">Current Token Price</span>
                    <span className="text-white font-bold">${portfolio.currentPrice}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <span className="text-gray-400">Leverage Ratio</span>
                    <span className="text-orange font-black">{portfolio.leverage}X</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <span className="text-gray-400">Borrowed Amount</span>
                    <span className="text-white font-bold">
                      ${portfolio.borrowedAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <span className="text-gray-400">Total Exposure</span>
                    <span className="text-navy font-bold">
                      ${portfolio.totalExposure.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Liquidation Price</span>
                    <span className="text-orange font-black">${portfolio.liquidationPrice}</span>
                  </div>
                </div>

                {/* Liquidation Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Distance to Liquidation</span>
                    <span className={healthColor}>{liquidationDistance.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${
                        liquidationDistance > 20
                          ? 'bg-navy'
                          : liquidationDistance > 10
                          ? 'bg-orange'
                          : 'bg-orange'
                      }`}
                      style={{ width: `${Math.min(liquidationDistance * 5, 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Property Allocation */}
              <div className="bg-gray-dark/50 border border-orange/20 rounded-lg p-6">
                <h2 className="text-2xl font-black text-orange mb-6">PROPERTY ALLOCATION</h2>
                <div className="space-y-4">
                  {portfolio.properties.map((property, idx) => (
                    <div key={idx} className="bg-black/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">{property.name}</span>
                        <span className="text-orange font-bold">${property.value.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-orange"
                            style={{ width: `${property.allocation}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-400">{property.allocation}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Cash Flow */}
              <div className="bg-gray-dark/50 border border-orange/20 rounded-lg p-6">
                <h3 className="text-xl font-black text-white mb-4">CASH FLOW</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Monthly Yield</span>
                    <span className="text-navy font-semibold">
                      +${portfolio.monthlyYield.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Monthly Interest</span>
                    <span className="text-orange font-semibold">
                      -${portfolio.monthlyInterest.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-gray-700 pt-3 flex justify-between">
                    <span className="text-white font-semibold">Net Monthly</span>
                    <span
                      className={`font-black ${
                        portfolio.netMonthly >= 0 ? 'text-navy' : 'text-orange'
                      }`}
                    >
                      {portfolio.netMonthly >= 0 ? '+' : ''}${portfolio.netMonthly.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-gray-700 pt-3 flex justify-between">
                    <span className="text-gray-400 text-sm">Total Earned</span>
                    <span className="text-navy font-bold">
                      +${portfolio.totalEarned.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-dark/50 border border-orange/20 rounded-lg p-6">
                <h3 className="text-xl font-black text-white mb-4">QUICK ACTIONS</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-orange hover:bg-orange-light text-black font-bold rounded-lg transition-all">
                    Increase Position
                  </button>
                  <button className="w-full px-4 py-3 bg-transparent border border-orange hover:bg-orange/10 text-orange font-bold rounded-lg transition-all">
                    Reduce Leverage
                  </button>
                  <button className="w-full px-4 py-3 bg-transparent border border-orange hover:bg-orange/10 text-orange font-bold rounded-lg transition-all">
                    Exit Position
                  </button>
                  <button className="w-full px-4 py-3 bg-transparent border border-gray-700 hover:bg-gray-700/30 text-gray-400 font-bold rounded-lg transition-all">
                    Claim Rewards
                  </button>
                </div>
              </div>

              {/* Risk Meter */}
              <div className="bg-black border border-orange/20 rounded-lg p-6">
                <h3 className="text-xl font-black text-orange mb-4">RISK METER</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Position Risk Level</div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                        <div
                          key={level}
                          className={`flex-1 h-4 rounded ${
                            level <= portfolio.leverage
                              ? level <= 3
                                ? 'bg-navy'
                                : level <= 6
                                ? 'bg-orange'
                                : 'bg-orange'
                              : 'bg-gray-800'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Your current {portfolio.leverage}X leverage is considered{' '}
                    <span className="text-orange font-bold">HIGH RISK</span>
                  </div>
                </div>
              </div>

              {/* Educational Tip */}
              <div className="bg-orange/10 border border-orange/30 rounded-lg p-6">
                <h4 className="font-bold text-orange mb-2">Tip</h4>
                <p className="text-sm text-gray-300">
                  Monitor your health factor daily. If it drops below 1.1, add collateral immediately
                  to avoid liquidation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
