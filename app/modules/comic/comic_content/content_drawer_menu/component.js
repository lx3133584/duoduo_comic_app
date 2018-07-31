import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContentDrawerIcon } from '..';

const ContainStyled = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

class ContentDrawerMenuComponent extends PureComponent {
  static propTypes = {
    switchBottomType: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };

  constructor(props) {
    super(props);
    const { switchBottomType, navigation } = props;
    this.menu_list = [
      {
        icon_type: 'list',
        title: '目录',
        onPress: () => navigation.navigate('DrawerOpen'),
      },
      {
        icon_type: 'progress',
        title: '进度',
        onPress: () => switchBottomType('progress'),
      },
      {
        icon_type: 'setting',
        title: '设置',
        onPress: () => switchBottomType('setting'),
      },
    ];
  }

  static height = 80;

  render() {
    return (
      <ContainStyled style={{ height: ContentDrawerMenuComponent.height }}>
        {
          this.menu_list.map(({ icon_type, title, onPress }) => <ContentDrawerIcon icon_type={icon_type} title={title} key={icon_type} onPress={onPress} />)
        }
      </ContainStyled>
    );
  }
}

export default ContentDrawerMenuComponent;
