const SingleContact = ({data}) => {
    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.mob}</td>
            <td>{data.address}</td>
        </tr>
    )
}

export default SingleContact;