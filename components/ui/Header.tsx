'use client';

import Link from 'next/link';
import { WalletButton } from '@/components/wallet/WalletButton';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center border-2 border-orange">
              <div className="text-orange font-black text-sm">10X</div>
            </div>
            <div className="ml-3">
              <div className="text-sm font-bold text-navy">CARDONE</div>
              <div className="text-xs text-orange font-semibold tracking-wide">RE LEVERAGE</div>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/how-it-works" className="text-navy hover:text-navy-light transition-colors font-medium text-sm">
            How It Works
          </Link>
          <Link href="/risks" className="text-orange hover:text-orange transition-colors font-medium text-sm">
            Risk Disclosure
          </Link>
          <Link href="/dashboard" className="text-navy hover:text-navy-light transition-colors font-medium text-sm">
            Dashboard
          </Link>
          <Link href="/invest" className="px-5 py-2 bg-orange hover:bg-orange-light text-white font-semibold text-sm rounded transition-colors">
            Get Started
          </Link>
        </div>

        <WalletButton />
      </nav>
    </header>
  );
}
