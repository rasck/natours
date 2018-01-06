import React from "react";
import { Row, Column } from "../styles";

export const FullGrid = () => (
  <div>
    <Row className="row">
      <Column span="1" columns="2">
        Col 1 of 2
      </Column>
      <Column span="1" columns="2">
        Col 1 of 2
      </Column>
    </Row>
    <Row className="row">
      <Column span="1" columns="3">
        Col 1 of 3
      </Column>
      <Column span="1" columns="3">
        Col 1 of 3
      </Column>
      <Column span="1" columns="3">
        Col 1 of 3
      </Column>
    </Row>
    <Row className="row">
      <Column span="1" columns="3">
        Col 1 of 3
      </Column>
      <Column span="2" columns="3">
        _Col 2 of 3
      </Column>
    </Row>
    <Row className="row">
      <Column span="1" columns="4">
        Col 1 of 4
      </Column>
      <Column span="1" columns="4">
        Col 1 of 4
      </Column>
      <Column span="1" columns="4">
        Col 1 of 4
      </Column>
      <Column span="1" columns="4">
        Col 1 of 4
      </Column>
    </Row>
    <Row className="row">
      <Column span="1" columns="4">
        Col 1 of 4
      </Column>
      <Column span="1" columns="4">
        Col 1 of 4
      </Column>
      <Column span="2" columns="4">
        Col 2 of 4
      </Column>
    </Row>
    <Row className="row">
      <Column span="1" columns="4">
        Col 1 of 4
      </Column>
      <Column span="3" columns="4">
        Col 3 of 4
      </Column>
    </Row>
    <Row className="row">
      <Column span="4" columns="4">
        Col 4 of 4
      </Column>
    </Row>
    <Row className="row">
      <Column span="5" columns="6">
        Col 5 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
    </Row>
    <Row className="row">
      <Column span="4" columns="6">
        Col 4 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
    </Row>
    <Row className="row">
      <Column span="3" columns="6">
        Col 3 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
    </Row>
    <Row className="row">
      <Column span="2" columns="6">
        Col 2 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
    </Row>
    <Row className="row">
      <Column span="2" columns="6">
        Col 2 of 6
      </Column>
      <Column span="3" columns="6">
        Col 3 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
    </Row>
    <Row className="row">
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
      <Column span="1" columns="6">
        Col 1 of 6
      </Column>
    </Row>
  </div>
);
