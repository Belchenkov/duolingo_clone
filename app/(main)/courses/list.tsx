'use client';

import { courses } from '@/db/schema';
import Card from '@/app/(main)/courses/card';

type Props = {
    courses: typeof courses.$inferSelect[],
    activeCourseId: number,
};

const List = ({ courses, activeCourseId }: Props) => {
    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    imageSrc={course.imageSrc}
                    title={course.title}
                    disabled={false}
                    active={course.id === activeCourseId}
                    onClick={() => {}}
                />
            ))}
        </div>
    );
};

export default List;
