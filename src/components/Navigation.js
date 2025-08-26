import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';

export default function Navigation() {
  return (
    <Menu borderless style={{ padding: '8px 0' }}>
      <Menu.Item header style={{ fontWeight: 700 }}>
        DEV@Deakin
      </Menu.Item>

      <Menu.Item style={{ flex: 1 }}>
        <Input placeholder="Search..." fluid />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary>Post</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Login</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
