import React from "react";
import {string, shape} from 'prop-types'

const CompanyNameTextField = ({record}) => {
    if (!record) return null

    const websiteUrl = `https://${record.website}`
    const onClick = (event) => {
        event.stopPropagation()
        event.preventDefault()
        window.open(websiteUrl)
    }

    return (
        <a href={websiteUrl} onClick={onClick}>
            {record.company.name}
        </a>
    )
}

CompanyNameTextField.propTypes = {
    record: shape({
        website: string.isRequired,
        company: shape({
            name: string.isRequired
        })
    })
}

export default CompanyNameTextField