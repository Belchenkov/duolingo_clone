import StickyWrapper from '@/components/sticky-wrapper';
import FeedWrapper from '@/components/feed-wrapper';
import UserProgress from '@/components/user-progress';
import Header from '@/app/(main)/learn/header';

const LearnPage = () => {
    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>
            <StickyWrapper>
                <UserProgress
                    activeCourse={{
                        title: 'Spanish',
                        imageSrc: '/es.svg'
                    }}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title='Spanish' />
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;
