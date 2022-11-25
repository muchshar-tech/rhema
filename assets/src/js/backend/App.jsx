import React from 'react'
import { __ } from '@wordpress/i18n'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'

import * as Tab from './tab'
import * as FormTable from './form-table'

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
            bible_entry: 'bible'
        }
    })
    const { handleSubmit } = formMethods
    const onSubmit = (data) => {
        fetch(`${RHEMA_LOCALIZE.RHEMA_REST_ENDPOINTS.options}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(data).toString()
        })
        .then(res => res.json)
        .then(resData => {
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
                    to="/addons"
                >
                    Addons
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
                                <Route path={`/addons`} element={<Addons />} />
                                <Route index element={<Settings />} />
                            </Routes>
                        </Tab.ContentWrap>
                    </Tab.ContentsWrap>
                    <button type="submit" className="button button-primary">
                        Save Settings
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
                    {__('Default Translation', RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT)}
                </FormTable.Label>
                <FormTable.FieldWrap>
                    <select
                        id="bible_default_translation"
                        {...register('bible_default_translation')}
                    >
                        <option value="">{__('Default', RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT)}</option>
                        <option value="cuv">和合本</option>
                        <option value="kjv">King James Version</option>
                    </select>
                </FormTable.FieldWrap>
            </FormTable.Row>
        </FormTable.Table>
    )
}

const Addons = () => {
    return <div>Addons</div>
}

const Questions = () => {
    return <div>Question</div>
}
export default App
