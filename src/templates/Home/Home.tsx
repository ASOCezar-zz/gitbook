import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as Styled from './styles';
import { useHistory } from 'react-router';
import { UserContext } from '../../context/UserProvider/context';
import { loadApi } from '../../services/load-api';
import { Header } from '../../components';

const Home: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    const localUser = window.localStorage.getItem('gitbook-user');

    if (!localUser) {
      history.push('/login');
      return;
    }

    loadUser(localUser);
  }, []);

  const loadUser = async (localUser: string) => {
    const loadedUser = await loadApi(localUser);
    loadedUser !== null && setUser(loadedUser);
    setIsLoading(false);
  };

  return (
    <Styled.Container>
      <Header user={user} />
      {isLoading ? (
        <div></div>
      ) : (
        <main>
          <nav></nav>
          <section></section>
          <aside></aside>
        </main>
      )}
    </Styled.Container>
  );
};

export default Home;
