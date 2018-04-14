import React, { PureComponent } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { brand_primary } from '../../../../theme';
import { ContentDrawerSettingCheckbox } from '..';

const ContainStyled = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const options = [
  {
    text: '滚动模式',
    value: 'scroll',
  },
  {
    text: '翻页模式',
    value: 'page_turning',
  },
]

class ContentDrawerReadingModeComponent extends PureComponent {
  static propTypes = {
    switchReadingMode: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
  };
  switchReadingMode = value => {
    const { switchReadingMode } = this.props;
    switchReadingMode(value);
  };
  render() {
    const { mode } = this.props;
    return (
      <ContainStyled>
        <ContentDrawerSettingCheckbox
          changeValue={this.switchReadingMode}
          value={mode}
          options={options} />
      </ContainStyled>
    );
  }
}

export default ContentDrawerReadingModeComponent;
