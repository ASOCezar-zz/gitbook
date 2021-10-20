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
import { Header, Main } from '../../components';

const Home: FunctionComponent = () => {
  document.title = 'Gitbook | Home';

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');
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

  const renderMain = () =>
    isLoading ? (
      <div></div>
    ) : (
      <Main isSearching={isSearching} searchValue={searchValue} />
    );

  return (
    <Styled.Container>
      <Header
        user={user}
        setIsSearching={setIsSearching}
        setSearchValue={setSearchValue}
      />
      {renderMain()}
    </Styled.Container>
  );
};

export default Home;
