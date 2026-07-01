import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/lib/queryKeys';
import { getLessonProgress } from '@/services';

export function useGetLessonProgress(lessonId: string) {
  return useQuery({
    queryKey: queryKeys.lessonProgress.byLesson(lessonId),
    queryFn: () => getLessonProgress(lessonId),
    enabled: !!lessonId,
  });
}
