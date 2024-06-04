export const DailyClasses = ({ name, time }) => {
    return(
        <div className="flex-between">
            <p className="accordion-content">{name}</p>
            <p className="accordion-content">{time}</p>
        </div>
    )
}