import Image from 'next/image';
import Link from 'next/link';
import {
    ClerkLoaded,
    ClerkLoading,
    UserButton,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';

import { cn } from '@/lib/utils';
import SidebarItem from '@/components/sidebar-item';

type Props = {
    className?: string;
};

const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className ?? '',
        )}>
            <Link href='/learn'>
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image
                        src="/mascot.png"
                        height={40}
                        width={40}
                        alt="Mascot"
                    />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                        Lingo
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem
                 href='/learn'
                 iconSrc='/learn.svg'
                 label='Learn'
                />
                <SidebarItem
                 href='/leaderboard'
                 iconSrc='/leaderboard.svg'
                 label='Leaderboard'
                />
                <SidebarItem
                 href='/quests'
                 iconSrc='/quests.svg'
                 label='Quests'
                />
                <SidebarItem
                 href='/shop'
                 iconSrc='/shop.svg'
                 label='Shop'
                />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className='h-5 w-5 animate-spin text-muted-foreground' />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl='/' />
                </ClerkLoaded>
            </div>
        </div>
    );
};

export default Sidebar;
