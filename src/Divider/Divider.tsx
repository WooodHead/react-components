import * as React from 'react';
import { props, t } from '../utils';
import * as cx from 'classnames';

export type Orientation = 'horizontal' | 'vertical'
export type Size = 'small' | 'medium' | 'large' | 'no-margin'

export type DividerDefaultProps = {
  /** divider orientation (vertical | horizontal) */
  orientation: Orientation,
  /** size of margins */
  size: Size,
  /** an optional style object to pass to top level element of the component */
  style: React.CSSProperties,
};

export namespace Divider {
  export type Props = Partial<DividerDefaultProps>;
}
type DividerDefaultedProps = DividerDefaultProps;

const orientation = t.enums.of(['horizontal', 'vertical'], 'orientation');
const sizeType = t.enums.of(['small', 'medium', 'large', 'no-margin'], 'sizeType');

export const Props = {
  orientation: t.maybe(orientation),
  style: t.maybe(t.Object),
  size: t.maybe(sizeType)
};

/**
 * A simple component used to visually divide UI elements
 */
@props(Props)
export class Divider extends React.PureComponent<Divider.Props> {

  static defaultProps: DividerDefaultProps = {
    orientation: 'vertical',
    size: 'small',
    style: {}
  };

  render() {
    const { orientation, style, size } = this.props as DividerDefaultedProps;
    return (
      <div className={cx('divider', orientation, size)} style={style} />
    );
  }
}
