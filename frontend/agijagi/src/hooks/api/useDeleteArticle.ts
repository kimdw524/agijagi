import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteArticle } from '../../apis/board';

import useDialog from '../useDialog';

const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  const { alert } = useDialog();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteArticle,
    mutationKey: [],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['articleList'],
      });
    },
    onError: () => {
      alert('오류가 발생했어요.');
    },
  });

  return { mutate, isPending };
};

export default useDeleteArticle;
