/**
 * SASS
 */
import '../postcss/blockeditor.pcss'

/**
 * JavaScript
 */
import { registerPlugin } from '@wordpress/plugins'
import { PluginSidebar } from '@wordpress/edit-post'

import RHEMA_LOCALIZE from 'RHEMA_LOCALIZE'
import Sidebar from './blockeditor/PluginSidebar'

registerPlugin(RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT, {
    icon: 'book-alt',
    render: () => {
        return (
            <PluginSidebar name={RHEMA_LOCALIZE.RHEMA_DOMAIN_TEXT} title="Bible Relations">
                <Sidebar />
            </PluginSidebar>
        )
    },
})