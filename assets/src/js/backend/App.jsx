import React from 'react'
import { __ } from '@wordpress/i18n'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import * as Tab from './tab'
import * as FormTable from './form-table'

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/questions" element={<Questions />}></Route>
            </Routes>
        </HashRouter>
    )
}

const Main = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            bible_entry: 'bible',
        },
    })
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <h1 className="">Rhema</h1>
            <Tab.TabWrap>
                <Tab.Tab>
                    <Link to="/settings">Settings</Link>
                </Tab.Tab>
                <Tab.Tab>
                    <Link to="/addons">Addons</Link>
                </Tab.Tab>
            </Tab.TabWrap>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Tab.ContentsWrap>
                    <Tab.ContentWrap>
                        <Routes>
                            <Route path={`/settings`} element={<Settings />} />
                            <Route path={`/addon`} element={<Addon />} />
                            <Route index element={<Settings />} />
                        </Routes>
                    </Tab.ContentWrap>
                </Tab.ContentsWrap>
                <button type="submit" className="button button-primary">
                    Save Settings
                </button>
            </form>
        </>
    )
}

const Settings = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            bible_entry: 'bible',
        },
    })
    return (
        <FormTable.Table>
            <FormTable.Row>
                <FormTable.Label htmlFor="bible_entry">
                    {__('Bible Entry Path', 'myguten')}
                </FormTable.Label>
                <FormTable.FieldWrap>
                    /{' '}
                    <input
                        type="text"
                        id="bible_entry"
                        {...register('bible_entry')}
                        title="Route Namespace"
                        placeholder="Setup your bible reader route namespace"
                    />
                </FormTable.FieldWrap>
            </FormTable.Row>
            <FormTable.Row>
                <FormTable.Label htmlFor="bible_entry">
                    {__('Default Translation', 'myguten')}
                </FormTable.Label>
                <FormTable.FieldWrap>
                    <select {...register('bible_default_translation')}>
                        <option value="">{__('Default', 'myguten')}</option>
                        <option value="cuv">和合本</option>
                        <option value="kjv">King James Version</option>
                    </select>
                </FormTable.FieldWrap>
            </FormTable.Row>
        </FormTable.Table>
    )
}

const Addon = () => {
    return <div>Addon</div>
}

const Questions = () => {
    return <div>Question</div>
}
export default App
