import { RiFileCopyLine } from '@remixicon/react'
import { Link } from 'react-router-dom'
import { reduceHash } from '../../utlits/data/utils'
import { validatorNodeId, validatorLink, delegationAddress, delegationLink } from '../../utlits/data/constants'


export const CopyPasteButton = ({ text }) => {
    return <Link onClick={() => {navigator.clipboard.writeText(text)}}><RiFileCopyLine size={16} /></Link>
}

export const ValidatorNodeLink = () => {
    return <span><Link to={validatorLink}>{reduceHash(validatorNodeId)}</Link> <CopyPasteButton text={validatorNodeId} /></span>
}

export const DelegationAddressLink = () => {
    return <span><Link to={delegationLink}>{reduceHash(delegationAddress)}</Link> <CopyPasteButton text={delegationAddress} /></span>
}