import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMark = ({lat, lng, onclick}) => {
return (
    <div className='location-marker' onClick={onclick} style={{ fontSize: '2rem', color: 'red' }}>
            <Icon icon={locationIcon} className='location-icon'/>
    </div>
)
}

export default LocationMark