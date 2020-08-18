import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import styles from './styles/styles.module.css'

const Index = () => {
    const { t } = useTranslation()
    const title: string = t`common:title`

    return (
        <div>
            
        </div>
    )
}

export default Index