import type { ReactNode } from "react";
import AddMerchantButton from "@/components/merchant/MerchantModal";
import SearchInput from "@/components/shared/SearchInput";
import Image from "next/image";

const MerchantsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-[85dvh] px-6 py-[7px] space-y-6">
      {/* Header */}
      {/* NOTE: tweak [bg-cover, bg-center, bg-blend-color, bg-no-repeat] properties to achieve HeaderBar design specs in production   */}
      <div className="flex items-center justify-between px-6 py-3 rounded-[11px] [background-image:linear-gradient(90deg,_#F3E4FF9C,_#F3F3E3BD,_#F8F8F8,_#F4ECECE5,_#EAF5E6AB),url('/maerchants-walletBar-bg.png')] bg-cover bg-center bg-blend- color bg-no-repeat">
        <div className="flex items-center gap-4">
          <Image
            src="/icons/merchant-wallet.svg"
            alt="img"
            width={35}
            height={35}
            className="object-contain"
          />

          <div>
            <p className="text-sm font-medium text-muted-foreground">
              TOTAL ALLOCATION
            </p>
            <h2 className="text-2xl font-bold">₦{`0.00`}</h2>
          </div>
        </div>

        {/* Add Merchant trigger Button */}
        <AddMerchantButton />
      </div>

      {/* Search-input  & accredited merchants count */}
      <div className="flex items-center justify-between">
        {/* NOTE: re-introduce the accredited merchants count entry */}
        <p className="text-sm text-muted-foreground">Accredited merchants</p>
        <SearchInput />
      </div>

      {/* Dynamic content (from page.tsx inside /merchants/*) */}
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
};

export default MerchantsLayout;
