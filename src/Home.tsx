import React, { FunctionComponent} from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import './App.css';
type Props = {};

const Home: FunctionComponent<Props> = () => {
  const history = useHistory();
  return (
    <Button variant="outline-primary" size="lg" onClick={() => history.push("/standup")} className="btn btn-default">Start stand up</Button>
  );
}

export default Home;
