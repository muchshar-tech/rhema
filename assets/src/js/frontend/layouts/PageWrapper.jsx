import React, { useEffect, useCallback, useRef } from 'react'

const PageWrapper = ({
    className,
    movePercentage,
    pagePos,
    onTransitionEnd,
    children,
}) => {
    const ref = useRef(null)
    const handlerOnTransitionEnd = useCallback(onTransitionEnd, [pagePos])
    useEffect(() => {
        const element = ref?.current

        if (onTransitionEnd) {
            element?.addEventListener('transitionend', handlerOnTransitionEnd)
        }

        return () => {
            element?.removeEventListener(
                'transitionend',
                handlerOnTransitionEnd
            )
        }
    }, [pagePos])
    return (
        <div
            ref={ref}
            style={{
                transform: `translateX(${-(pagePos * 100) + movePercentage}%`,
            }}
            className={className}
        >
            {children}
        </div>
    )
}

export default PageWrapper
