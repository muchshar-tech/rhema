import React, { useState } from 'react'
import { __ } from '@wordpress/i18n'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

import * as Tab from './tab'
import * as TabContents from './tab/contents'
import * as FormTable from './form-table'
import * as Components from '@components/backend/components'
import * as Activates from '@components/backend/activates'
import * as FeatureCards from '@components/backend/feature-cards'
import { useUpdateOptionsMutation } from '@components/services'

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
                        <Route
                            path={`/about`}
                            element={<TabContents.About />}
                        />
                        <Route
                            path={`/account`}
                            element={<TabContents.Account />}
                        />
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
            ...RHEMA_LOCALIZE.RHEMA_BACKEND.OPTIONS.general,
        },
    })
    const { register, handleSubmit, formState } = formMethods
    const { isSubmitting } = formState

    const [
        updateOptions,
        {
            data: updateOptionsResponse,
            error: updateOptionsError,
            isLoading: isRTKMutation,
        },
    ] = useUpdateOptionsMutation()

    const isUpdating = isRTKMutation || isSubmitting

    const showExceptionMessage =
        (!!updateOptionsResponse &&
            !/2[0-9][0-9]/.test(updateOptionsResponse?.response?.code)) ||
        !!updateOptionsError
    
    const showOptionsSaved = updateOptionsResponse?.success === true ? true : false

    console.log(updateOptionsError, updateOptionsResponse)
    const exceptionMessage = {
        code: updateOptionsError?.status,
        label: '',
        message:
            updateOptionsError?.data?.data?.message ||
            'There has been a critical error.',
    }
    const successMessage = {
        code: updateOptionsResponse?.response?.code || 200,
        label: 'Success',
        message:
            updateOptionsError?.data?.data?.message || updateOptionsResponse?.data?.message || 'Rhema options saved.',
    }

    const onSubmit = async (data) => {
        console.log(data)
        const payload = await updateOptions(data)
        console.log(payload)
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
                            {RHEMA_LOCALIZE.RHEMA_BACKEND.DATA.AVAILABLE_TRANSLATIONS.map(
                                (translation) => {
                                    return (
                                        <option
                                            value={translation.abbr.toLowerCase()}
                                            key={translation.id}
                                        >
                                            {translation.name}
                                        </option>
                                    )
                                }
                            )}
                        </select>
                    </FormTable.FieldWrap>
                </FormTable.Row>
            </FormTable.Table>
            <div className="flex">
                <button
                    type="submit"
                    className="button button-primary m-0 flex items-center"
                    {...(isUpdating && { disabled: true })}
                >
                    {isUpdating ? (
                        <Components.ButtonSpinner />
                    ) : (
                        'Save Settings'
                    )}
                </button>
                {showOptionsSaved ? (
                    <FormTable.ResponseSuccessMsg label={successMessage.label}>
                        {successMessage.message}
                    </FormTable.ResponseSuccessMsg>
                ) : null}
                {showExceptionMessage && (
                    <FormTable.ResponseErrorMsg
                        code={exceptionMessage.code}
                        label={exceptionMessage.label}
                    >
                        {exceptionMessage.message ||
                            'There has been a critical error.'}
                    </FormTable.ResponseErrorMsg>
                )}
            </div>
        </form>
    )
}

const Features = () => {
    console.log('Run Features')
    const [displayActiveCoreModal, setDisplayActiveCoreModal] = useState(false)
    const [displayLicensModal, setDisplayLicenseModal] = useState([false, ''])

    return (
        <div>
            Features
            <div className="flex flex-wrap -mx-2">
                <FeatureCards.Core
                    onClickActive={(e) => {
                        console.log('click Active')
                        e.preventDefault()
                        setDisplayActiveCoreModal(true)
                    }}
                    onClickLicense={(e) => {
                        console.log('click Active')
                        e.preventDefault()
                        setDisplayLicenseModal([true, 'core'])
                    }}
                />
                <FeatureCards.Relation />
                <FeatureCards.QandA />
                <FeatureCards.OfflineReading />
            </div>
            <Activates.Core
                show={displayActiveCoreModal}
                onClickClose={() => {
                    console.log('onClickClose onClick')
                    setDisplayActiveCoreModal(false)
                }}
            />
            <Activates.License
                show={displayLicensModal}
                onClickClose={() => {
                    setDisplayLicenseModal(false)
                }}
            />
        </div>
    )
}

export default App
