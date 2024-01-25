import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment/moment'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import { UI_MESSAGE_MAPPING } from '@assets/js/constants'
import { FeatureCard } from '@components/backend/components'
import { useSelector } from 'react-redux'

export const Core = ({ onClickActive, onClickLicense }) => {
    useSelector
    const isActive = useSelector((state) => {
        const timeZone = RHEMA_LOCALIZE.WP_OPTIONS.TIME_ZONE || '0'
        const key = state.general.licenses.bible.key
        const renewDate = moment(state.general.licenses.bible.renew_date).utcOffset(timeZone)
        const nowDate = moment()
        if (typeof key !== 'string' || key.length <= 0) {
            return false
        }
        if (nowDate.isAfter(renewDate)) {
            return false
        }
        return true
    })
    return (
        <FeatureCard title="Core" isActive={isActive} onClickActive={onClickActive} onClickLicense={onClickLicense}>
            {UI_MESSAGE_MAPPING['features/description/core']}
        </FeatureCard>
    )
}

export const Download2Host = ({ onClickActive, onClickLicense }) => {
    return (
        <FeatureCard title="Download to Host" onClickActive={onClickActive} onClickLicense={onClickLicense}>
            {UI_MESSAGE_MAPPING['features/description/download2host']}
        </FeatureCard>
    )
}

export const Relation = ({ onClickActive, onClickLicense }) => {
    return (
        <FeatureCard title="Relation" onClickActive={onClickActive} onClickLicense={onClickLicense}>
            {UI_MESSAGE_MAPPING['features/description/relation']}
        </FeatureCard>
    )
}

export const OfflineReading = () => {
    return (
        <FeatureCard title="Offline Reading" commingSoon={true}>
            {UI_MESSAGE_MAPPING['features/description/offline']}
        </FeatureCard>
    )
}
