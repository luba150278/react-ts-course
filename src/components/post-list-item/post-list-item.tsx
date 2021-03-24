import React, { Component } from 'react';
import { ILabel } from '../../interfaces';
import './post-list-item.css';

export default class PostListItem extends Component<ILabel, { important: boolean; like: boolean }> {
  constructor(props: ILabel) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant(): void {
    this.setState(({ important }) => ({
      important: !important,
    }));
  }

  onLike(): void {
    this.setState(({ like }) => ({
      like: !like,
    }));
  }

  render(): JSX.Element {
    const { label } = this.props;
    const { important, like } = this.state;

    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) classNames += ' important';
    if (like) classNames += ' like';
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>
          {label}
        </span>

        <div className="d-flex item-buttons">
          <button className="btn-star btn-sm" onClick={this.onImportant}>
            <i className="fa fa-star" />
          </button>
          <button className="btn-trash btn-sm">
            <i className="fa fa-trash-o" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    );
  }
}
