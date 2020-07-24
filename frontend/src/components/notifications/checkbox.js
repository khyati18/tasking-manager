import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  };
  static defaultProps = {
    checked: false,
    disabled: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  };

  _handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { disabled } = this.props;
    const { checked } = this.state;
    return (
      <div className="React__checkbox">
        <label>
          <input 
            type="checkbox"
            className="React__checkbox--input"
            checked={checked}
            disabled={disabled}
            onChange={this._handleChange}
          />
          <span 
            className="React__checkbox--span"
          />
        </label>
      </div>
    );
  }
}