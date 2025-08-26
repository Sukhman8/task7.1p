import React from 'react';
import { Grid, List, Icon } from 'semantic-ui-react';

export default function Footer() {
  return (
    <div style={{ background: '#2e8886', color: '#fff', padding: '30px 0', marginTop: 20 }}>
      <div className="ui container">
        <Grid columns={3} divided stackable>
          <Grid.Row>
            <Grid.Column>
              <h4 style={{ color: '#fff' }}>Explore</h4>
              <List link>
                <List.Item style={{ color: '#fff' }}>Home</List.Item>
                <List.Item style={{ color: '#fff' }}>Questions</List.Item>
                <List.Item style={{ color: '#fff' }}>Articles</List.Item>
                <List.Item style={{ color: '#fff' }}>Tutorials</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <h4 style={{ color: '#fff' }}>Support</h4>
              <List link>
                <List.Item style={{ color: '#fff' }}>FAQs</List.Item>
                <List.Item style={{ color: '#fff' }}>Help</List.Item>
                <List.Item style={{ color: '#fff' }}>Contact Us</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <h4 style={{ color: '#fff' }}>Stay connected</h4>
              <Icon name="facebook" size="large" inverted />
              <Icon name="twitter" size="large" inverted />
              <Icon name="instagram" size="large" inverted />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <div>DEV@Deakin 2022</div>
          <div style={{ marginTop: 6 }}>Privacy Policy &nbsp; | &nbsp; Terms &nbsp; | &nbsp; Code of Conduct</div>
        </div>
      </div>
    </div>
  );
}
