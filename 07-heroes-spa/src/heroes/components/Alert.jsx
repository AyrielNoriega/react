
const AlertPrimary = () => {
    return (
        <div className="alert alert-primary">
            Search a hero
        </div>
    )
}

const AlertDanger = ({q}) => {
    return (
        <div className="alert alert-danger">
            No hero with <b>{ q }</b>
        </div>
    )
}

export const Alert = ({q, heroes}) => {

    if (q.length === 0) {
        return (<AlertPrimary />)
    } else if (q.length > 0 && heroes.length === 0) {
        return (<AlertDanger q={q} />)
    }

}
