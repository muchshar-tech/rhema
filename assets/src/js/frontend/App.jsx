import React from 'react'
import { BiFontSize } from 'react-icons/bi'

import * as Layout from './layouts'
import P, * as Paragraph from './paragraph'
import * as Tools from './tools'
import * as Books from './books'
import * as Tabs from './tabs'

const App = () => {
    const style = `:host, :root {display:block;margin: 24px auto; font-size: 16px;}`

    return (
        <>
            <style>{style}</style>
            <style>
                @import
                "/wp-content/plugins/rhema/assets/public/css/frontend.css"
            </style>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
            </style>
            <Layout.AppContainer>
                <Layout.Top>
                    <Layout.Top.Row className="py-11px md:py-10px justify-between">
                        <Layout.Top.LeftSide>
                            <Tools.BooksSelectorButton
                                range={['出埃及记 3', '出埃及记 3']}
                            />
                            <Tools.Bordered>和合本</Tools.Bordered>
                        </Layout.Top.LeftSide>
                        <Layout.Top.RightSide>
                            <Tools.SearchBar />
                            <Tools.FullScreenToggle />
                            <Tools.Borderless>
                                <BiFontSize className="h-20px w-20px right-4px md:right-10px text-neutral-700" />
                            </Tools.Borderless>
                        </Layout.Top.RightSide>
                    </Layout.Top.Row>
                    <Tabs.BookTab />
                </Layout.Top>
                <Books.List />
                <Layout.Content>
                    <Layout.Page>
                        <h3 className="my-2">　神呼召摩西</h3>
                        <P>
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
                        </P>
                    </Layout.Page>
                    <Layout.Page>
                        <h3 className="my-2">　神呼召摩西</h3>
                        <P>
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
                        </P>
                    </Layout.Page>
                    <Layout.Page>
                        <h3 className="my-2">　神呼召摩西</h3>
                        <P>
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
                        </P>
                    </Layout.Page>
                </Layout.Content>
            </Layout.AppContainer>
        </>
    )
}

export default App
