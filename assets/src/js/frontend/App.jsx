import React from 'react'
import { useSelect, useMultipleSelection } from 'downshift'

import * as Layout from './layouts'
import * as Headers from './headers'
import * as Paragraph from './paragraph'
import * as Books from './books'
import * as Forms from './forms'

const App = () => {
    const style = `:host, :root {display:block;margin: 24px auto; font-size: 16px;}`
    const pluginFrontendCssUrl =
        LOCALIZE_SCRIPT_VARIABLES.PLUGIN_FRONTEND_CSS_URL
    return (
        <>
            <style>
                @import '{pluginFrontendCssUrl}'; @import
                url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
                {style}
            </style>
            {/* <SelectExample /> */}
            <Layout.AppContainer>
                <Layout.Top>
                    <Headers.Main />
                    <Headers.Books />
                    <Headers.Selection />
                </Layout.Top>
                <Layout.Body>
                    <Books.List />
                    <Layout.Content>
                        <Layout.Page>
                            <Paragraph.Title>　神呼召摩西</Paragraph.Title>
                            <Paragraph.Block>
                                <Paragraph.Line verseNum="1">
                                    摩西牧养他岳父米甸祭司叶忒罗的羊群；一日领羊群往野外去，到了　神的山，就是何烈山。
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="2">
                                    耶和华的使者从荆棘里火焰中向摩西显现。摩西观看，不料，荆棘被火烧着，却没有烧毁。
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="3">
                                    摩西说：“我要过去看这大异象，这荆棘为何没有烧坏呢？”
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="4">
                                    耶和华　神见他过去要看，就从荆棘里呼叫说：“摩西！摩西！”他说：“我在这里。”
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="5">
                                    　神说：“不要近前来。当把你脚上的鞋脱下来，因为你所站之地是圣地”；
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="6">
                                    又说：“我是你父亲的　神，是亚伯拉罕的　神，以撒的　神，雅各的　神。”摩西蒙上脸，因为怕看　神。
                                </Paragraph.Line>
                            </Paragraph.Block>
                            <Paragraph.Title>　神呼召摩西</Paragraph.Title>
                            <Paragraph.Block>
                                <Paragraph.Line verseNum="1">
                                    摩西牧养他岳父米甸祭司叶忒罗的羊群；一日领羊群往野外去，到了　神的山，就是何烈山。
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="2">
                                    耶和华的使者从荆棘里火焰中向摩西显现。摩西观看，不料，荆棘被火烧着，却没有烧毁。
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="3">
                                    摩西说：“我要过去看这大异象，这荆棘为何没有烧坏呢？”
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="4">
                                    耶和华　神见他过去要看，就从荆棘里呼叫说：“摩西！摩西！”他说：“我在这里。”
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="5">
                                    　神说：“不要近前来。当把你脚上的鞋脱下来，因为你所站之地是圣地”；
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="6">
                                    又说：“我是你父亲的　神，是亚伯拉罕的　神，以撒的　神，雅各的　神。”摩西蒙上脸，因为怕看　神。
                                </Paragraph.Line>
                            </Paragraph.Block>
                        </Layout.Page>
                        <Layout.Page>
                            <Paragraph.Title>　神呼召摩西</Paragraph.Title>
                            <Paragraph.Block>
                                <Paragraph.Line verseNum="1">
                                    摩西牧养他岳父米甸祭司叶忒罗的羊群；一日领羊群往野外去，到了　神的山，就是何烈山。
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="2">
                                    耶和华的使者从荆棘里火焰中向摩西显现。摩西观看，不料，荆棘被火烧着，却没有烧毁。
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="3">
                                    摩西说：“我要过去看这大异象，这荆棘为何没有烧坏呢？”
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="4">
                                    耶和华　神见他过去要看，就从荆棘里呼叫说：“摩西！摩西！”他说：“我在这里。”
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="5">
                                    　神说：“不要近前来。当把你脚上的鞋脱下来，因为你所站之地是圣地”；
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="6">
                                    又说：“我是你父亲的　神，是亚伯拉罕的　神，以撒的　神，雅各的　神。”摩西蒙上脸，因为怕看　神。
                                </Paragraph.Line>
                            </Paragraph.Block>
                        </Layout.Page>
                        <Layout.Page>
                            <Paragraph.Title>　神呼召摩西</Paragraph.Title>
                            <Paragraph.Block>
                                <Paragraph.Line verseNum="1">
                                    摩西牧养他岳父米甸祭司叶忒罗的羊群；一日领羊群往野外去，到了　神的山，就是何烈山。
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="2">
                                    耶和华的使者从荆棘里火焰中向摩西显现。摩西观看，不料，荆棘被火烧着，却没有烧毁。
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="3">
                                    摩西说：“我要过去看这大异象，这荆棘为何没有烧坏呢？”
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="4">
                                    耶和华　神见他过去要看，就从荆棘里呼叫说：“摩西！摩西！”他说：“我在这里。”
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="5">
                                    　神说：“不要近前来。当把你脚上的鞋脱下来，因为你所站之地是圣地”；
                                </Paragraph.Line>
                                <Paragraph.Line verseNum="6">
                                    又说：“我是你父亲的　神，是亚伯拉罕的　神，以撒的　神，雅各的　神。”摩西蒙上脸，因为怕看　神。
                                </Paragraph.Line>
                            </Paragraph.Block>
                        </Layout.Page>
                    </Layout.Content>
                    <Layout.Drawer name="new-post">
                        <Forms.Posts />
                    </Layout.Drawer>
                    <Layout.Drawer name="relative-posts">
                        123
                    </Layout.Drawer>
                </Layout.Body>
            </Layout.AppContainer>
        </>
    )
}

export default App
