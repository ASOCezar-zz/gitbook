import React, { useState } from 'react';
import {
  ConfigsWrapper,
  Link,
  Links,
  Logo,
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

import menuIcon from '../../assets/menu.png';
import { IUser } from '../../types/User';
import { useMediaQuery } from '../../utils/useMediaQuery';

type HeaderProps = {
  user: IUser;
};

export const Header = ({ user }: HeaderProps): JSX.Element => {
  const [focus, setFocus] = useState(false);

  const mediaQuery = useMediaQuery('(max-width: 960px)');

  return (
    <Styled.HeaderContainer>
      <WrapperLogoSearch>
        {!focus ? <Logo /> : <div style={{ display: 'none' }}> </div>}
        <SearchInput focus={focus} setFocus={setFocus} />
      </WrapperLogoSearch>
      <Links>
        {mediaQuery ? (
          <>
            <Link>
              <Menu />
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
          <img src={menuIcon} width="20px" height="20px" />
        </Option>
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
