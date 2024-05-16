'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

type Props = {
    label: string;
    iconSrc: string;
    href: string;
};

const SidebarItem = ({ label, iconSrc, href }: Props) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Button
            variant={active ? 'sidebarOutline' : 'sidebar'}
            asChild
            className='justify-start h-[52px]'
        >
            <Link href={href}>
                <Image
                    src={iconSrc}
                    alt={label}
                    className='mr-5'
                    height={32}
                    width={32}
                />
                {label}
            </Link>
        </Button>
    );
};

export default SidebarItem;
