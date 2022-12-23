import React, { useState } from 'react'
import { __ } from '@wordpress/i18n'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

import * as Tab from './tab'
import * as FormTable from './form-table'
import * as Components from '@components/backend/components'

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/*" element={<Main />} />
            </Routes>
        </HashRouter>
    )
}

const Main = () => {
    const formMethods = useForm({
        defaultValues: {
            bible_entry: 'bible',
            ...RHEMA_LOCALIZE.RHEMA_BACKEND.OPTIONS.general,
        },
    })
    const { handleSubmit, formState } = formMethods
    const { isSubmitting } = formState
    const onSubmit = (data) => {
        return fetch(`${RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.options}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data).toString(),
        })
            .then((res) => res.json)
            .then((resData) => {
                console.log(resData)
            })
        console.log(data)
    }
    return (
        <>
            <h1 className="">Rhema</h1>
            <Tab.TabWrap>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? ['nav-tab', 'nav-tab-active'].join(' ')
                            : 'nav-tab'
                    }
                    to="/settings"
                >
                    Settings
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? ['nav-tab', 'nav-tab-active'].join(' ')
                            : 'nav-tab'
                    }
                    to="/features"
                >
                    Features
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? ['nav-tab', 'nav-tab-active'].join(' ')
                            : 'nav-tab'
                    }
                    to="/about"
                >
                    About
                </NavLink>
            </Tab.TabWrap>
            <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Tab.ContentsWrap>
                        <Tab.ContentWrap>
                            <Routes>
                                <Route
                                    path={`/settings`}
                                    element={<Settings />}
                                />
                                <Route
                                    path={`/features`}
                                    element={<Features />}
                                />
                                <Route path={`/about`} element={<About />} />
                                <Route index element={<Settings />} />
                            </Routes>
                        </Tab.ContentWrap>
                    </Tab.ContentsWrap>
                    <button
                        type="submit"
                        className="button button-primary"
                        {...(isSubmitting && { disabled: true })}
                    >
                        {isSubmitting ? (
                            <span className="spinner is-active"></span>
                        ) : (
                            'Save Settings'
                        )}
                    </button>
                </form>
            </FormProvider>
        </>
    )
}

const Settings = () => {
    const formMethods = useFormContext()
    const {
        register,
        formState: { errors },
    } = formMethods
    return (
        <FormTable.Table>
            <FormTable.Row>
                <FormTable.Label htmlFor="bible_entry">
                    {__('Bible Entry Path', RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT)}
                </FormTable.Label>
                <FormTable.FieldWrap>
                    {RHEMA_LOCALIZE.RHEMA_SITE_ROOT + '/'}
                    <input
                        type="text"
                        id="bible_entry"
                        className="ml-2px"
                        {...register('bible_entry')}
                        title="Route Namespace"
                        placeholder="Setup your bible reader route namespace"
                    />
                </FormTable.FieldWrap>
            </FormTable.Row>
            <FormTable.Row>
                <FormTable.Label htmlFor="bible_default_translation">
                    {__(
                        'Default Translation',
                        RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
                    )}
                </FormTable.Label>
                <FormTable.FieldWrap>
                    <select
                        id="bible_default_translation"
                        {...register('bible_default_translation')}
                    >
                        <option value="">
                            {__('Default', RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT)}
                        </option>
                        <option value="cuv">和合本</option>
                        <option value="kjv">King James Version</option>
                    </select>
                </FormTable.FieldWrap>
            </FormTable.Row>
        </FormTable.Table>
    )
}

const Features = () => {
    const [displayActiveCoreModal, setDisplayActiveCoreModal] = useState(false)
    return (
        <div>
            Features
            <div className="flex flex-wrap -mx-2">
                <FeatureCard
                    title="Core"
                    onClickActive={(e) => {
                        console.log('click Active')
                        e.preventDefault()
                        setDisplayActiveCoreModal(true)
                    }}
                >
                    Rhema 核心功能：閱讀、查詢全本聖經
                </FeatureCard>
                <FeatureCard title="Relation" commingSoon={true}>
                    自動關連經文相關文章、經文插入工具
                </FeatureCard>
                <FeatureCard title="Q&A" commingSoon={true}>
                    聖經經文問與答功能
                </FeatureCard>
                <FeatureCard title="Offline Reading" commingSoon={true}>
                    支援 PWA 技術，讓網站的聖經可以在手機上離線閱讀
                </FeatureCard>
            </div>
            <Components.ScreenOverlay
                show={displayActiveCoreModal}
                title="Apply to activate Rhema"
                onClickClose={(e) => {
                    e.preventDefault()
                    setDisplayActiveCoreModal(false)
                }}
            >
                <div className="flex items-center mb-2">
                    <div className="flex-grow mr-2">Email</div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <div className="flex-grow mr-2">Domain</div>
                    <div>
                        <input type="text" value={location.hostname} readOnly />
                    </div>
                </div>
                <div>
                    <button className="button button-primary">Confirm</button>
                </div>
            </Components.ScreenOverlay>
        </div>
    )
}

const FeatureCard = ({
    title,
    version = '0.0.0',
    commingSoon,
    onClickActive,
    children,
}) => {
    return (
        <div className="px-2 py-2 w-80">
            <div className="postbox mb-0 min-w-0">
                <div className="postbox-header px-2">
                    <h2 className="text-14px py-3 m-0">{title}</h2>
                    <div className="flex items-center hide-if-no-js">
                        <span className="text-gray-400 mr-1">Status:</span>
                        <Components.SwitchToggle />
                    </div>
                </div>
                <div className="inside">{children}</div>
                <div className="p-1 flex items-center justify-between border-0 border-t border-[#c3c4c7] border-solid bg-[#f6f7f7]">
                    {commingSoon ? (
                        <button className="button" disabled>
                            Comming Soon...
                        </button>
                    ) : (
                        <button className="button" onClick={onClickActive}>
                            Active
                        </button>
                    )}
                    <span className="text-gray-500">{version}</span>
                </div>
            </div>
        </div>
    )
}

const About = () => {
    return <div>About</div>
}
export default App
