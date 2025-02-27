import { RiFileCopyLine } from '@remixicon/react'
import { Link } from 'react-router-dom'
import { formatAddress } from '../../utlits/eip6963/formatting'
import { validatorNodeId, validatorLink, delegationAddress, delegationLink } from '../../utlits/data/constants'


export const CopyPasteButton = ({ text }) => {
    return <Link onClick={(event) => {
        event.preventDefault()
        navigator.clipboard.writeText(text)
    }}><RiFileCopyLine size={16} /></Link>
}

export const ValidatorNodeLink = () => {
    return <span><Link target="_blank" to={validatorLink}>{formatAddress(validatorNodeId)}</Link>&nbsp;<CopyPasteButton text={validatorNodeId} /></span>
}

export const DelegationAddressLink = () => {
    return <span><Link target="_blank" to={delegationLink}>{formatAddress(delegationAddress)}</Link>&nbsp;<CopyPasteButton text={delegationAddress} /></span>
}