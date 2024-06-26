import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import { ValidatorChain } from '@/app/validators/validator-list/validator-list';
import BaseModal from '@/components/common/modal/base-modal';

interface OwnProps {
  chains: ValidatorChain[];
}

const ValidatorListItemChains: FC<OwnProps> = ({ chains }) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center space-x-0.5">
      <div className="mr-2 font-retro text-sm">{chains.length}:</div>
      {chains.slice(0, 3).map((chain) => (
        <Link key={chain.id} href={`/chains/${chain.id}`}>
          <Image
            src={chain.icon}
            alt={chain.name}
            width={24}
            height={24}
            className="h-6 min-h-6 w-6 min-w-6 rounded-full grayscale transition-all duration-300 hover:grayscale-0 "
          />
        </Link>
      ))}
      {chains.length > 3 && (
        <>
          <div
            onClick={() => setIsModalOpened(true)}
            className="h-8 min-h-8 w-8 min-w-8 cursor-pointer bg-[url('/img/icons/plus.svg')] bg-contain hover:bg-[url('/img/icons/plus-h.svg')]"
          ></div>
          <BaseModal opened={isModalOpened} onClose={() => setIsModalOpened(false)}>
            <div className="flex w-32 min-w-32 max-w-24 flex-row flex-wrap">
              {chains.map((chain) => (
                <Link key={chain.id} href={`/chains/${chain.id}`} className="m-1">
                  <Image
                    src={chain.icon}
                    alt={chain.name}
                    width={24}
                    height={24}
                    className="h-6 min-h-6 w-6 min-w-6 rounded-full grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </Link>
              ))}
            </div>
          </BaseModal>
        </>
      )}
    </div>
  );
};

export default ValidatorListItemChains;
