import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./CoachCounter.css";

function CoachCounter({ hoursTrained, happyClients, personalBests, className, ...rest }) {
    const [viewPortEntered, setViewPortEntered] = useState(false);
  
    return (
        <section className="counter">
          <div className="counter-row">
          <div className="counter-column">
              <strong data-number="400">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={hoursTrained}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                HOURS TRAINED
              </span>
            </div>
            
            <div className="counter-column">
              <strong data-number="35">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={happyClients}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                HAPPY CLIENTS
              </span>
            </div>
  
            <div className="counter-column">
              <strong data-number="120">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={personalBests}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                  PERSONAL BESTS
              </span>
            </div>
          </div>
        </section>
    );
  }
  
  export default CoachCounter;
