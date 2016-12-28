import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

export const widgets = [
  'Calendar',
  'Combobox',
  'DateTimePicker',
  'DropdownList',
  'Multiselect',
  'NumberPicker',
  'SelectList',
];


export default function WidgetNav() {
  return (
    <Nav role='navigation'>
      {widgets.map(name => (
        <LinkContainer key={name} to={`/${name.toLowerCase()}`}>
          <NavItem>{name}</NavItem>
        </LinkContainer>
      ))}
    </Nav>
  )
}