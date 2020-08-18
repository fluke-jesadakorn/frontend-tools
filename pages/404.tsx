import React from 'react'
import useTranslation from 'next-translate/useTranslation'
// import Router from 'next-translate/Router'

const Index = () => {
    const { t } = useTranslation()
    const title = t("common:title")

    return (
        <div>{title}</div>
    )
}

export default Index