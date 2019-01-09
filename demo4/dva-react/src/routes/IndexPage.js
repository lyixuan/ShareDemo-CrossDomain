import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class Users extends Component {
  constructor(props) {
    super(props);
  };

  query = (type) => {
    this.props.dispatch({
      type: `example/${type}`,
      payload: {
        id: 123,
      },
    });
  };

  IndexPage = () => {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>代理实现跨域演示</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li><button onClick={() => this.query('getUser')}>发起请求 get /user</button></li>
          <li><button onClick={() => this.query('postUser')}>发起请求 post /user</button></li>
          <li><button onClick={() => this.query('putUser')}>发起请求 put /user</button></li>
        </ul>
      </div>
    );
  };

  render() {
    return this.IndexPage();
  }
}

function mapStateToProps({ example }) {
  return { example };
}

export default connect(mapStateToProps)(Users);
