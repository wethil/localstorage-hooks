import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import TabContent from 'rc-tabs/lib/TabContent';
import React, { PureComponent } from 'react';
import DateTab from './components/DateTab';
import Purchase from './components/Purchase';
import RoomTab from './components/RoomTab';
import './HomePage.scss';


function TabContainer({ children }) {
  return (
    <div className='row'>
      <div className='twelve columns centered' >
        { children }
      </div>
    </div>
  );
}


class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
      activatedKeys: ['1'],
    };
  }

  onChange(activeKey) {
    this.setState({
      activeKey,
    });
  }
  onTabClick() {
    return;
  }

  handleMove(activeKey) {
    const { activatedKeys } = this.state;
    const newActivatedKeys = [...activatedKeys];
    if (!newActivatedKeys.includes(activeKey)) {
      newActivatedKeys.push(activeKey);
    }
    this.setState({
      activeKey,
      activatedKeys: newActivatedKeys
    });
  }

  render() {
    const { activatedKeys } = this.state;
    return (
      <div className='container'>
        <TabContainer>
          <Tabs
            destroyInactiveTabPane
            activeKey={this.state.activeKey}
            onChange={(i) => this.onChange(i)}
            renderTabBar={() => <ScrollableInkTabBar onTabClick={(i) => this.onTabClick(i)} />}
            renderTabContent={() => <TabContent />}
          >
            <TabPane tab='Tarih' key='1' disabled={!activatedKeys.includes('1')}>
              <TabContainer>
                <DateTab handleMove={(i) => this.handleMove(i)} />
              </TabContainer>
            </TabPane>
            <TabPane tab='Oda' key='2' disabled={!activatedKeys.includes('2')}>
              <TabContainer>
                <RoomTab handleMove={(i) => this.handleMove(i)} />
              </TabContainer>
            </TabPane>
            <TabPane tab='Ödeme' key='3' disabled={!activatedKeys.includes('3')}>
              <TabContainer>
                <Purchase handleMove={(i) => this.handleMove(i)} />
              </TabContainer>
            </TabPane>
          </Tabs>
        </TabContainer>
      </div>
    );
  }
}


export default HomePage;

