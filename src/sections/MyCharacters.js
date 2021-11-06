import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import IndividualCharacter from "../components/IndividualCharacter";

import { Link } from "react-router-dom";

import "../styles/MyCharacters.css";

const MyCharacters = (props) => {
  // const [ modalOpen, setModalOpen ] = useState(false);

  useEffect(() => {
    props.fetchCharacters();
  }, []);

  return (
    <div id="listView">
      <div id="listViewHeader">
        <h2
          style={{ textAlign: "left", paddingLeft: "50px", marginTop: "30px" }}
        >
          My Characters
        </h2>
        <div id="characterSection">
          <Container fluid={true} className="bootstrapContainer">
            <Row className="bootstrapRow">
              {props.characterList ? (
                props.characterList.map((val, i) => {
                  return (
                    <Col xl="4">
                      <Link to={`/viewcharacter/${val.id}`}>
                        <IndividualCharacter charName={val.CharName} />
                      </Link>
                    </Col>
                  );
                })
              ) : (
                <></>
              )}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MyCharacters;
