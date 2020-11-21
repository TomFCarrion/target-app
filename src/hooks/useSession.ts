import { useSelector, shallowEqual, RootStateOrAny } from 'react-redux';

const useSession = () =>
  useSelector(
    ({ session: { authenticated, user } }: RootStateOrAny) => ({
      authenticated,
      user
    }),
    shallowEqual
  );

export default useSession;