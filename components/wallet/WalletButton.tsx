'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function WalletButton() {
  return (
    <WalletMultiButton className="!bg-navy hover:!bg-navy-light !text-white !font-semibold !px-5 !py-2 !rounded !text-sm !transition-all !duration-200" />
  );
}
