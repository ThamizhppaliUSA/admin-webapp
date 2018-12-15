import React from "react";
import { Message, Grid } from 'semantic-ui-react'

export default () =>
  <div className='access-denied'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div,
      body > div > div > div > div.access-denied {
        height: 90%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '90%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600 }}>
        <Message negative>
          <Message.Header>Sorry, you do not have the valid access for the requested page!</Message.Header>
          <p>Please check with your System administrator to provide the necessary access</p>
        </Message>
      </Grid.Column>
    </Grid>
  </div>