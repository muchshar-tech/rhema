import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment/moment'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import { FeatureCard } from '@components/backend/components'
import { useSelector } from 'react-redux'

export const Core = ({ onClickActive, onClickLicense }) => {
    useSelector
    const isActive = useSelector((state) => {
        const timeZone = RHEMA_LOCALIZE.WP_OPTIONS.TIME_ZONE || '0'
        const key = state.general.licenses.bible.key
        const renewDate = moment(
            state.general.licenses.bible.renew_date
        ).utcOffset(timeZone)
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
        <FeatureCard
            title="Core"
            isActive={isActive}
            onClickActive={onClickActive}
            onClickLicense={onClickLicense}
        >
            Rhema 核心功能：閱讀、查詢全本聖經
        </FeatureCard>
    )
}

export const Relation = () => {
    return (
        <FeatureCard title="Relation" commingSoon={true}>
            自動關連經文相關文章、經文插入工具
        </FeatureCard>
    )
}

export const QandA = () => {
    return (
        <FeatureCard title="Q&A" commingSoon={true}>
            聖經經文問與答功能
        </FeatureCard>
    )
}

export const OfflineReading = () => {
    return (
        <FeatureCard title="Offline Reading" commingSoon={true}>
            支援 PWA 技術，讓網站的聖經可以在手機上離線閱讀
        </FeatureCard>
    )
}
