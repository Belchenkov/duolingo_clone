'use client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

import { courses, userProgress } from '@/db/schema';
import Card from '@/app/(main)/courses/card';
import { upsertUserProgress } from '@/actions/user-progress';

type Props = {
    courses: typeof courses.$inferSelect[],
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId,
};

const List = ({ courses, activeCourseId }: Props) => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: number) => {
        if (pending) {
            return;
        }

        if (id === activeCourseId) {
            return router.push('/learn');
        }

        startTransition(() => {
            upsertUserProgress(id)
                .then()
                .catch(() => toast.error('Something went wrong!'));
        });
    };

    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    imageSrc={course.imageSrc}
                    title={course.title}
                    disabled={pending}
                    active={course.id === activeCourseId}
                    onClick={onClick}
                />
            ))}
        </div>
    );
};

export default List;
