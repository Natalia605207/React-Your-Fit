const TabInfoTwo = ({ fabric, careInstructions, season, sku }) => {
    return <div className="tab-info">
        <p className="tab-content"><span className="additional-heading">Fabric type:</span> {fabric}</p>
        <p className="tab-content"><span className="additional-heading">Care instructions:</span> {careInstructions}</p>
        <p className="tab-content"><span className="additional-heading">Season:</span> {season}</p>
        <p className="tab-content"><span className="additional-heading">Item #:</span> {sku}</p>
    </div>
}

export default TabInfoTwo;