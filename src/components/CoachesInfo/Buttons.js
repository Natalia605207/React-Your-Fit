import '../../App.css';

export const Buttons = ({ filterCoaches, setCoaches, dataCoaches }) => {
  return (
    <div className="classesBtnGroup">
    <button className="filtered-classes" onClick={() => setCoaches(dataCoaches)}>View All</button>
    <button className="filtered-classes" onClick={() => filterCoaches("yoga")}>Yoga</button>
    <button className="filtered-classes" onClick={() => filterCoaches("stretching")}>Stretching</button>
    <button className="filtered-classes" onClick={() => filterCoaches("trx")}>TRX</button>
    <button className="filtered-classes" onClick={() => filterCoaches("aero")}>Aero</button>
    <button className="filtered-classes" onClick={() => filterCoaches("mfr")}>MFR</button>
    <button className="filtered-classes" onClick={() => filterCoaches("fitboxing")}>Fit boxing</button>
    <button className="filtered-classes" onClick={() => filterCoaches("pilates")}>Pilates</button>
    <button className="filtered-classes" onClick={() => filterCoaches("healthyback")}>Healthy back</button>
    <button className="filtered-classes" onClick={() => filterCoaches("functional")}>Functional training</button>
    </div>
  );
}
