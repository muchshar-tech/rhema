import React from 'react'
import { __ } from '@wordpress/i18n'
import { useForm } from 'react-hook-form'

import * as Tab from './tab'
import * as FormTable from './form-table'

const AnwsersMetaBox = () => {
    return (
        <>
            <section className="group flex">
                <div className>
                    <span class="dashicons dashicons-saved"></span>
                    <span class="dashicons dashicons-sticky"></span>
                </div>
                <div className="border-b pb-3 group-last:border-none">
                    <div>
                    力的開麻煩誇張，道為什，己的有一個自家是開我就是有，都事務所時超喜還很，要是可愛喔喜歡我，好再麻煩歡這個不一樣我之前。知一樣可是他，能怎麼這，像是可以一樣麼看了是這樣列，很多似的一下。

                    得很都是的不是應該名字個天真的，金額怎麼行動，看起是我剛剛麼意的一個，主不結局肩膀就來了覺知。比較有因方畢竟是現在有，幾乎是遺失物，在意的部上是只是真到是沒，了嗎能夠廁所，最後還身真聖出來書是什超好，不覺得。果不我們上就是因，一臉開始一百那樣我可以溫柔的⋯的朋友來是，好像覺得好也覺至少候都，原我們有太機車們兩前幾天，嗚嗚嗚。
                    </div>
                    <div className="flex flex-wrap justify-end">
                        <div className="text-xs">
                            <span className="block">answered Apr 30, 2009 at 7:22</span>
                            <div className="flex">
                                <img
                                    alt=""
                                    src="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=64&amp;d=mm&amp;r=g"
                                    className="float-left w-11"
                                ></img>
                                <div>
                                    <span className="block font-medium whitespace-nowrap">A WordPress Commenter</span>
                                    <span className="block whitespace-nowrap">https://wordpress.org/</span>
                                    <span className="block whitespace-nowrap">wapuu@wordpress.example</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default AnwsersMetaBox
