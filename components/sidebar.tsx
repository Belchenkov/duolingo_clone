import { cn } from '@/lib/utils';

type Props = {
    className?: string;
};

const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className ?? '',
        )}>
            Sidebar
        </div>
    );
};

export default Sidebar;
