import React from 'react';
import './index.css';

interface Props {
  sans: any;
}

interface State {}

class Tmp extends React.Component<Props, State> {
  render() {
    return (
      <div className="Hello">
        <h1>환영합니다!</h1>
        <p>
          이것은 심심해서 만든 ticaOS입니다. ticaOS는{' '}
          <a href="https://github.com/facebook/react" target="_blank">
            React
          </a>
          로 개발되었습니다. 모든 소스 코드는{' '}
          <a href="https://github.com/thoratica/ticaOS" target="_blank">
            여기
          </a>
          에서 확인하실 수 있습니다. 심심하시면{' '}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              let tmp = this.props.sans.state.apps;
              for (let i of tmp) {
                if (i.title === 'Settings') {
                  console.log('wa');
                  i.show = true;
                  this.props.sans.setState(tmp);
                }
              }
            }}
          >
            설정
          </a>
          이나 확인해보세요 ㅎ
        </p>
        <button
          onClick={() => {
            console.log('test');
            this.props.sans.state.dark
              ? this.props.sans.setState({ dark: false })
              : this.props.sans.setState({ dark: true });
          }}
        >
          다크/라이트 모드 전환
        </button>
      </div>
    );
  }
}

export default Tmp;
