import { RiFileCopyLine } from '@remixicon/react'
import { Link } from 'react-router-dom'
import { reduceHash } from '../../utlits/data/utils'
import { validatorNodeId, validatorLink, delegationAddress, delegationLink } from '../../utlits/data/constants'


export const CopyPasteButton = ({ text }) => {
    return <Link onClick={() => {navigator.clipboard.writeText(text)}}><RiFileCopyLine size={16} /></Link>
}

export const ValidatorNodeLink = () => {
    return <span><Link target="_blank" to={validatorLink}>{reduceHash(validatorNodeId)}</Link>&nbsp;<CopyPasteButton text={validatorNodeId} /></span>
}

export const DelegationAddressLink = () => {
    return <span><Link target="_blank" to={delegationLink}>{reduceHash(delegationAddress)}</Link>&nbsp;<CopyPasteButton text={delegationAddress} /></span>
}