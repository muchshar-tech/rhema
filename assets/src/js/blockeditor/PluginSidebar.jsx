import React, { useState } from 'react'
import { Provider } from 'react-redux'
import ReactShadowRoot from 'react-shadow-root'
import {
    PanelBody,
    Panel,
    PanelRow,
    PanelHeader,
    Button,
    Modal,
} from '@wordpress/components'
import { useEntityProp } from '@wordpress/core-data'
import { __ } from '@wordpress/i18n'

import BibleSelector from './BibleSelector'
import { Store } from '@components/frontend/store'

export default () => {
    const [meta, setMeta] = useEntityProp('postType', 'post', 'meta')
    const [isOpen, setOpen] = useState(false)
    const openModal = () => setOpen(true)
    const closeModal = (e) => {
        if (
            !!e &&
            e.type !== 'click' &&
            e.type !== 'keydown' &&
            e.key !== 'Escape'
        ) {
            return false
        }
        console.trace('close')
        setOpen(false)
    }
    return (
        <>
            <Panel className="tailwind">
                <PanelBody>
                    <div>123</div>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody title="Selector" initialOpen={true}>
                    <PanelRow>My Panel Inputs and Labels</PanelRow>
                    <Button variant="secondary" onClick={openModal}>
                        Open Modal
                    </Button>
                </PanelBody>
            </Panel>
            {isOpen && (
                <Modal
                    title="Bible verse selector"
                    overlayClassName="tailwind"
                    className="[&>div.components-modal\_\_content]:pt-0 [&>div.components-modal\_\_content]:px-0 [&>div.components-modal\_\_content]:pb-0"
                    onRequestClose={closeModal}
                    size="large"
                    __experimentalHideHeader={true}
                >
                    <ReactShadowRoot>
                        <Provider
                            store={
                                new Store({
                                    general: {
                                        routerMode: 'memory',
                                        layoutAllocationMode: 'split',
                                        footerSwitch: {
                                            main: {
                                                confirmSelection: true,
                                            },
                                        },
                                    },
                                })
                            }
                        >
                            <BibleSelector />
                        </Provider>
                    </ReactShadowRoot>
                </Modal>
            )}
        </>
    )
}
