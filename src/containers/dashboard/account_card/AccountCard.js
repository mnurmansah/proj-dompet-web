import React from 'react';
import { Card } from 'react-bootstrap';
import './AccountCard.scss';

const AccountCard = ({ account: { name, balance, background } }) => (
  <Card 
    className="mgb-8 account-card" 
    style={{ background: background }}
  >
    <Card.Body className="pd-8">
      <Card.Title className="font-weight-normal fs-12">
        { name }
      </Card.Title>
      <Card.Text className="text-right font-weight-bold fs-14">
        { `Rp ${balance}` }
      </Card.Text>
    </Card.Body>
  </Card>
)

export default AccountCard;