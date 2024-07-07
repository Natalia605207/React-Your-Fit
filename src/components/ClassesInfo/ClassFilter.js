import React from 'react'; 
import '../../App.css'; 
import Dropdown from 'react-bootstrap/Dropdown'; 
import { FaFilter } from "react-icons/fa";


function ClassFilter({ filterClasses, setClasses, dataClasses }) {
  return (
    <Dropdown className="filter-class">
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      <FaFilter className="filter-icon"/> Choose Class
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item as="button" className="dropdown-item" onClick={() => setClasses(dataClasses)}>View All</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("yoga")}>YOGA</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("stretching")}>STRETCHING</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("trx")}>TRX</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("aero")}>AERO</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("mfr")}>TABATA+MFR</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("hotyoga")}>HOT YOGA</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("hotstretching")}>HOT STRETCHING</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("fitboxing")}>FIT BOXING</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("pilates")}>PILATES</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("healthyback")}>HEALTHY BACK</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("functional")}>FUNCTIONAL TRAINING</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterClasses("personal")}>PERSONAL TRAINING</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ClassFilter;