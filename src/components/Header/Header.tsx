import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  ConfigsWrapper,
  Link,
  Links,
  Logo,
  MenuNav,
  Option,
  Profile,
  SearchInput,
  WrapperLogoSearch,
} from '..';
import * as Styled from './styles';

import { ReactComponent as HomeImg } from '../../assets/home.svg';
import { ReactComponent as PlayImg } from '../../assets/play.svg';
import { ReactComponent as MarketImg } from '../../assets/market.svg';
import { ReactComponent as GroupImg } from '../../assets/group.svg';
import { ReactComponent as GammingImg } from '../../assets/gamming.svg';
import { ReactComponent as MessengerImg } from '../../assets/messenger.svg';
import { ReactComponent as NotificationImg } from '../../assets/bell.svg';
import { ReactComponent as MoreImg } from '../../assets/arrow-down.svg';
import { ReactComponent as Menu } from '../../assets/sandwich.svg';

import { IUser } from '../../types/User';
import { useMediaQuery } from '../../utils/useMediaQuery';

type HeaderProps = {
  user: IUser;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const Header = ({
  user,
  setIsSearching,
  setSearchValue,
}: HeaderProps): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mediaQuery = useMediaQuery('(max-width: 960px)');

  const handleOpen = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsSearching(focus);
  }, [focus]);

  const renderMenu = () =>
    isMenuOpen ? (
      <MenuNav user={user} userImg={user.avatar_url} />
    ) : (
      <div></div>
    );

  const handleType = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Styled.HeaderContainer>
      <WrapperLogoSearch>
        {!focus ? <Logo /> : <div style={{ display: 'none' }}> </div>}
        <SearchInput focus={focus} setFocus={setFocus} onChange={handleType} />
      </WrapperLogoSearch>
      <Links>
        {mediaQuery ? (
          <>
            <Link>
              <Menu onClick={handleOpen} />
              {renderMenu()}
            </Link>
          </>
        ) : (
          <>
            <Link selected={true}>
              <HomeImg />
            </Link>
            <Link>
              <PlayImg />
            </Link>
            <Link>
              <MarketImg />
            </Link>
            <Link>
              <GroupImg />
            </Link>
            <Link>
              <GammingImg />
            </Link>
          </>
        )}
      </Links>
      <ConfigsWrapper>
        <Profile image={user.avatar_url} name={user.name.split(' ')[0]} />
        <Option>
          <MessengerImg />
        </Option>
        <Option>
          <NotificationImg />
        </Option>
        <Option>
          <MoreImg />
        </Option>
      </ConfigsWrapper>
    </Styled.HeaderContainer>
  );
};
