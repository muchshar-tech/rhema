import React from 'react'
import * as Tab from './tab'
import * as FormTable from './form-table'
import { useForm } from 'react-hook-form'

const App = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            rhemaRouteNamespace: 'bible',
        },
    })
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <h1 className="">Rhema</h1>
            <Tab.TabWrap>
                <Tab.Tab>General</Tab.Tab>
            </Tab.TabWrap>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Tab.ContentsWrap>
                    <Tab.ContentWrap>
                        <FormTable.Table>
                            <FormTable.Row>
                                <FormTable.Label htmlFor="rhemaRouteNamespace">
                                    Route Namespace
                                </FormTable.Label>
                                <FormTable.FieldWrap>
                                    <input
                                        type="text"
                                        id="rhemaRouteNamespace"
                                        {...register('rhemaRouteNamespace')}
                                        title="Route Namespace"
                                        placeholder="Setup your bible reader route namespace"
                                    />
                                </FormTable.FieldWrap>
                            </FormTable.Row>
                        </FormTable.Table>
                    </Tab.ContentWrap>
                </Tab.ContentsWrap>
                <button type="submit" className="button button-primary">
                    Save Settings
                </button>
            </form>
        </>
    )
}

export default App
