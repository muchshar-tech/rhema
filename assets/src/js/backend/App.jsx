import React, { useState } from 'react'
import { __ } from '@wordpress/i18n'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi';
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

import * as Tab from './tab'
import * as FormTable from './form-table'
import * as Components from '@components/backend/components'
import * as FieldSchama from '@components/backend/schema'

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
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? ['nav-tab', 'nav-tab-active'].join(' ')
                            : 'nav-tab'
                    }
                    to="/account"
                >
                    My Account
                </NavLink>
            </Tab.TabWrap>
            <Tab.ContentsWrap>
                <Tab.ContentWrap>
                    <Routes>
                        <Route path={`/settings`} element={<Settings />} />
                        <Route path={`/features`} element={<Features />} />
                        <Route path={`/about`} element={<About />} />
                        <Route index element={<Settings />} />
                    </Routes>
                </Tab.ContentWrap>
            </Tab.ContentsWrap>
        </>
    )
}

const Settings = () => {
    const formMethods = useForm({
        defaultValues: {
            bible_entry: 'bible',
            ...RHEMA_LOCALIZE.RHEMA_BACKEND.options.general,
        },
    })
    const { register, handleSubmit, formState } = formMethods
    const { isSubmitting } = formState
    const onSubmit = (data) => {
        console.log(data)
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
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormTable.Table>
                <FormTable.Row>
                    <FormTable.Label htmlFor="bible_entry">
                        {__(
                            'Bible Entry Path',
                            RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
                        )}
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
                                {__(
                                    'Default',
                                    RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT
                                )}
                            </option>
                            <option value="cuv">和合本</option>
                            <option value="kjv">King James Version</option>
                        </select>
                    </FormTable.FieldWrap>
                </FormTable.Row>
            </FormTable.Table>
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
    )
}

const Features = () => {
    const coreFormMethods = useForm({
        defaultValues: {
            active: {
                email: RHEMA_LOCALIZE.WP_OPTIONS.admin_email,
                identity_type: 'domain',
                product_slug: 'wp-rehema-core-feature',
                username: RHEMA_LOCALIZE.WP_OPTIONS.host_domain,
                password: '',
            },
            restore: {},
        },
        resolver: joiResolver(FieldSchama.activateRhemeaFields)
    })
    const { register, formState, handleSubmit } = coreFormMethods
    const { isSubmitting, errors } = formState
    const [displayActiveCoreModal, setDisplayActiveCoreModal] = useState(false)
    const [displayLicenseCoreModal, setDisplayLicenseCoreModal] =
        useState(false)

    const onSubmit = (data) => {
        console.log(errors)
        console.log(data)
    }

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
                    onClickLicense={(e) => {
                        console.log('click Active')
                        e.preventDefault()
                        setDisplayLicenseCoreModal(true)
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
                <div className="flex mb-3">
                    <div className="w-full p-2 border-t border-b border-l-0 border-r-0 border-[#c3c4c7] border-solid">
                        <div className="mb-1">
                            <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">
                                Product
                            </span>
                            Rhema Core
                        </div>
                        <div className="mb-1">
                            <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">
                                Price
                            </span>
                            Free
                        </div>
                        <div className="mb-1">
                            <span className="inline-block bg-gray-300 p-4px mr-1 rounded font-medium">
                                Subscription period
                            </span>
                            Unlimited
                        </div>
                    </div>
                </div>

                <FormTable.ModalForm onSubmit={handleSubmit(onSubmit)}>
                    <FormTable.ModalForm.FieldRow label="Email">
                        <input
                            className="w-full"
                            type="text"
                            {...register('active.email', {
                                required: true,
                            })}
                        />
                        <p className="m-0 mb-2 max-w-200px text-xs">
                            License key will be sent to this email, please
                            confirm that you can receive.
                        </p>
                        {!!errors.active?.email?.message && (
                            <p role="alert" className="m-0 mb-2 max-w-200px text-xs text-red-500">{errors.active?.email?.message}</p>
                        )}
                    </FormTable.ModalForm.FieldRow>
                    <FormTable.ModalForm.FieldRow label="Domain">
                        <input
                            type="text"
                            className="w-full"
                            {...register('active.username', {
                                required: true,
                            })}
                            readOnly
                        />
                        <p className="m-0 mb-2 max-w-200px text-xs">
                            In the future, if you lose the License key, please
                            use this field value as the username to log in to
                            "logos.api"
                        </p>
                    </FormTable.ModalForm.FieldRow>
                    <FormTable.ModalForm.FieldRow label="Password">
                        <input
                            type="password"
                            className="w-full min-w-200px"
                            {...register('active.password', {
                                required: true,
                            })}
                        />
                        {!!errors.active?.password.message && (
                            <p role="alert" className="m-0 mb-2 max-w-200px text-xs text-red-500">{errors.active?.password.message}</p>
                        )}
                    </FormTable.ModalForm.FieldRow>
                    <FormTable.ModalForm.FieldRow label="Confirm Password">
                        <input
                            type="password"
                            className="w-full min-w-200px"
                            {...register('active.confirm_password', {
                                required: true,
                            })}
                        />
                        
                    </FormTable.ModalForm.FieldRow>
                    <div>
                        <button
                            className="button button-primary"
                            {...(isSubmitting && { disabled: true })}
                        >
                            {isSubmitting ? (
                                <span className="spinner is-active"></span>
                            ) : (
                                'Confirm'
                            )}
                        </button>
                    </div>
                </FormTable.ModalForm>
            </Components.ScreenOverlay>
            <Components.ScreenOverlay
                show={displayLicenseCoreModal}
                title="Enter license to active"
                onClickClose={(e) => {
                    e.preventDefault()
                    setDisplayLicenseCoreModal(false)
                }}
            >
                setDisplayActiveCoreModal
            </Components.ScreenOverlay>
        </div>
    )
}

const FeatureCard = ({
    title,
    version = '0.0.0',
    commingSoon,
    onClickActive = () => false,
    onClickLicense = () => false,
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
                        <div>
                            <button
                                className="button mr-2"
                                onClick={onClickActive}
                            >
                                Active
                            </button>
                            <button className="button" onClick={onClickLicense}>
                                License
                            </button>
                        </div>
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
